const PAGE_HEIGHT = 842;
const PAGE_WIDTH = 595;
const PAGE_MARGIN = 48;

const sanitizePdfText = (value) =>
  String(value ?? "")
    .normalize("NFKD")
    .replace(/[^\x20-\x7E]/g, "?")
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");

const wrapText = (text, maxChars) => {
  const normalized = String(text ?? "").replace(/\s+/g, " ").trim();
  if (!normalized) return [""];

  const words = normalized.split(" ");
  const lines = [];
  let currentLine = "";

  for (const word of words) {
    if (word.length > maxChars) {
      if (currentLine) {
        lines.push(currentLine);
        currentLine = "";
      }

      for (let index = 0; index < word.length; index += maxChars) {
        lines.push(word.slice(index, index + maxChars));
      }
      continue;
    }

    const candidate = currentLine ? `${currentLine} ${word}` : word;
    if (candidate.length <= maxChars) {
      currentLine = candidate;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines.length ? lines : [""];
};

const createPdfDocument = (pages) => {
  const objects = [];
  const addObject = (body) => {
    objects.push(body);
    return objects.length;
  };

  const catalogId = addObject("<< /Type /Catalog /Pages 2 0 R >>");
  const pagesId = addObject("__PAGES__");
  const fontId = addObject(
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  );

  const pageIds = [];

  pages.forEach((page) => {
    const contentStream = page
      .map(
        ({ x, y, fontSize, text }) =>
          `BT /F1 ${fontSize} Tf 1 0 0 1 ${x} ${y} Tm (${sanitizePdfText(
            text,
          )}) Tj ET`,
      )
      .join("\n");

    const contentId = addObject(
      `<< /Length ${Buffer.byteLength(
        contentStream,
        "ascii",
      )} >>\nstream\n${contentStream}\nendstream`,
    );
    const pageId = addObject(
      `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${PAGE_WIDTH} ${PAGE_HEIGHT}] /Resources << /Font << /F1 ${fontId} 0 R >> >> /Contents ${contentId} 0 R >>`,
    );
    pageIds.push(pageId);
  });

  objects[pagesId - 1] = `<< /Type /Pages /Count ${pageIds.length} /Kids [${pageIds
    .map((id) => `${id} 0 R`)
    .join(" ")}] >>`;

  let pdf = "%PDF-1.4\n";
  const offsets = [0];

  objects.forEach((body, index) => {
    offsets.push(Buffer.byteLength(pdf, "ascii"));
    pdf += `${index + 1} 0 obj\n${body}\nendobj\n`;
  });

  const xrefStart = Buffer.byteLength(pdf, "ascii");
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

  return Buffer.from(pdf, "ascii");
};

const buildPdfExport = ({
  title,
  subtitle,
  columns,
  records,
  generatedAtLabel,
}) => {
  const pages = [[]];
  let currentPage = pages[0];
  let y = PAGE_HEIGHT - PAGE_MARGIN;

  const ensureSpace = (requiredHeight) => {
    if (y - requiredHeight >= PAGE_MARGIN) return;
    currentPage = [];
    pages.push(currentPage);
    y = PAGE_HEIGHT - PAGE_MARGIN;
  };

  const addLine = (text, fontSize = 11, spacing = 4) => {
    const maxChars = fontSize >= 16 ? 56 : fontSize >= 12 ? 72 : 92;
    const lines = wrapText(text, maxChars);
    const lineHeight = Math.round(fontSize * 1.45);
    ensureSpace(lines.length * lineHeight + spacing);

    lines.forEach((line) => {
      currentPage.push({
        text: line,
        fontSize,
        x: PAGE_MARGIN,
        y,
      });
      y -= lineHeight;
    });

    y -= spacing;
  };

  addLine(title, 18, 6);
  addLine(subtitle, 11, 2);
  addLine(`Generated: ${generatedAtLabel}`, 11, 2);
  addLine(`Total submissions: ${records.length}`, 11, 10);

  if (!records.length) {
    addLine("No submissions are available for this form yet.", 12, 0);
    return createPdfDocument(pages);
  }

  records.forEach((record, index) => {
    addLine(`Submission ${index + 1}`, 13, 3);

    columns.forEach((column) => {
      const value = column.value(record) || "Not provided";
      addLine(`${column.label}: ${value}`, 10, 1);
    });

    addLine(" ", 10, 6);
  });

  return createPdfDocument(pages);
};

module.exports = {
  buildPdfExport,
};
