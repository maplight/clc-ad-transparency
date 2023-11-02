import { SearchBox } from "react-instantsearch";
import { Bars3Icon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        onClick={() => {
          // TODO: Implement sidebar
        }}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Separator */}
      <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

      <SearchBox
        classNames={{
          form: "flex flex-1 h-full w-full",
          input:
            "block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 ring-1 focus:ring-2 ring-primary-600 sm:text-sm ml-2",
          root: "flex flex-1 h-full w-full py-3",
        }}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
