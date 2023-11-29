import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  async getInstructions(ctx) {
    ctx.body = await strapi
      .plugin('clc-ad')
      .service('instructionsService')
      .getInstructionsPage(ctx.query);
  },
  async getSettings(ctx) {
    ctx.body = await strapi
      .plugin('clc-ad')
      .service('instructionsService')
      .getSettings();
  },
  async setSettings(ctx) {
    const { body } = ctx.request;
    ctx.body = await strapi
      .plugin('clc-ad')
      .service('instructionsService')
      .setSettings(body);
  }
});
