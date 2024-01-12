import { prefixPluginTranslations } from "@strapi/helper-plugin";
import AdDisclosureTableIcon from "./components/AdDisclosureTable/AdDisclosureTableIcon";
import getTrad from "./utils/getTrad";
import pluginId from "./pluginId";
import PluginIcon from './components/PluginIcon';
import ListViewInstructions from './components/Injected/list-view-instructions';
import EditViewButton from './components/Injected/edit-view-button';

export default {
  register(app: any) {
    app.customFields.register({
      name: "ad-disclosure-table",
      pluginId: "clc-ad",
      type: "text",
      icon: AdDisclosureTableIcon,
      intlLabel: {
        id: getTrad("ad-disclosure-table.label"),
        defaultMessage: "Ad Disclosure Table",
      },
      intlDescription: {
        id: getTrad("ad-disclosure-table.description"),
        defaultMessage:
          "Display a table of ad disclosures for a filing period.",
      },
      components: {
        Input: async () =>
          import(
            /* webpackChunkName: 'ad-disclosure-table-component' */ "./components/AdDisclosureTable"
          ),
      },
    });
    app.addMenuLink({
      to: `/plugins/${pluginId}`,
      icon: PluginIcon,
      intlLabel: {
        id: `${pluginId}.plugin.name`,
        defaultMessage: 'Instructions',
      },
      Component: async () => {
        const component = await import(/* webpackChunkName: "[request]" */ './pages/App');

        return component;
      },
    });
    app.createSettingSection(
      {
        id: pluginId,
        intlLabel: {
          id: `${pluginId}.plugin.name`,
          defaultMessage: 'Instructions',
        },
      },
      [
        {
          intlLabel: {
            id: `${pluginId}.plugin.name`,
            defaultMessage: 'Instruction Content',
          },
          id: 'settings',
          to: `/settings/${pluginId}`,
          Component: async () => {
            return import('./pages/Settings');
          },
          permissions: [
            {
              action: "plugin::clc-ad.update",
              subject: null
            }
          ]
        },
      ]
    );
  },

  bootstrap(app: any) {
    app.injectContentManagerComponent('listView', 'actions', {
      name: 'list-view-instructions',
      Component: ListViewInstructions,
    });
    app.injectContentManagerComponent('editView', 'informations', {
      name: 'edit-view-button',
      Component: EditViewButton,
    });
  },

  async registerTrads(app: any) {
    const { locales } = app;

    const importedTrads = await Promise.all(
      (locales as any[]).map((locale) => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
