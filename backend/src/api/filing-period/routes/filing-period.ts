/**
 * filing-period router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::filing-period.filing-period', {
  config: {
    findOne: {
      auth: false,
    },
  },
});
