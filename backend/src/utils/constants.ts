// Arrays of candidates, measures, politicalParties, and filers
// that we can use to generate fake data. The objects will allow
// us to add additional properties if we need to.

// These names should be kept in sync with the schema in backend/src/components/ad-disclosure/candidate.json
export const candidates = [
  {
    name: "Tracy Kessler-Bechtelar",
    office: "Justice of the Supreme Court",
  },
  {
    name: "Dominic Kerluke",
    office: "Secretary of State",
  },
  {
    name: "Neil Brown",
    office: "Attorney General",
  },
  {
    name: "Bessie Nitzsche",
    office: "Comptroller",
  },
  {
    name: "Sarah Homenick",
    office: "Treasurer",
  },
  {
    name: "Leonard Auer",
    office: "U.S. Senator",
  },
  {
    name: "Frankie Swift Jr.",
    office: "U.S. Representative",
  },
  {
    name: "Alyssa Nicolas DVM",
    office: "State Senator",
  },
  {
    name: "Nora Fritsch V",
    office: "State Representative",
  },
  {
    name: "Lindsey Mohr",
    office: "County Board Member",
  },
  {
    name: "Patty Sporer-Blick",
    office: "County Clerk",
  },
  {
    name: "Gilberto O'Kon-Schmitt",
    office: "County Treasurer",
  },
  {
    name: "Bessie Hudson",
    office: "County Sheriff",
  },
  {
    name: "Lionel Wehner IV",
    office: "County Assessor",
  },
  {
    name: "Hattie Schmidt",
    office: "County Auditor",
  },
  {
    name: "Nicolas Conn-Conn",
    office: "County Recorder",
  },
  {
    name: "Kellie Sipes",
    office: "County Coroner",
  },
  {
    name: "Roman Tremblay-Hegmann",
    office: "County Surveyor",
  },
  {
    name: "Toni Herzog",
    office: "County Superintendent of Schools",
  },
  {
    name: "Randolph Zieme",
    office: "County Commissioner",
  },
] as const;

export const candidateNames = candidates.map(({ name }) => name);

// These names should be kept in sync with the schema in backend/src/components/ad-disclosure/measure.json
export const measures = [
  { name: "Question 1" },
  { name: "Question 2" },
  { name: "Question 3" },
  { name: "Question 4" },
  { name: "Question 5" },
  { name: "Question 6" },
  { name: "Question 7" },
  { name: "Question 8" },
  { name: "Question 9" },
  { name: "Question 10" },
] as const;

export const measureNames = measures.map(({ name }) => name);

// These names should be kept in sync with the schema in backend/src/components/ad-disclosure/political-party.json
export const politicalParties = [
  { name: "Democratic Party" },
  { name: "Republican Party" },
  { name: "Green Party" },
  { name: "Libertarian Party" },
  { name: "Independent Party" },
] as const;

export const politicalPartyNames = politicalParties.map(({ name }) => name);

export const filers = [
  { name: "Americans for a Better Tomorrow, Tomorrow" },
  { name: "Citizens for a Better Tomorrow" },
  { name: "Americans for a Better America" },
  { name: "Citizens for a Better America" },
  { name: "Americans for a Better Tomorrow, Today" },
  { name: "Students for a Better Tomorrow, Today" },
] as const;

export const filerNames = filers.map(({ name }) => name);
