/*
 *
 * HomePage
 *
 */

import React from 'react';
import pluginId from '../../pluginId';
import {
  BaseHeaderLayout,
  ContentLayout
} from '@strapi/design-system'

const HomePage = () => {
  return (
    <div>
      <BaseHeaderLayout
        title="Instructions"
        subtitle="How to use the CLC Ad Database"
        as="h2"
      />
      <ContentLayout>
        <ol>
          <li>Add ad disclosures</li>
          <li>File them</li>
        </ol>
      </ContentLayout>
    </div>
  );
};

export default HomePage;
