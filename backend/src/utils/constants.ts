// Arrays of candidates, measures, politicalParties, and filers
// that we can use to generate fake data. The objects will allow
// us to add additional properties if we need to.

// These names should be kept in sync with the schema in backend/src/components/ad-disclosure/candidate.json
export const candidates = [
  { name: "Tracy Kessler-Bechtelar" },
  { name: "Dominic Kerluke" },
  { name: "Neil Brown" },
  { name: "Bessie Nitzsche" },
  { name: "Sarah Homenick" },
  { name: "Leonard Auer" },
  { name: "Frankie Swift Jr." },
  { name: "Alyssa Nicolas DVM" },
  { name: "Nora Fritsch V" },
  { name: "Lindsey Mohr" },
  { name: "Patty Sporer-Blick" },
  { name: "Gilberto O'Kon-Schmitt" },
  { name: "Bessie Hudson" },
  { name: "Lionel Wehner IV" },
  { name: "Hattie Schmidt" },
  { name: "Nicolas Conn-Conn" },
  { name: "Kellie Sipes" },
  { name: "Roman Tremblay-Hegmann" },
  { name: "Toni Herzog" },
  { name: "Randolph Zieme" },
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
