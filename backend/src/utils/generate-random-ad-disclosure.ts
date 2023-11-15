import { faker } from "@faker-js/faker";
import type { Attribute } from "@strapi/strapi";
import { candidateNames, measureNames, politicalPartyNames } from "./constants";

type AdDisclosure = Attribute.GetValues<"api::ad-disclosure.ad-disclosure">;
type User = Attribute.GetValues<"admin::user">;

const generateRandomCandidateMeasureOrPoliticalParty = () => {
  const components = [
    "ad-disclosure.candidate",
    "ad-disclosure.measure",
    "ad-disclosure.political-party",
  ];

  const names = {
    "ad-disclosure.candidate": candidateNames,
    "ad-disclosure.measure": measureNames,
    "ad-disclosure.political-party": politicalPartyNames,
  };

  const stances = ["Supports", "Opposes", "Neither"];

  const __component = faker.helpers.arrayElement(components);

  return {
    __component,
    name: faker.helpers.arrayElement(names[__component]),
    stance: faker.helpers.arrayElement(stances),
  };
};

const generateRandomAdDisclosure = (userId: User["id"]) => {
  const startDate = faker.date.between({
    from: "2023-01-01",
    to: "2023-12-31",
  });
  return {
    adElection: faker.helpers.arrayElement([
      "Election 1",
      "Election 2",
      "Election 3",
    ]) as AdDisclosure["adElection"],
    adFormat: faker.helpers.arrayElement([
      "Digital",
      "Print",
      "Direct Mail",
      "Tv",
      "Radio",
    ]) as AdDisclosure["adFormat"],
    adSpend: faker.number.int({ max: 1000000, min: 1000 }),
    adTextContent: faker.lorem.paragraph(5),
    authorizedAdSpend: faker.number.int({ max: 1000000, min: 1000 }),
    candidatesMeasuresAndPoliticalParties: faker.helpers.arrayElements(
      [
        generateRandomCandidateMeasureOrPoliticalParty(),
        generateRandomCandidateMeasureOrPoliticalParty(),
        generateRandomCandidateMeasureOrPoliticalParty(),
      ],
      { min: 1, max: 3 }
    ) as AdDisclosure["candidatesMeasuresAndPoliticalParties"],
    createdAt: Date.now().toString(),
    updatedAt: Date.now().toString(),
    createdBy: userId,
    updatedBy: userId,
    endDate: faker.date.between({
      from: startDate,
      to: "2023-12-31",
    }),
    startDate,
  };
};

export default generateRandomAdDisclosure;
