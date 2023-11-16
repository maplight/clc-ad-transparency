import { SearchBox } from "react-instantsearch";
import { Bars3Icon } from "@heroicons/react/24/outline";
import ViewToggle from "./view-toggle";
import type { ReactElement } from "react";

type Props = {
  setView: (view: "list" | "table") => void;
  view: "list" | "table";
};

const SearchBar = ({ setView, view }: Props): ReactElement => {
  return (
    <div className="z-40 flex h-20 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 pt-4">
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
          root: "flex flex-1 h-full w-full py-3",
        }}
        placeholder="Search..."
      />

      <ViewToggle setView={setView} view={view} />
    </div>
  );
};

export default SearchBar;
