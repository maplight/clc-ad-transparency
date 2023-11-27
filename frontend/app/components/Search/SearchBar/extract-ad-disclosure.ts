import type { Hit } from "instantsearch.js";
import getEnv from "utils/get-env";

type Target = {
  name: string;
  stance: string;
};

// Extracts the ad disclosure from the search result hit
// and puts it in the shape we need for the CSV export
const extractAdDisclosure = (hit: Hit) => {
  if (!hit) return null;

  const env = getEnv();

  return {
    filerName: hit.filerName,
    adElection: hit.adElection,
    adFormat: hit.adFormat,
    adMedia: `${env.STRAPI_BASE_URL}${hit.adMedia[0].url}`,
    adSpend: hit.adSpend,
    adTextContent: hit.adTextContent,
    authorizedAdSpend: hit.authorizedAdSpend,
    clickCount: hit.clickCount,
    viewCount: hit.viewCount,
    startDate: hit.startDate,
    endDate: hit.endDate,
    externalLink: hit.externalLink,
    targets: hit.candidatesMeasuresAndPoliticalParties
      .map((target: Target) => `${target.stance} ${target.name}`)
      .join(", "),
    offices: hit["offices.lvl0"].join(", "),
    targetAudience: hit.targetAudience,
  };
};

export default extractAdDisclosure;