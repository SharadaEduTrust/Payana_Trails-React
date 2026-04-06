const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

/**
 * processImages(folderResolver)
 *
 * Returns an async Express middleware that:
 *  1. Reads each file buffer from req.files (placed there by multer memoryStorage)
 *  2. Converts it to WebP at 80% quality using Sharp
 *  3. Writes the .webp file to the correct upload folder
 *  4. Replaces req.files[field][i] with a plain object that mimics diskStorage output
 *     so the existing route controllers work without any changes.
 *
 * @param {Function} folderResolver  - (req) => string  — returns the base upload folder path
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

    // Iterate over every field (heroImage, routeMap, trailImages, etc.)
    for (const fieldname of Object.keys(req.files)) {
      const processedFiles = [];

      for (const file of req.files[fieldname]) {
        // Build a WebP filename with the same prefix logic as before
        let baseName;
        if (fieldname === "heroImage") {
          baseName = `hero-${Date.now()}`;
        } else if (fieldname === "routeMap") {
          baseName = `routemap-${Date.now()}`;
        } else {
          // trailImages or any other field
          const originalBase = path.parse(file.originalname).name;
          baseName = `${Date.now()}-${originalBase}`;
        }

        const webpFilename = `${baseName}.webp`;
        const destPath = path.join(folder, webpFilename);

        // Convert buffer → WebP (quality 80, progressive-friendly)
        await sharp(file.buffer).webp({ quality: 80 }).toFile(destPath);

        // Mimic the diskStorage file object so downstream route code is unchanged
        processedFiles.push({
          fieldname: file.fieldname,
          originalname: file.originalname,
          encoding: file.encoding,
          mimetype: "image/webp",
          destination: folder,
          filename: webpFilename,
          path: destPath,
          size: fs.statSync(destPath).size,
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

module.exports = processImages;
