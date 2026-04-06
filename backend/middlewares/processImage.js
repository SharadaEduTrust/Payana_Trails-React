const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

/**
 * Dimension presets per field name.
 * Sharp will resize using 'inside' fit (scales to fit within these bounds,
 * never upscaling) so portrait images aren't distorted.
 * heroImage  → 1920 × 1080  (full HD landscape banner)
 * routeMap   → 1200 × 900   (landscape map-friendly)
 * trailImages→ 1200 × 800   (gallery cards)
 */
const RESIZE_PRESETS = {
  heroImage:   { width: 1920, height: 1080 },
  routeMap:    { width: 1200, height: 900  },
  trailImages: { width: 1920, height: 1080 },
};

/**
 * Safely resolves a stored URL path (e.g. "/uploads/Trails/foo/bar.jpg")
 * to an absolute filesystem path, avoiding the Windows path.join trap
 * where a leading "/" discards the left-hand side.
 *
 * @param {string} storedPath  - The relative URL path stored in MongoDB
 * @returns {string}           - Absolute filesystem path
 */
const resolveUploadPath = (storedPath) => {
  // Strip any leading slash so path.resolve treats it as relative to CWD
  const relative = storedPath.replace(/^\/+/, "");
  return path.resolve(relative);
};

/**
 * processImages(folderResolver)
 *
 * Returns an async Express middleware that:
 *  1. Reads each file buffer from req.files (multer memoryStorage)
 *  2. Resizes the image to its field-specific preset (inside fit, no upscale)
 *  3. Converts to WebP at 80% quality using Sharp
 *  4. Writes the .webp file to the correct upload folder on disk
 *  5. Replaces req.files[field][i] with a diskStorage-compatible object
 *  6. Attaches req.imageStats[] with originalSize / compressedSize / savedPercent
 *     for each processed file so routes can forward this info in the response.
 *
 * @param {Function} folderResolver  (req) => string — absolute upload folder path
 */
const processImages = (folderResolver) => async (req, res, next) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return next();
    }

    const folder = folderResolver(req);

    // Ensure the target directory exists
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }

    // Collect stats for all processed files
    req.imageStats = [];

    for (const fieldname of Object.keys(req.files)) {
      const processedFiles = [];
      const preset = RESIZE_PRESETS[fieldname];

      for (const file of req.files[fieldname]) {
        // Build WebP filename with the same prefix logic as before
        let baseName;
        if (fieldname === "heroImage") {
          baseName = `hero-${Date.now()}`;
        } else if (fieldname === "routeMap") {
          baseName = `routemap-${Date.now()}`;
        } else {
          const originalBase = path.parse(file.originalname).name;
          baseName = `${Date.now()}-${originalBase}`;
        }

        const webpFilename = `${baseName}.webp`;
        const destPath = path.join(folder, webpFilename);

        // Build Sharp pipeline: optionally resize then convert to WebP
        let pipeline = sharp(file.buffer);
        if (preset) {
          pipeline = pipeline.resize(preset.width, preset.height, {
            fit: "inside",      // never distorts; keeps aspect ratio
            withoutEnlargement: true, // never upscales small images
          });
        }
        await pipeline.webp({ quality: 80 }).toFile(destPath);

        const compressedSize = fs.statSync(destPath).size;
        const originalSize = file.size;
        const savedPercent = originalSize > 0
          ? Math.round((1 - compressedSize / originalSize) * 100)
          : 0;

        // Record stats
        req.imageStats.push({
          field: fieldname,
          originalName: file.originalname,
          originalSize,           // bytes
          compressedSize,         // bytes
          savedPercent,           // e.g. 65 means "65% smaller"
          savedBytes: originalSize - compressedSize,
        });

        // Mimic diskStorage object so downstream route controllers are unchanged
        processedFiles.push({
          fieldname: file.fieldname,
          originalname: file.originalname,
          encoding: file.encoding,
          mimetype: "image/webp",
          destination: folder,
          filename: webpFilename,
          path: destPath,
          size: compressedSize,
        });
      }

      req.files[fieldname] = processedFiles;
    }

    next();
  } catch (err) {
    console.error("Image processing error:", err);
    next(err);
  }
};

module.exports = { processImages, resolveUploadPath };
