import { prefixPluginTranslations } from "@strapi/helper-plugin";
import AdDisclosureTableIcon from "./components/AdDisclosureTable/AdDisclosureTableIcon";
import getTrad from "./utils/getTrad";
import pluginId from "./pluginId";

export default {
  register(app: any) {
    app.customFields.register({
      name: "ad-disclosure-table",
      pluginId: "ad-disclosure-report",
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
