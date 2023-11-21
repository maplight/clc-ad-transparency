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
    from: "2020-01-01",
    to: "2023-12-31",
  });
  return {
    adElection: faker.helpers.arrayElement([
      "Election 2020",
      "Election 2022",
      "Election 2024",
    ]) as AdDisclosure["adElection"],
    adFormat: faker.helpers.arrayElement([
      "Digital",
      "Print",
      "Direct Mail",
      "Tv",
      "Radio",
    ]) as AdDisclosure["adFormat"],
    adSpend: faker.number.int({ max: 1000000, min: 1000 }),
    adTextContent: faker.word.words({ count: { min: 15, max: 30 } }),
    authorizedAdSpend: faker.number.int({ max: 1000000, min: 1000 }),
    candidatesMeasuresAndPoliticalParties: faker.helpers.arrayElements(
      [
        generateRandomCandidateMeasureOrPoliticalParty(),
        generateRandomCandidateMeasureOrPoliticalParty(),
        generateRandomCandidateMeasureOrPoliticalParty(),
      ],
      { min: 1, max: 3 }
    ) as AdDisclosure["candidatesMeasuresAndPoliticalParties"],
    clickCount: faker.number.int({ max: 10000, min: 100 }),
    endDate: faker.date.between({
      from: startDate,
      to: "2023-12-31",
    }),
    externalLink: faker.internet.url(),
    startDate,
    targetAudience: faker.helpers.arrayElement([
      "Registered Voters",
      "Unregistered Voters",
      "Voters",
      "Non-Voters",
      "Voters in District 1",
      "Voters in District 2",
    ]),
    viewCount: faker.number.int({ max: 100000, min: 1000 }),
    createdAt: Date.now().toString(),
    updatedAt: Date.now().toString(),
    createdBy: userId,
    updatedBy: userId,
  };
};

export default generateRandomAdDisclosure;
