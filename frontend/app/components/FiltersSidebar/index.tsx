import { ClearRefinements } from "react-instantsearch";
import SearchFilters from "./SearchFilters";
import clcLogo from "~/images/clc-logo.png";

const FiltersSidebar = () => {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-primary-600 px-6 pb-4">
        <div className="flex h-24 shrink-0 items-center">
          <img className="h-16 w-auto" src={clcLogo} alt="CLC Logo" />
        </div>
        <div className="flex flex-1 flex-col">
          <h2 className="text-xl font-bold text-white mb-3">Search Filters</h2>
          <SearchFilters />
          <ClearRefinements
            classNames={{
              root: "mt-4",
              button:
                "bg-none hover:bg-none bg-primary-600 hover:bg-primary-500 text-white font-bold py-2 px-4 rounded",
              disabledButton:
                "bg-gray-400 text-white font-bold py-2 px-4 rounded",
            }}
            translations={{
              resetButtonText: "Reset Filters",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FiltersSidebar;
