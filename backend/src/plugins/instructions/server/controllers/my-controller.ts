import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('instructions')
      .service('myService')
      .getWelcomeMessage();
  },
});
