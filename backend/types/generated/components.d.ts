import type { Schema, Attribute } from '@strapi/strapi';

export interface AdDisclosureCandidate extends Schema.Component {
  collectionName: 'components_ad_disclosure_candidates';
  info: {
    displayName: 'Candidate';
    icon: 'user';
  };
  attributes: {
    name: Attribute.Enumeration<['Candidate 1', 'Candidate 2', 'Candidate 3']> &
      Attribute.Required;
    stance: Attribute.Enumeration<['Supports', 'Opposes', 'Neither']> &
      Attribute.Required;
  };
}

export interface AdDisclosureMeasure extends Schema.Component {
  collectionName: 'components_ad_disclosure_measures';
  info: {
    displayName: 'Measure';
    icon: 'file';
    description: '';
  };
  attributes: {
    name: Attribute.Enumeration<
      ['Measure 1', 'Measure 2', 'Measure 3', 'Measure 4', 'Measure 5']
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
    name: Attribute.Enumeration<['Party 1', 'Party 2', 'Party 3', 'Party 4']> &
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
