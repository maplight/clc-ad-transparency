import {
  BanknotesIcon,
  CursorArrowRaysIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import CandidatesMeasuresAndPoliticalParties from "./CandidatesMeasuresAndPoliticalParties";
import Format from "./Format";
import type { ReactElement } from "react";
import type { Hit } from "instantsearch.js";
import { Highlight } from "react-instantsearch";

type Props = {
  hit: Hit;
};

const STRAPI_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://sublime-vitality-a5729e6407.strapiapp.com"
    : "http://localhost:1337";

const AdDisclosure = ({ hit }: Props): ReactElement => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-4 sm:py-2 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        {/* Ad Disclosure details */}
        <div className="lg:max-w-lg lg:self-end">
          <div className="flex items-center space-x-2">
            <div className="flex items-center text-sm">
              <p className="font-medium text-gray-500">{hit.adElection}</p>
            </div>
          </div>

          <div className="mt-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {hit.filerName}
            </h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Ad Disclosure Information
            </h2>

            <div className="flex items-center">
              <BanknotesIcon
                className="h-6 w-6 text-green-500"
                aria-hidden="true"
              />
              <p className="text-lg text-gray-900 sm:text-xl ml-2">{`$${new Intl.NumberFormat().format(
                hit.adSpend
              )}`}</p>

              {hit.clickCount && (
                <div className="ml-4 border-l border-gray-300 pl-4">
                  <h2 className="sr-only">Clicks</h2>
                  <div className="flex items-center">
                    <div>
                      <div className="flex items-center">
                        <CursorArrowRaysIcon className="h-6 w-6 text-gray-900" />
                      </div>
                      <p className="sr-only">{`${hit.clickCount} clicks`}</p>
                    </div>
                    <p className="ml-2 text-sm text-gray-500">{`${hit.clickCount} clicks`}</p>
                  </div>
                </div>
              )}

              {hit.viewCount && (
                <div className="ml-4 border-l border-gray-300 pl-4">
                  <h2 className="sr-only">Views</h2>
                  <div className="flex items-center">
                    <div>
                      <div className="flex items-center">
                        <EyeIcon className="h-6 w-6 text-gray-900" />
                      </div>
                      <p className="sr-only">{`${hit.viewCount} views`}</p>
                    </div>
                    <p className="ml-2 text-sm text-gray-500">{`${hit.viewCount} views`}</p>
                  </div>
                </div>
              )}

              <div className="ml-4 border-l border-gray-300 pl-4">
                <Format format={hit.adFormat} />
              </div>
            </div>

            {/* Ad Disclosure searchable text content */}
            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">
                <Highlight attribute="adTextContent" hit={hit} />
              </p>
            </div>

            {hit["candidates.lvl1"].length > 0 && (
              <CandidatesMeasuresAndPoliticalParties
                lvl1={hit["candidates.lvl1"]}
                title="Candidates"
              />
            )}

            {hit["measures.lvl1"].length > 0 && (
              <CandidatesMeasuresAndPoliticalParties
                lvl1={hit["measures.lvl1"]}
                title="Measures"
              />
            )}

            {hit["politicalParties.lvl1"].length > 0 && (
              <CandidatesMeasuresAndPoliticalParties
                lvl1={hit["politicalParties.lvl1"]}
                title="Parties"
              />
            )}
          </section>
        </div>

        {/* Ad Disclosure media - TODO: Account for video, PDF, etc. */}
        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
            <img
              src={`${STRAPI_BASE_URL}${hit.adMedia[0].url}`}
              alt={hit.adMedia[0].alternativeText || hit.adTextContent}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdDisclosure;
