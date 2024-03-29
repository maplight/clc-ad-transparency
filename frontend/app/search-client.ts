import algoliasearch from "algoliasearch";
import getEnv from "utils/get-env";

const env = getEnv();

const searchClient = algoliasearch(
  env.ALGOLIA_APPLICATION_ID!,
  env.ALGOLIA_SEARCH_API_KEY!
);

const browseClient = algoliasearch(
  env.ALGOLIA_APPLICATION_ID!,
  env.ALGOLIA_BROWSE_API_KEY!
);

export default searchClient;
export { browseClient };
