import algoliasearch from 'algoliasearch';

const algoliaClient = algoliasearch(
  process.env.ALGOLIA_APPLICATION_ID,
  process.env.ALGOLIA_ADMIN_API_KEY
);

export default algoliaClient;
