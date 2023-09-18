import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => {
  strapi.customFields.register({
    name: "ad-disclosure-table",
    plugin: "ad-disclosure-report",
    type: "json",
    inputSize: {
      default: 4,
      isResizable: true,
    },
  });
};
