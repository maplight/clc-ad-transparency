export {};

declare global {
  interface Window {
    ENV: {
      ALGOLIA_APPLICATION_ID: string;
      ALGOLIA_SEARCH_API_KEY: string;
      STRAPI_BASE_URL: string;
    };
  }
}
