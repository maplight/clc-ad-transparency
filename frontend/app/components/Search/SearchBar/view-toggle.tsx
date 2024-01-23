import { ListBulletIcon, TableCellsIcon } from "@heroicons/react/24/outline";
import type { ReactElement } from "react";

type Props = {
  setView: (view: "list" | "table") => void;
  view: "list" | "table";
};

const activeClasses =
  "bg-primary-600 text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600";

const nonActiveClasses =
  "bg-white text-gray-500 shadow-sm hover:bg-primary-500 hover:text-white";

const ViewToggle = ({ setView, view }: Props): ReactElement => {
  return (
    <div className="flex flex-row justify-around gap-2">
      <button
        type="button"
        className={`rounded-full p-1.5 shadow-sm ${
          view === "table" ? " " + activeClasses : nonActiveClasses
        }`}
      >
        <TableCellsIcon
          onClick={() => setView("table")}
          className="h-5 w-5"
          aria-hidden="true"
        />
      </button>
      <button
        type="button"
        className={`rounded-full p-1.5 shadow-sm ${
          view === "list" ? " " + activeClasses : nonActiveClasses
        }`}
      >
        <ListBulletIcon
          onClick={() => setView("list")}
          className="h-5 w-5"
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

export default ViewToggle;
