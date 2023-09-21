import algoliaClient from './utils/algolia-client';

const AD_DISCLOSURE_MODEL_UID = 'api::ad-disclosure.ad-disclosure';
const REPORT_MODEL_UID = 'api::report.report';

const adDisclosuresIndex = algoliaClient.initIndex(`ad_disclosures_${process.env.NODE_ENV}`);

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    strapi.db.lifecycles.subscribe({
      models: [REPORT_MODEL_UID],

      async afterCreate(event) {
        const { adDisclosures: reportAdDisclosures } = event.result;
        const reportAdDisclosureIds = JSON.parse(reportAdDisclosures).map(({ id }) => id);

        const adDisclosures = await strapi.entityService.findMany(AD_DISCLOSURE_MODEL_UID, {
          filters: {
            id: reportAdDisclosureIds,
          }
        });

        const adDisclosureObjects = adDisclosures.map(({ id, ...adDisclosure }) => ({
          objectID: id,
          ...adDisclosure,
        }));

        try {
          await adDisclosuresIndex.saveObjects(adDisclosureObjects);
        } catch (error) {
          console.error('Error saving ad disclosures to Algolia', error);
        }
      },
    });
  },
}
