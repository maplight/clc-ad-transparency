/**
 * ad-disclosure router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::ad-disclosure.ad-disclosure', {
  config: {
    find: {
      auth: false,
    },
  },
});
