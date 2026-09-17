const Footer = require("../models/Footer");
const fs = require("fs");

class FooterService {
  async getFooter() {
    let footer = await Footer.findOne();
    if (footer && footer.columns && footer.columns.length > 0) {
      let changed = false;
      footer.columns.forEach((col) => {
        if (col.heading && col.heading.toUpperCase() === "JOURNEYS") {
          const links = col.links || [];
          const hasSignature = links.some(
            (l) =>
              (l.label && l.label.toLowerCase().includes("signature")) ||
              l.url === "/journeys/signature"
          );
          if (hasSignature) {
            col.links = links.map((l) => {
              if (
                (l.label && l.label.toLowerCase().includes("signature")) ||
                l.url === "/journeys/signature"
              ) {
                return {
                  label: "Fixed Departure Trails",
                  url: "/journeys/fixed-departure",
                };
              }
              return l;
            });
            changed = true;
          }

          const desiredOrder = [
            "fixed departure",
            "heritage",
            "cultural",
            "wildlife",
          ];
          const sorted = [...col.links].sort((a, b) => {
            const aIdx = desiredOrder.findIndex((prefix) =>
              (a.label || "").toLowerCase().includes(prefix)
            );
            const bIdx = desiredOrder.findIndex((prefix) =>
              (b.label || "").toLowerCase().includes(prefix)
            );
            return (aIdx === -1 ? 99 : aIdx) - (bIdx === -1 ? 99 : bIdx);
          });

          const orderChanged = col.links.some(
            (link, idx) => link.label !== sorted[idx]?.label
          );
          if (orderChanged) {
            col.links = sorted;
            changed = true;
          }
        }
      });
      if (changed) {
        await footer.save();
      }
    }
    return footer;
  }

  async updateFooter(data) {
    let footer = await Footer.findOne();
    if (!footer) {
      footer = new Footer(data);
    } else {
      footer.set(data);
    }
    return await footer.save();
  }

  deleteOldImage(url) {
    if (!url) return;
    try {
      const { resolveUploadPath } = require("../middlewares/processImage");
      const fullPath = resolveUploadPath(url);
      if (fs.existsSync(fullPath)) {
        fs.unlinkSync(fullPath);
      }
    } catch (err) {
      console.error("Failed to delete old footer logo:", err);
    }
  }
}

module.exports = new FooterService();
