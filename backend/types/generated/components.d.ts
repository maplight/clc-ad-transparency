import type { Schema, Attribute } from '@strapi/strapi';

export interface AdDisclosureCandidate extends Schema.Component {
  collectionName: 'components_ad_disclosure_candidates';
  info: {
    displayName: 'Candidate';
    icon: 'user';
  };
  attributes: {
    name: Attribute.Enumeration<
      [
        'Tracy Kessler-Bechtelar',
        'Dominic Kerluke',
        'Neil Brown',
        'Bessie Nitzsche',
        'Sarah Homenick',
        'Leonard Auer',
        'Frankie Swift Jr.',
        'Alyssa Nicolas DVM',
        'Nora Fritsch V',
        'Lindsey Mohr',
        'Patty Sporer-Blick',
        "Gilberto O'Kon-Schmitt",
        'Bessie Hudson',
        'Lionel Wehner IV',
        'Hattie Schmidt',
        'Nicolas Conn-Conn',
        'Kellie Sipes',
        'Roman Tremblay-Hegmann',
        'Toni Herzog',
        'Randolph Zieme'
      ]
    > &
      Attribute.Required;
    stance: Attribute.Enumeration<['Supports', 'Opposes', 'Neither']> &
      Attribute.Required;
  };
}

export interface AdDisclosureMeasure extends Schema.Component {
  collectionName: 'components_ad_disclosure_measures';
  info: {
    description: '';
    displayName: 'Measure';
    icon: 'file';
  };
  attributes: {
    name: Attribute.Enumeration<
      [
        'Question 1',
        'Question 2',
        'Question 3',
        'Question 4',
        'Question 5',
        'Question 6',
        'Question 7',
        'Question 8',
        'Question 9',
        'Question 10'
      ]
    > &
      Attribute.Required;
    stance: Attribute.Enumeration<['Supports', 'Opposes', 'Neither']> &
      Attribute.Required;
  };
}

export interface AdDisclosurePoliticalParty extends Schema.Component {
  collectionName: 'components_ad_disclosure_political_parties';
  info: {
    displayName: 'Political Party';
    icon: 'bulletList';
  };
  attributes: {
    name: Attribute.Enumeration<
      [
        'Democratic Party',
        'Republican Party',
        'Green Party',
        'Libertarian Party',
        'Independent Party'
      ]
    > &
      Attribute.Required;
    stance: Attribute.Enumeration<['Supports', 'Opposes', 'Neither']> &
      Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ad-disclosure.candidate': AdDisclosureCandidate;
      'ad-disclosure.measure': AdDisclosureMeasure;
      'ad-disclosure.political-party': AdDisclosurePoliticalParty;
    }
  }
}
