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

export const adTextContentExamples = [
  `Meet John Smith, your neighbor and advocate for change. With a proven track record of community service, John Smith is ready to represent you. Together, we can build a brighter future for our district.`,
  `Let's get our economy back on track. With Sarah Johnson's vision, we can create jobs, support local businesses, and ensure that everyone has a fair shot at success.`,
  `It's time to put aside divisive politics and come together. Michael Anderson is dedicated to finding common ground and working across the aisle to get things done for our community.`,
  `Mayor Jennifer Martinez and Senator Robert Baker support Emily Clark because they trust her vision and dedication. Join us in supporting the candidate that has earned the trust of our community.`,
  `Your vote matters. Join the movement for positive change. Stand with Thomas Nelson on Election Day and together, we can shape the future of our community.`,
  `Our children deserve the best education possible. Vote 'YES' on Measure 1 to provide much-needed funding for our schools. Together, we can ensure every child has access to a quality education.`,
  `Our environment is at risk, but we have a solution. Support Measure B to promote clean energy, reduce pollution, and protect our planet for future generations. Vote 'YES' for a greener tomorrow.`,
  `Higher property taxes hurt homeowners and small businesses. Say 'NO' to Measure 3 and protect your hard-earned money. We need responsible spending, not higher taxes.`,
  `We all want safer communities. However, Measure X goes too far. Voting 'NO' ensures we maintain law and order while finding more balanced solutions for criminal justice reform.`,
  `The Democratic Party is committed to progress, equality, and a brighter future for all Americans. Join us in supporting candidates who champion healthcare for all, climate action, and a fair economy. Together, we can move our nation forward.`,
  `The Republican Party stands for strong national security, lower taxes, and limited government. Support our candidates who prioritize individual freedoms, economic growth, and traditional values. Let's protect what makes America great.`,
];
