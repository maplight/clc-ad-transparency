import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('ad-disclosure-report')
      .service('myService')
      .getWelcomeMessage();
  },
});
