import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { useInstantSearch } from "react-instantsearch";
import extractAdDisclosure from "./extract-ad-disclosure";
import jsonToCsv from "utils/json-to-csv";
import downloadCsv from "utils/download-csv";
import { browseClient } from "~/search-client";
import type { Hit, SearchResults } from "instantsearch.js";

const DownloadCsv = () => {
  const { results } = useInstantSearch() as {
    results: SearchResults<Hit>;
  };

  const handleClick = () => {
    const index = browseClient.initIndex(results.index);

    const params = decodeURIComponent(results.params)
      .split("&")
      .reduce((acc: { [key: string]: string }, cur) => {
        const keysToInclude = ["facetFilters", "facets"];

        const [key, value] = cur.split("=");
        if (!keysToInclude.includes(key)) {
          return acc;
        }
        acc[key] = JSON.parse(value);
        return acc;
      }, {});

    let hits: Hit[] = [];

    index
      .browseObjects({
        query: results?.query as string,
        batch: (batch) => {
          hits = hits.concat(batch);
        },
        ...params,
      })
      .then(() => {
        const adDisclosures = hits.map((hit) => extractAdDisclosure(hit));
        const csv = jsonToCsv(adDisclosures);
        downloadCsv(csv, "ad-disclosures.csv");
      });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center justify-center gap-x-1.5 rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
    >
      <ArrowDownTrayIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      CSV
    </button>
  );
};

export default DownloadCsv;
