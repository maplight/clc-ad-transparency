import { ClearRefinements } from "react-instantsearch";
import SearchFilters from "./SearchFilters";
import { HeaderSpacer } from "~/components/Layout/Header";

const FiltersSidebar = () => {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-40 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-gray-100 px-6 pb-4">
        <div className="flex flex-1 flex-col">
          <HeaderSpacer />
          <div className="pt-4">
            <h2 className="text-xl text-center font-medium mb-3">
              Search Filters
            </h2>
            <SearchFilters />
            <ClearRefinements
              classNames={{
                root: "mt-4",
                button:
                  "bg-none hover:bg-none bg-primary-600 hover:bg-primary-500 text-white font-bold py-2 px-4 rounded",
                disabledButton:
                  "bg-none hover:bg-none bg-primary-600 hover:bg-primary-500 text-white font-bold py-2 px-4 rounded",
              }}
              translations={{
                resetButtonText: "Reset Filters",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersSidebar;
