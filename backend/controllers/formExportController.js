const { buildCsvExport } = require("../utils/csvExport");
const { formatDateTime } = require("../utils/exportFormatters");
const {
  getAllFormExportDefinitions,
  getFormExportDefinition,
} = require("../utils/formExportRegistry");
const { buildPdfExport } = require("../utils/pdfExport");

const buildFileDateStamp = (date = new Date()) =>
  new Intl.DateTimeFormat("sv-SE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(date)
    .replaceAll("-", "");

const listFormExports = async (req, res) => {
  try {
    const items = await Promise.all(
      getAllFormExportDefinitions().map(async (definition) => ({
        formType: definition.key,
        label: definition.label,
        totalSubmissions: await definition.model.countDocuments(),
      })),
    );

    res.json({
      success: true,
      data: items,
    });
  } catch (error) {
    console.error("Form export listing error:", error);
    res.status(500).json({
      success: false,
      message: "Unable to load form exports right now.",
    });
  }
};

const downloadFormExport = async (req, res) => {
  const { formType } = req.params;
  const { format } = req.query;

  const definition = getFormExportDefinition(formType);

  if (!definition) {
    return res.status(404).json({
      success: false,
      message: "Unknown form type requested.",
    });
  }

  if (!["csv", "pdf"].includes(format)) {
    return res.status(400).json({
      success: false,
      message: "Export format must be either csv or pdf.",
    });
  }

  try {
    const records = await definition.model.find().sort({ createdAt: -1 }).lean();
    const generatedAt = new Date();
    const fileName = `${definition.filenamePrefix}-${buildFileDateStamp(
      generatedAt,
    )}.${format}`;

    res.setHeader("Cache-Control", "no-store");
    res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);

    if (format === "csv") {
      const csv = buildCsvExport({
        columns: definition.columns,
        records,
      });

      res.setHeader("Content-Type", "text/csv; charset=utf-8");
      return res.status(200).send(csv);
    }

    const pdfBuffer = buildPdfExport({
      title: `${definition.label} Form Export`,
      subtitle: "Payana Trails Admin Submission Report",
      columns: definition.columns,
      records,
      generatedAtLabel: formatDateTime(generatedAt),
    });

    res.setHeader("Content-Type", "application/pdf");
    return res.status(200).send(pdfBuffer);
  } catch (error) {
    console.error("Form export download error:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to generate the requested export right now.",
    });
  }
};

module.exports = {
  downloadFormExport,
  listFormExports,
};
