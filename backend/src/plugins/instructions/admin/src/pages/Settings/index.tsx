// admin/src/pages/Settings/index.js
import React, { useEffect, useState } from 'react';

import { LoadingIndicatorPage, useNotification } from '@strapi/helper-plugin';

import {
  Box,
  Stack,
  Button,
  Grid, 
  GridItem,
  HeaderLayout,
  ContentLayout,
  Typography,
  Textarea,
  TextInput,
} from '@strapi/design-system';

import { Check } from '@strapi/icons';
import { useFetchClient } from '@strapi/helper-plugin';
import type{ instructionsConfig } from '../../../../server/services/instructionsConfig';

const Settings = () => {
  const [settings, setSettings] = useState<instructionsConfig | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const toggleNotification = useNotification();
  const { get, post } = useFetchClient();
    
  useEffect(() => {
    get(`/instructions/settings`).then(res => {
      setSettings(res.data);
      setIsLoading(false);
    });
  }, [setSettings]);

  const handleSubmit = async () => {
    setIsSaving(true);
    await post(`/instructions/settings`, settings);
    setIsSaving(false);
    toggleNotification({
      type: 'success',
      message: 'Settings successfully updated',
    });
  };

  let contentInstructionFields: any[] = [];
  
  const changeContentInstructions = (e, key) => {
    const newSettings = {...settings} as instructionsConfig;
    newSettings.contentInstructions ||= {};
    newSettings.contentInstructions[key] = e.target.value;
    setSettings(newSettings);
  }

  const changeInstructionsPage = (e) => {
    const newSettings = {...settings} as instructionsConfig;
    newSettings.instructionsPage = e.target.value;
    setSettings(newSettings);
  }

  if (settings && settings.contentInstructions){
    Object.keys(settings.contentInstructions).forEach((key) =>  {
      let value = settings.contentInstructions[key];
      contentInstructionFields.push(
        <TextInput 
          label={key} 
          name={key} 
          hint="Enter 1-2 sentences" 
          onChange= {e => changeContentInstructions(e, key)} 
          value={value} 
        />
      );
    });
  }
  const instructionsPage = settings?.instructionsPage;

  return (
    <>
      <HeaderLayout
        id="title"
        title="Instructions settings"
        subtitle="Manage the contents of instructions"
        primaryAction={
          isLoading ? (
            <></>
          ) : (
            <Button
              onClick={handleSubmit}
              startIcon={<Check />}
              size="L"
              disabled={isSaving}
              loading={isSaving}
            >
              Save
            </Button>
          )
        }
      ></HeaderLayout>
      {isLoading ? (
        <LoadingIndicatorPage />
      ) : (
        <ContentLayout>
          <Box
            background="neutral0"
            hasRadius
            shadow="filterShadow"
            paddingTop={6}
            paddingBottom={6}
            paddingLeft={7}
            paddingRight={7}
          >
            <Stack size={3}>
              <Typography>Content Type Instructions</Typography>
              <Grid gap={6}>
                <GridItem col={12} s={12}>
                  { contentInstructionFields }
                </GridItem>
              </Grid>
            </Stack>
          </Box>
          <Box
            background="neutral0"
            hasRadius
            shadow="filterShadow"
            paddingTop={6}
            paddingBottom={6}
            paddingLeft={7}
            paddingRight={7}
          >
            <Stack size={3}>
              <Typography>General Instructions</Typography>
              <Grid gap={6}>
                <GridItem col={12} s={12}>
                  <Textarea 
                    label="Instructions Page Content" 
                    name="instructionsPage"
                    onChange= {e => changeInstructionsPage(e)} 
                    value = {instructionsPage} >
                  </Textarea>
                </GridItem>
              </Grid>
            </Stack>
          </Box>
        </ContentLayout>
      )}
    </>
  );


};

export default Settings;
