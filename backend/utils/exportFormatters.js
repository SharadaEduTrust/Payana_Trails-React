const EXPORT_TIMEZONE = process.env.EXPORT_TIMEZONE || "Asia/Kolkata";

const formatDateTime = (value) => {
  if (!value) return "";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("en-GB", {
    timeZone: EXPORT_TIMEZONE,
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
    .format(date)
    .replace(",", "");
};

const formatPhone = (countryCode, phone) => {
  if (!phone) return "";
  return [countryCode, phone].filter(Boolean).join(" ").trim();
};

const valueOrEmpty = (value) => {
  if (value === null || value === undefined) return "";
  return String(value).trim();
};

module.exports = {
  formatDateTime,
  formatPhone,
  valueOrEmpty,
};
