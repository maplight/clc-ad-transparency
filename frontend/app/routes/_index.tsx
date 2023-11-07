import { renderToString } from "react-dom/server";
import { type LoaderFunction, type MetaFunction, json } from "@vercel/remix";
import { getServerState } from "react-instantsearch";
import { useLoaderData } from "@remix-run/react";
import Search, { type SearchProps } from "~/components/Search";

import "instantsearch.css/themes/satellite.css";

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
  return <Search serverState={serverState} serverUrl={serverUrl} />;
}
