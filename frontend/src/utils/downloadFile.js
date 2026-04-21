export const triggerFileDownload = (blob, fileName) => {
  const downloadUrl = window.URL.createObjectURL(blob);
  const link = window.document.createElement("a");

  link.href = downloadUrl;
  link.download = fileName;
  window.document.body.appendChild(link);
  link.click();
  link.remove();

  window.URL.revokeObjectURL(downloadUrl);
};
