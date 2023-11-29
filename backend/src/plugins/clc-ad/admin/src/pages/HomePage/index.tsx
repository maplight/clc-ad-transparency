/*
 *
 * HomePage
 *
 */
import { useState, useEffect } from 'react';
import { useFetchClient } from '@strapi/helper-plugin';

import {
  BaseHeaderLayout,
  ContentLayout,
  Box,
} from '@strapi/design-system'

const HomePage = () => {
  const [instructions, setInstructions] = useState('loading instructions');
  const { get } = useFetchClient();

  useEffect(() => {
    get('/clc-ad').then(res => {
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
        <Box color="neutral600" style={{whiteSpace : "pre-line"}}>{instructions}</Box>
      </ContentLayout>
    </div>
  );
};

export default HomePage;
