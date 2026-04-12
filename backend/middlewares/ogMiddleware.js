/**
 * OG (Open Graph) Middleware
 *
 * Social media bots (WhatsApp, Telegram, Twitter, etc.) read <meta> OG tags
 * from the raw HTML of a page. Since this is a React SPA, the HTML is static
 * and bots never see the dynamic data. This middleware detects those bots and
 * serves a lightweight HTML page with the correct OG tags injected from the DB.
 *
 * Regular users are served the normal React app (index.html or Vite dev server).
 */

const Trail = require("../models/Trail");

// User-agents used by social media link-preview crawlers
const BOT_PATTERNS = [
  "facebookexternalhit",
  "facebookcatalog",
  "Facebot",
  "Twitterbot",
  "LinkedInBot",
  "WhatsApp",
  "TelegramBot",
  "Slackbot",
  "Discordbot",
  "Pinterest",
  "bingbot",
  "Googlebot",
  "Applebot",
  "redditbot",
  "Snapchat",
  "vkShare",
  "W3C_Validator",
  "ia_archiver",
];

function isBot(userAgent = "") {
  const ua = userAgent.toLowerCase();
  return BOT_PATTERNS.some((b) => ua.includes(b.toLowerCase()));
}

function buildOGHtml({ title, description, imageUrl, pageUrl }) {
  // Escape for safe HTML attribute insertion
  const esc = (s) =>
    String(s)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${esc(title)}</title>

  <!-- Open Graph / Facebook -->
  <meta property="og:type"        content="website" />
  <meta property="og:site_name"   content="Payana Trails" />
  <meta property="og:title"       content="${esc(title)}" />
  <meta property="og:description" content="${esc(description)}" />
  <meta property="og:image"       content="${esc(imageUrl)}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:url"         content="${esc(pageUrl)}" />

  <!-- Twitter Card -->
  <meta name="twitter:card"        content="summary_large_image" />
  <meta name="twitter:title"       content="${esc(title)}" />
  <meta name="twitter:description" content="${esc(description)}" />
  <meta name="twitter:image"       content="${esc(imageUrl)}" />

  <!-- Redirect real users immediately to the SPA -->
  <meta http-equiv="refresh" content="0; url=${esc(pageUrl)}" />
</head>
<body>
  <p>Redirecting to <a href="${esc(pageUrl)}">${esc(title)}</a>…</p>
  <script>window.location.replace("${pageUrl.replace(/"/g, '\\"')}");</script>
</body>
</html>`;
}

module.exports = async function ogMiddleware(req, res, next) {
  // Only intercept GET requests from social-media bots
  if (req.method !== "GET" || !isBot(req.headers["user-agent"])) {
    return next();
  }

  const SITE_URL =
    process.env.SITE_URL || "http://localhost:5173";
  const IMAGE_BASE =
    process.env.IMAGE_BASE_URL || `http://localhost:${process.env.PORT || 8000}`;

  const urlPath = req.path; // e.g. "/", "/trails/jordan-petra"

  // ── Homepage ──────────────────────────────────────────────────────────────
  if (urlPath === "/" || urlPath === "/home") {
    return res.send(
      buildOGHtml({
        title: "Payana Trails | Thoughtfully Designed Journeys",
        description:
          "Small groups. Deeper experiences. Discover our curated trails around the world.",
        imageUrl: `${IMAGE_BASE}/heroBg-desktop.webp`,
        pageUrl: SITE_URL,
      })
    );
  }

  // ── Trail detail page: /trails/:slug ──────────────────────────────────────
  const trailMatch = urlPath.match(/^\/trails\/([^/]+)\/?$/);
  if (trailMatch) {
    const slug = trailMatch[1];
    try {
      let trail = await Trail.findOne({
        slug,
        isActive: true,
        status: "published",
      })
        .select("trailName overview heroImage slug")
        .lean();

      // Fallback: match by slugifying trailName (legacy records without slug)
      if (!trail) {
        const all = await Trail.find({ isActive: true, status: "published" })
          .select("trailName overview heroImage slug")
          .lean();
        trail = all.find((t) => {
          const s = (t.trailName || "")
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
          return s === slug;
        });
      }

      if (trail) {
        const heroImageUrl = trail.heroImage
          ? `${IMAGE_BASE}${trail.heroImage}`
          : `${IMAGE_BASE}/heroBg-desktop.webp`;

        const description = (
          trail.overview || "Discover this amazing trail with Payana Trails."
        )
          .replace(/\s+/g, " ")
          .trim()
          .slice(0, 160);

        return res.send(
          buildOGHtml({
            title: `${trail.trailName} | Payana Trails`,
            description,
            imageUrl: heroImageUrl,
            pageUrl: `${SITE_URL}/trails/${trail.slug || slug}`,
          })
        );
      }
    } catch (err) {
      console.error("[OG Middleware] Error fetching trail:", err.message);
    }
  }

  // Not a route we handle — pass through
  next();
};
