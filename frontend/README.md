# Remix

This directory is a brief example of a [Remix](https://remix.run/docs) site that can be deployed to Vercel with zero configuration.

## Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/vercel/tree/main/examples/remix&template=remix)

_Live Example: https://remix-run-template.vercel.app_

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
yarn install
```

Afterwards, start the Remix development server like so:

```sh
yarn run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

## Algolia

The following environment variables are required to [initialize the Algolia search client](https://www.algolia.com/doc/api-client/getting-started/initialize/javascript/?client=javascript):

- `ALGOLIA_APPLICATION_ID`
- `ALGOLIA_SEARCH_API_KEY`

The following environment variable is used to return [all results from Algolia without pagination](https://www.algolia.com/doc/api-reference/api-methods/browse/) when constructing the CSV export:

- `ALGOLIA_BROWSE_API_KEY`

**NOTE:** The frontend should use the Search-Only API Key from the Algolia dashboard.
