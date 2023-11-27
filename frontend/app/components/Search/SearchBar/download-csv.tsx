import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { useHits } from "react-instantsearch";
import extractAdDisclosure from "./extract-ad-disclosure";
import jsonToCsv from "utils/json-to-csv";
import downloadCsv from "utils/download-csv";

const DownloadCsv = () => {
  const { hits } = useHits();

  const handleClick = () => {
    const csv = jsonToCsv(hits.map((hit) => extractAdDisclosure(hit)));

    downloadCsv(csv, "ad-disclosures.csv");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-x-1.5 rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
    >
      <ArrowDownTrayIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      Download CSV
    </button>
  );
};

export default DownloadCsv;
