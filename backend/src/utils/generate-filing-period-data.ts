import type { Strapi } from "@strapi/strapi";

const FILING_PERIODS_SEED_DATA = [
  {
    name: "Q1 2023",
    startDate: "2023-01-01",
    endDate: "2023-03-31",
  },
  {
    name: "Q2 2023",
    startDate: "2023-04-01",
    endDate: "2023-06-30",
  },
  {
    name: "Q3 2023",
    startDate: "2023-07-01",
    endDate: "2023-09-30",
  },
  {
    name: "Q4 2023",
    startDate: "2023-10-01",
    endDate: "2023-12-31",
  },
];

const generateFilingPeriodData = async (strapi: Strapi) => {
  console.log("Generating Filing Period data...");

  for (const filingPeriodData of FILING_PERIODS_SEED_DATA) {
    await strapi.entityService.create("api::filing-period.filing-period", {
      data: filingPeriodData,
    });
  }
};

export default generateFilingPeriodData;
