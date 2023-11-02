import algoliaClient from "./utils/algolia-client";
import clearData from "./utils/clear-data";
import generateAdDisclosureData from "./utils/generate-ad-disclosure-data";
import generateFilingPeriodData from "./utils/generate-filing-period-data";
import type { Attribute } from "@strapi/strapi";

type AdDisclosure = Attribute.GetValues<"api::ad-disclosure.ad-disclosure">;

const AD_DISCLOSURE_MODEL_UID = "api::ad-disclosure.ad-disclosure";
const REPORT_MODEL_UID = "api::report.report";

const adDisclosuresIndex = algoliaClient.initIndex(
  `ad_disclosures_${process.env.NODE_ENV}`
);

adDisclosuresIndex.setSettings({
  attributesForFaceting: [
    "adElection",
    "adFormat",
    "afterDistinct(searchable(createdBy))",
    "candidates.lvl0",
    "candidates.lvl1",
    "measures.lvl0",
    "measures.lvl1",
    "politicalParties.lvl0",
    "politicalParties.lvl1",
  ],
  searchableAttributes: ["adTextContent"],
});

const getValuesByComponent = (
  candidatesMeasuresAndPoliticalParties: AdDisclosure["candidatesMeasuresAndPoliticalParties"],
  component: AdDisclosure["candidatesMeasuresAndPoliticalParties"][number]["__component"]
) =>
  candidatesMeasuresAndPoliticalParties.filter(
    ({ __component }) => __component === component
  );

const lvl0FacetValues = ({
  name,
}: AdDisclosure["candidatesMeasuresAndPoliticalParties"][number]) => name;

const lvl1FacetValues = ({
  name,
  stance,
}: AdDisclosure["candidatesMeasuresAndPoliticalParties"][number]) =>
  `${name} > ${stance}`;

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
  async bootstrap({ strapi }) {
    const shouldSeedDatabase =
      process.env.STRAPI_SEED_DB_ON_BOOTSTRAP === "true";

    if (shouldSeedDatabase) {
      // Clear data before seeding
      await clearData(strapi);

      // Generate filing period data
      await generateFilingPeriodData(strapi);

      // Generate ad disclosure data
      await generateAdDisclosureData(strapi);

      // Clear Algolia index
      await adDisclosuresIndex.clearObjects();
    }

    strapi.db.lifecycles.subscribe({
      models: [REPORT_MODEL_UID],

      async afterCreate(event) {
        const { adDisclosures: reportAdDisclosures } = event.result;
        const reportAdDisclosureIds = JSON.parse(reportAdDisclosures).map(
          ({ id }) => id
        );

        const adDisclosures = await strapi.entityService.findMany(
          AD_DISCLOSURE_MODEL_UID,
          {
            filters: {
              id: reportAdDisclosureIds,
            },
            populate: [
              "candidatesMeasuresAndPoliticalParties",
              "createdBy",
            ],
          }
        );

        const adDisclosureObjects = adDisclosures.map(
          ({ id, ...adDisclosure }) => {
            const { candidatesMeasuresAndPoliticalParties } = adDisclosure;

            const candidates = getValuesByComponent(
              candidatesMeasuresAndPoliticalParties,
              "ad-disclosure.candidate"
            );

            const measures = getValuesByComponent(
              candidatesMeasuresAndPoliticalParties,
              "ad-disclosure.measure"
            );

            const politicalParties = getValuesByComponent(
              candidatesMeasuresAndPoliticalParties,
              "ad-disclosure.political-party"
            );

            return {
              objectID: id,
              ...adDisclosure,
              "candidates.lvl0": candidates.map(lvl0FacetValues),
              "candidates.lvl1": candidates.map(lvl1FacetValues),
              "measures.lvl0": measures.map(lvl0FacetValues),
              "measures.lvl1": measures.map(lvl1FacetValues),
              "politicalParties.lvl0": politicalParties.map(lvl0FacetValues),
              "politicalParties.lvl1": politicalParties.map(lvl1FacetValues),
              createdBy: `${adDisclosure.createdBy.firstname} ${adDisclosure.createdBy.lastname}`,
            };
          }
        );

        try {
          await adDisclosuresIndex.saveObjects(adDisclosureObjects);
        } catch (error) {
          console.error("Error saving ad disclosures to Algolia", error);
        }
      },
    });
  },
};
