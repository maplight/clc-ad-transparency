/*
 *
 * HomePage
 *
 */
//{ memo, useState, useEffect }
import { useState, useEffect } from 'react';
import { useFetchClient } from '@strapi/helper-plugin';

import {
  BaseHeaderLayout,
  ContentLayout
} from '@strapi/design-system'

const HomePage = () => {
  const [instructions, setInstructions] = useState('loading instructions');
  const { get } = useFetchClient();

  useEffect(() => {
    get('/instructions').then(res => {
      setInstructions(res.data);
    });
  }, [setInstructions]);

  return (
    <div>
      <BaseHeaderLayout
        title="Instructions"
        subtitle="How to use the CLC Ad Database"
        as="h2"
      />
      <ContentLayout>
        <div style={{whiteSpace : "pre-line"}}>
          { instructions }
        </div>
      </ContentLayout>
    </div>
  );
};

export default HomePage;
