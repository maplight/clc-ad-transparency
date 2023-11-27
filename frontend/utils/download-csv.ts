import createDownloadLink from "./create-download-link";

const downloadCsv = (data: string, filename: string) => {
  const blob = new Blob([data], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  createDownloadLink(url, filename);
};

export default downloadCsv;
