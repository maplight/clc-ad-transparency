import type { Shared, Strapi } from "@strapi/strapi";

type ContentTypeUid = keyof Shared.ContentTypes;

const clearData = async (strapi: Strapi) => {
  console.log("Clearing data...");

  const collectionTypeUids = [
    "api::ad-disclosure.ad-disclosure",
    "api::filing-period.filing-period",
    "api::report.report",
    "plugin::upload.file",
  ] as ContentTypeUid[];

  const bulkClears = [];

  for (const collectionTypeUid of collectionTypeUids) {
    const collectionClear = strapi.query(collectionTypeUid).deleteMany({
      where: {
        id: {
          $notNull: true,
        },
      },
    });

    bulkClears.push(collectionClear);
  }

  await Promise.all(bulkClears);
};

export default clearData;
