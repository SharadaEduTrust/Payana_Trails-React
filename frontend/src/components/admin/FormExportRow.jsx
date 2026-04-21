import React from "react";

const ExportButton = ({ label, loadingLabel, isLoading, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={isLoading}
    className="inline-flex min-w-[140px] items-center justify-center rounded-lg border border-[#4A3B2A] px-4 py-2 text-sm font-medium text-[#4A3B2A] transition-colors hover:bg-[#4A3B2A] hover:text-[#F3EFE9] disabled:cursor-not-allowed disabled:border-[#4A3B2A]/20 disabled:bg-white disabled:text-[#4A3B2A]/50"
  >
    {isLoading ? loadingLabel : label}
  </button>
);

const FormExportRow = ({
  formLabel,
  totalSubmissions,
  isCsvDownloading,
  isPdfDownloading,
  onDownloadCsv,
  onDownloadPdf,
}) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[#4A3B2A]/10 bg-[#FCFAF7] p-5 md:flex-row md:items-center md:justify-between">
      <div>
        <h3 className="text-lg font-semibold text-[#4A3B2A]">{formLabel}</h3>
        <p className="text-sm text-gray-600">
          {totalSubmissions} submission{totalSubmissions === 1 ? "" : "s"} available
          for export.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <ExportButton
          label="Download CSV"
          loadingLabel="Preparing CSV..."
          isLoading={isCsvDownloading}
          onClick={onDownloadCsv}
        />
        <ExportButton
          label="Download PDF"
          loadingLabel="Preparing PDF..."
          isLoading={isPdfDownloading}
          onClick={onDownloadPdf}
        />
      </div>
    </div>
  );
};

export default FormExportRow;
