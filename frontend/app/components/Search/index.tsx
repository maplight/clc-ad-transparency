import type { InstantSearchServerState } from "react-instantsearch";
import {
  Hits,
  InstantSearch,
  InstantSearchSSRProvider,
} from "react-instantsearch";
import { history } from "instantsearch.js/cjs/lib/routers/index.js";
import searchClient from "~/search-client";
import type { ReactElement } from "react";
import SearchBar from "../SearchBar";
import FiltersSidebar from "../FiltersSidebar";

type Props = {
  serverState?: InstantSearchServerState;
  serverUrl?: string;
};

const Search = ({ serverState, serverUrl }: Props): ReactElement => {
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
        <div className="lg:pl-72">
          <SearchBar />
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              <Hits />
            </div>
          </main>
        </div>
      </InstantSearch>
    </InstantSearchSSRProvider>
  );
};

export default Search;
export type { Props as SearchProps };