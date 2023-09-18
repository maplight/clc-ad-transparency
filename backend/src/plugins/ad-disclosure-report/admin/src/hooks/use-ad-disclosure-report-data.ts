import {
  auth,
  useFetchClient,
} from '@strapi/helper-plugin';

const useAdDisclosureReportData = () => {
  const { get } = useFetchClient();

  const fetchAdDisclosures = async (filingPeriodStartDate: string, filingPeriodEndDate: string) => {
    try {
      const userInfo = auth.get('userInfo')

      const filters = [
        `[endDate][$gte]=${filingPeriodStartDate}`,
        `[endDate][$lte]=${filingPeriodEndDate}`,
        `[createdBy][id][$eq]=${userInfo.id}`,
      ];

      const url = `/api/ad-disclosures?${filters.map((filter, index) => `filters[$and][${index}]${filter}&`).join('')}&populate=*`;

      const { data: { data: adDisclosures }} = await get(url);

      return adDisclosures;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchFilingPeriod = async (id: number) => {
    try {
      const url = `/api/filing-periods/${id}`;

      const { data: { data: filingPeriod } } = await get(url);

      return filingPeriod;
    } catch (error) {
      console.error(error);
    }
  }

  return {
    fetchAdDisclosures,
    fetchFilingPeriod,
  }
}

export default useAdDisclosureReportData;
