import { Strapi } from '@strapi/strapi';
import { instructionsConfig } from './instructionsConfig';

function getPluginStore() {
  return strapi.store({
    environment: '',
    type: 'plugin',
    name: 'clc-ad',
  });
}

async function createDefaultConfig() {
  const pluginStore = getPluginStore();
  const value = {
    instructionsPage: "Go to settings to set up instructions",
    contentInstructions: {
      'filing-period': 'filing-period',
      'ad-disclosure': 'ad-disclosure',
      'report': 'report',
    },
  } as instructionsConfig;
  await pluginStore.set({ key: 'settings', value });
  return pluginStore.get({ key: 'settings' });
}

async function getAllSettings(): Promise<instructionsConfig> {
  const pluginStore = getPluginStore();
  let config = await pluginStore.get({ key: 'settings' });
  if (!config || (!config["instructionsPage"] && !config["contentInstructions"])) {
    config = await createDefaultConfig();
  }
  return config as instructionsConfig;
}


export default ({ strapi }: { strapi: Strapi }) => ({
  async getInstructionsPage(query) {
    const config = await getAllSettings();
    if (query["component"]) {
      return config["contentInstructions"][query["component"]];
    }
    return config["instructionsPage"];
  },

  async getSettings() {
    const settings = await getAllSettings();
    return settings;
  },
  async setSettings(settings) {
    const value = settings;
    const pluginStore = getPluginStore();
    await pluginStore.set({ key: 'settings', value });
    return pluginStore.get({ key: 'settings' });
  },

});


