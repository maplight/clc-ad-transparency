import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => {
  strapi.customFields.register({
    name: "ad-disclosure-table",
    plugin: "clc-ad",
    type: "text",
    inputSize: {
      default: 4,
      isResizable: true,
    },
  });
};
