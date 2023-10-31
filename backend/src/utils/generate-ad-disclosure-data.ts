import { faker } from "@faker-js/faker";
import type { Strapi } from "@strapi/strapi";
import uploadAdDisclosureMedia from "./upload-ad-disclosure-media";
import generateRandomAdDisclosure from "./generate-random-ad-disclosure";

const AD_DISCLOSURE_SEED_COUNT = 50;

const generateAdDisclosureData = async (strapi: Strapi) => {
  console.log("Generating Ad Disclosure data...");

  // Add random seed for faker to ensure consistent results
  faker.seed(123);

  // Query for all Filer users
  const users = await strapi.entityService.findMany("admin::user", {
    filters: {
      roles: {
        code: {
          $eq: "strapi-author",
        },
      },
    },
    populate: ["roles"],
  });

  if (!users.length) {
    console.log(
      "No Filer users found. Skipping Ad Disclosure data generation."
    );
    return;
  }

  // For each Filer user, create random Ad Disclosures
  for (const user of users) {
    const uploadedAdDisclosureMediaFiles = await uploadAdDisclosureMedia(
      strapi,
      user,
      users
    );

    const bulkAdDisclosurePromises = [];
    const randomAdDisclosuresData = new Array(AD_DISCLOSURE_SEED_COUNT)
      .fill(null)
      .map(() => generateRandomAdDisclosure(user.id));

    for (const randomAdDisclosureData of randomAdDisclosuresData) {
      const randomAdDisclosurePromise = strapi.entityService.create(
        "api::ad-disclosure.ad-disclosure",
        {
          data: {
            ...randomAdDisclosureData,
            adMedia: faker.helpers.arrayElement(uploadedAdDisclosureMediaFiles)
              .id,
          },
        }
      );
      bulkAdDisclosurePromises.push(randomAdDisclosurePromise);
    }

    await Promise.all(bulkAdDisclosurePromises);
  }
};

export default generateAdDisclosureData;
