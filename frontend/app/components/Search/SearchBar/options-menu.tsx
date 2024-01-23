import { Popover } from "@headlessui/react";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import Card from "~/components/Card";
import DownloadCsv from "./download-csv";
import ViewToggle from "./view-toggle";
import type { Dispatch, ReactElement, SetStateAction } from "react";

type Props = {
  view: "list" | "table";
  setView: Dispatch<SetStateAction<"list" | "table">>;
};

const OptionsMenu = ({ view, setView }: Props): ReactElement => {
  return (
    <Popover className="relative">
      <Popover.Button>
        <Cog6ToothIcon className="h-6 w-6 text-gray-700" />
      </Popover.Button>

      <Popover.Panel className="absolute z-10 right-0">
        <Card title="Options">
          <div className="w-full min-w-[150px] flex flex-col gap-3">
            <DownloadCsv />
            <ViewToggle setView={setView} view={view} />
          </div>
        </Card>
      </Popover.Panel>
    </Popover>
  );
};

export default OptionsMenu;
