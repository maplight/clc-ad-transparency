import { Strapi } from '@strapi/strapi';

const RBAC_ACTIONS = [
  {
    section: 'plugins',
    displayName: 'User can update instruction content',
    uid: 'update',
    pluginName: 'clc-ad',
  },
];

export default ({ strapi }: { strapi: Strapi }) => {
  // bootstrap phase
  strapi.admin?.services.permission.actionProvider.registerMany(RBAC_ACTIONS);

  const pluginStore = strapi.store && strapi.store({
    environment: '',
    type: 'plugin',
    name: 'instructions',
  });

};
