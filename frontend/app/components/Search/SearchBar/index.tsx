import DownloadCsv from "./download-csv";
import { SearchBox, SortBy } from "react-instantsearch";
import { Bars3Icon } from "@heroicons/react/24/outline";
import ViewToggle from "./view-toggle";
import type { ReactElement } from "react";

type Props = {
  setMobileSidebarOpen: Dispatch<SetStateAction<boolean>>;
  setView: Dispatch<SetStateAction<"list" | "table">>;
  view: "list" | "table";
};

const sortOptions = [
  {
    label: "Ad Spend (asc)",
    value: `ad_disclosures_${process.env.NODE_ENV}_adSpend_asc`,
  },
  {
    label: "Ad Spend (desc)",
    value: `ad_disclosures_${process.env.NODE_ENV}_adSpend_desc`,
  },
  {
    label: "Start Date (asc)",
    value: `ad_disclosures_${process.env.NODE_ENV}_startDateTimestamp_asc`,
  },
  {
    label: "Start Date (desc)",
    value: `ad_disclosures_${process.env.NODE_ENV}_startDateTimestamp_desc`,
  },
  {
    label: "End Date (asc)",
    value: `ad_disclosures_${process.env.NODE_ENV}_endDateTimestamp_asc`,
  },
  {
    label: "End Date (desc)",
    value: `ad_disclosures_${process.env.NODE_ENV}_endDateTimestamp_desc`,
  },
  // Textual attributes
  {
    label: "Filer Name (asc)",
    value: `ad_disclosures_${process.env.NODE_ENV}_filerName_asc`,
  },
  {
    label: "Filer Name (desc)",
    value: `ad_disclosures_${process.env.NODE_ENV}_filerName_desc`,
  },
  {
    label: "Election (asc)",
    value: `ad_disclosures_${process.env.NODE_ENV}_adElection_asc`,
  },
  {
    label: "Election (desc)",
    value: `ad_disclosures_${process.env.NODE_ENV}_adElection_desc`,
  },
  {
    label: "Ad Format (asc)",
    value: `ad_disclosures_${process.env.NODE_ENV}_adFormat_asc`,
  },
  {
    label: "Ad Format (desc)",
    value: `ad_disclosures_${process.env.NODE_ENV}_adFormat_desc`,
  },
];

const SearchBar = ({
  setMobileSidebarOpen,
  setView,
  view,
}: Props): ReactElement => {
  return (
    <div className="z-40 flex h-20 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 pt-4">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        onClick={() => setMobileSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Separator */}
      <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

      <SearchBox
        classNames={{
          form: "flex flex-1 h-full w-full",
          root: "flex flex-1 h-full w-full py-3",
        }}
        placeholder="Search..."
      />

      <SortBy
        classNames={{
          select:
            "block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary-600 sm:text-sm sm:leading-6",
        }}
        items={sortOptions}
      />

      <DownloadCsv />
      <ViewToggle setView={setView} view={view} />
    </div>
  );
};

export default SearchBar;
