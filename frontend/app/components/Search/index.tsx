import type { InstantSearchServerState } from "react-instantsearch";
import { InstantSearch, InstantSearchSSRProvider } from "react-instantsearch";
import { history } from "instantsearch.js/cjs/lib/routers/index.js";
import searchClient from "~/search-client";
import type { ReactElement } from "react";
import SearchBar from "./SearchBar";
import FiltersSidebar from "./FiltersSidebar";
import { HeaderSpacer } from "../Layout/Header";
import AdDisclosureList from "~/components/AdDisclosureList";
import AdDisclosureTable from "../AdDisclosureTable";
import { useState } from "react";

type Props = {
  serverState?: InstantSearchServerState;
  serverUrl?: string;
};

const Search = ({ serverState, serverUrl }: Props): ReactElement => {
  const [view, setView] = useState<"list" | "table">("table");
  return (
    <InstantSearchSSRProvider {...serverState}>
      <InstantSearch
        searchClient={searchClient}
        indexName={`ad_disclosures_${process.env.NODE_ENV}`}
        routing={{
          router: history({
            getLocation() {
              if (typeof window === "undefined") {
                return new URL(serverUrl!) as unknown as Location;
              }

              return window.location;
            },
          }),
        }}
      >
        <FiltersSidebar />
        <div className="lg:pl-72 h-full">
          <HeaderSpacer />
          <SearchBar setView={setView} view={view} />
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              {view === "table" ? <AdDisclosureTable /> : <AdDisclosureList />}
            </div>
          </main>
        </div>
      </InstantSearch>
    </InstantSearchSSRProvider>
  );
};

export default Search;
export type { Props as SearchProps };
