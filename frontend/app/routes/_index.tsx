import { renderToString } from "react-dom/server";
import type { InstantSearchServerState } from "react-instantsearch";
import { type LoaderFunction, type MetaFunction, json } from "@vercel/remix";
import {
  InstantSearch,
  InstantSearchSSRProvider,
  Menu,
  RefinementList,
  SearchBox,
  getServerState,
  Hits,
} from "react-instantsearch";
import { useLoaderData } from "@remix-run/react";
import { history } from "instantsearch.js/cjs/lib/routers/index.js";
import searchClient from "~/search-client";
import MenuSelect from "~/components/MenuSelect";

import "instantsearch.css/themes/satellite.css";

type SearchProps = {
  serverState?: InstantSearchServerState;
  serverUrl?: string;
};

const Search = ({ serverState, serverUrl }: SearchProps) => {
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
        <SearchBox />
        <h2>Election</h2>
        <Menu
          attribute="adElection"
          sortBy={["count:desc", "name:asc", "isRefined:asc"]}
        />
        <h2>Format</h2>
        <MenuSelect
          attribute="adFormat"
          sortBy={["count:desc", "name:asc", "isRefined:asc"]}
        />
        <h2>Filer</h2>
        <RefinementList
          attribute="createdBy"
          searchable
          sortBy={["count:desc", "name:asc", "isRefined:asc"]}
        />
        <Hits />
      </InstantSearch>
    </InstantSearchSSRProvider>
  );
};

export const loader: LoaderFunction = async ({ request }) => {
  const serverUrl = request.url;
  const serverState = await getServerState(<Search serverUrl={serverUrl} />, {
    renderToString,
  });

  return json({
    serverState,
    serverUrl,
  });
};

export const meta: MetaFunction = () => {
  return [
    { title: "CLC Ad Transparency Database" },
    {
      name: "description",
      content: "Welcome to the CLC Ad Transparency Database!",
    },
  ];
};

export default function Index() {
  const { serverState, serverUrl } = useLoaderData() as SearchProps;
  return (
    <div>
      <Search serverState={serverState} serverUrl={serverUrl} />
    </div>
  );
}
