import React, { useEffect, useState } from "react";
import FormExportRow from "../../../components/admin/FormExportRow";
import { api } from "../../../services/api";
import { triggerFileDownload } from "../../../utils/downloadFile";

const FormExportsManager = () => {
  const [forms, setForms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeDownload, setActiveDownload] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadFormExports = async () => {
      setIsLoading(true);
      setError("");

      try {
        const response = await api.getAdminFormExports();
        if (!isMounted) return;
        setForms(response.data || []);
      } catch (err) {
        if (!isMounted) return;
        setError(err.message || "Unable to load form export options.");
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadFormExports();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleDownload = async (formType, format) => {
    const downloadKey = `${formType}:${format}`;
    setActiveDownload(downloadKey);
    setError("");

    try {
      const { blob, fileName } = await api.downloadAdminFormExport(formType, format);
      triggerFileDownload(blob, fileName);
    } catch (err) {
      setError(err.message || "Unable to download this export right now.");
    } finally {
      setActiveDownload("");
    }
  };

  return (
    <div className="rounded-3xl border border-[#4A3B2A]/10 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-[#4A3B2A]">Form Exports</h2>
        <p className="mt-2 max-w-2xl text-sm text-gray-600">
          Download all submissions for each website form as CSV or PDF from one
          place.
        </p>
      </div>

      {error ? (
        <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      ) : null}

      {isLoading ? (
        <div className="rounded-2xl border border-dashed border-[#4A3B2A]/15 bg-[#FCFAF7] px-4 py-10 text-center text-sm text-gray-500">
          Loading available form exports...
        </div>
      ) : (
        <div className="space-y-4">
          {forms.map((form) => (
            <FormExportRow
              key={form.formType}
              formLabel={form.label}
              totalSubmissions={form.totalSubmissions || 0}
              isCsvDownloading={activeDownload === `${form.formType}:csv`}
              isPdfDownloading={activeDownload === `${form.formType}:pdf`}
              onDownloadCsv={() => handleDownload(form.formType, "csv")}
              onDownloadPdf={() => handleDownload(form.formType, "pdf")}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FormExportsManager;
