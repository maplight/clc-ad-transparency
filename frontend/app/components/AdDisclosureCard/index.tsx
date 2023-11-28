import {
  BanknotesIcon,
  CursorArrowRaysIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import Target from "~/components/Target";
import Format from "./Format";
import type { ReactElement } from "react";
import type { Hit } from "instantsearch.js";
import { Highlight } from "react-instantsearch";
import { format, parseISO } from "date-fns";

type Props = {
  hit: Hit;
};

const AdDisclosureCard = ({ hit }: Props): ReactElement => {
  const targets: string[] = [
    ...hit["candidates.lvl1"],
    ...hit["measures.lvl1"],
    ...hit["politicalParties.lvl1"],
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-4 sm:py-2 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        {/* Ad Disclosure details */}
        <div className="lg:max-w-lg lg:self-end">
          <div className="flex items-center space-x-2">
            <div className="flex items-center text-sm">
              <p className="font-light text-gray-500">{hit.adElection}</p>
            </div>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
            >
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
            </svg>
            <div className="flex items-center text-sm">
              <p className="font-light text-gray-500">{`${format(
                parseISO(hit.startDate),
                "MMM d, yyyy"
              )} — ${format(parseISO(hit.endDate), "MMM d, yyyy")}`}</p>
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

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-8">
              {targets.map((item: string, index: number) => (
                <Target key={index} target={item} />
              ))}
            </div>

            {/* Ad Disclosure searchable text content */}
            <div className="mt-8 space-y-6">
              <p className="text-base text-gray-500">
                <Highlight attribute="adTextContent" hit={hit} />
              </p>
            </div>
          </section>
        </div>

        {/* Ad Disclosure media - TODO: Account for video, PDF, etc. */}
        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
            <img
              src={`${
                process.env.NODE_ENV === "development"
                  ? "http://localhost:1337"
                  : ""
              }${hit.adMedia[0].url}`}
              alt={hit.adMedia[0].alternativeText || hit.adTextContent}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdDisclosureCard;
