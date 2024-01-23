export {};

declare global {
  interface Window {
    ENV: {
      ALGOLIA_APPLICATION_ID: string;
      ALGOLIA_BROWSE_API_KEY: string;
      ALGOLIA_SEARCH_API_KEY: string;
    };
  }
}
