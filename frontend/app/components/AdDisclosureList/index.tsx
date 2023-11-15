import { Hits } from "react-instantsearch";
import AdDisclosureCard from "../AdDisclosureCard";
import type { ReactElement } from "react";

const AdDisclosureList = (): ReactElement => {
  return (
    <Hits
      classNames={{
        item: "rounded shadow-medium",
        list: "flex flex-col gap-y-4 items-center",
      }}
      hitComponent={AdDisclosureCard}
    />
  );
};

export default AdDisclosureList;
