import React, { useEffect, useState } from "react";
import type { ReactElement } from "react";
import {
  Box,
  EmptyStateLayout,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Typography,
} from "@strapi/design-system";
import { useCMEditViewDataManager } from "@strapi/helper-plugin";
import useAdDisclosureReportData from "../../hooks/use-ad-disclosure-report-data";
import useIsAdmin from "../../hooks/use-is-admin";
import type { ApiAdDisclosureAdDisclosure } from "../../../../../../../types/generated/contentTypes";

type AdDisclosure = ApiAdDisclosureAdDisclosure & {
  id: number;
};

const AdDisclosureTable = ({
  attribute,
  name,
  onChange,
  value,
}): ReactElement => {
  const { fetchAdDisclosures, fetchFilingPeriod } = useAdDisclosureReportData();
  const isAdmin = useIsAdmin();

  const {
    modifiedData: { filingPeriod: modifiedFilingPeriod },
  } = useCMEditViewDataManager();

  const [adDisclosures, setAdDisclosures] = useState<AdDisclosure[]>(
    value ? JSON.parse(value) : []
  );

  const handleChange = (value: string) => {
    onChange({ target: { name, value, type: attribute.type } });
  };

  const populateAdDisclosures = async (selectedFilingPeriodId: number) => {
    const filingPeriod = await fetchFilingPeriod(selectedFilingPeriodId);

    if (filingPeriod) {
      const { startDate, endDate } = filingPeriod.attributes;

      const adDisclosures = await fetchAdDisclosures(startDate, endDate);

      if (adDisclosures) {
        handleChange(JSON.stringify(adDisclosures));
        setAdDisclosures(adDisclosures);
      }
    }
  };

  useEffect(() => {
    // Don't fetch ad disclosures if user is an admin
    if (isAdmin) return;

    const selectedFilingPeriod = modifiedFilingPeriod?.[0];

    if (selectedFilingPeriod) {
      populateAdDisclosures(selectedFilingPeriod.id);
    } else {
      // Reset ad disclosures if filing period is deselected
      handleChange(JSON.stringify([]));
      setAdDisclosures([]);
    }
  }, [modifiedFilingPeriod]);

  return (
    <Box padding={8} background="neutral100">
      <Table colCount={adDisclosures.length} rowCount={adDisclosures.length}>
        <Thead>
          <Tr>
            <Th>
              <Typography variant="sigma">ID</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Ad Format</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Ad Spend</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Target Audience</Typography>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {adDisclosures.length > 0 ? (
            adDisclosures?.map((adDisclosure) => {
              const { attributes, id } = adDisclosure;
              return (
                <Tr key={id}>
                  <Td>
                    <Typography textColor="neutral800">{id}</Typography>
                  </Td>
                  <Td>
                    <Typography textColor="neutral800">
                      {attributes.adFormat}
                    </Typography>
                  </Td>
                  <Td>
                    <Typography textColor="neutral800">
                      {attributes.adSpend}
                    </Typography>
                  </Td>
                  <Td>
                    <Typography textColor="neutral800">
                      {attributes.targetAudience}
                    </Typography>
                  </Td>
                </Tr>
              );
            })
          ) : (
            <Tr>
              <Td colSpan={4}>
                <EmptyStateLayout
                  content="Select a Filing Period to view Ad Disclosures."
                  shadow="none"
                />
              </Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </Box>
  );
};

export default AdDisclosureTable;
