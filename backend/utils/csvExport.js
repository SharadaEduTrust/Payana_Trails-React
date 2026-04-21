const escapeCsvValue = (value) => {
  const normalized = value === null || value === undefined ? "" : String(value);
  return `"${normalized.replace(/"/g, "\"\"")}"`;
};

const buildCsvExport = ({ columns, records }) => {
  const headerRow = columns.map((column) => escapeCsvValue(column.header)).join(",");
  const dataRows = records.map((record) =>
    columns
      .map((column) => escapeCsvValue(column.value(record)))
      .join(","),
  );

  return `\uFEFF${[headerRow, ...dataRows].join("\r\n")}`;
};

module.exports = {
  buildCsvExport,
};
