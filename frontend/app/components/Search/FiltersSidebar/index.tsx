import SearchFilters from "./SearchFilters";
import { HeaderSpacer } from "~/components/Layout/Header";
import MobileSidebar from "./MobileSidebar";
import type { Dispatch, ReactElement, SetStateAction } from "react";

type Props = {
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const FiltersSidebar = ({
  mobileSidebarOpen,
  setMobileSidebarOpen,
}: Props): ReactElement => {
  return (
    <div>
      <MobileSidebar open={mobileSidebarOpen} setOpen={setMobileSidebarOpen} />
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-40 lg:flex lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto">
          <div className="flex flex-1 flex-col">
            <HeaderSpacer />
            <SearchFilters />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersSidebar;
