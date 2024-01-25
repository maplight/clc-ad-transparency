import { useHits } from "react-instantsearch";
import type { Hit } from "instantsearch.js";
import type { ReactElement } from "react";
import Target from "~/components/Target";
import { format, parseISO } from "date-fns";

const TableRow = ({ hit }: { hit: Hit }): ReactElement => {
  const targets: string[] = [
    ...hit["candidates.lvl1"],
    ...hit["measures.lvl1"],
    ...hit["politicalParties.lvl1"],
  ];

  return (
    <tr key={hit.objectID}>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
        {hit.filerName}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {hit.adElection}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {hit.adFormat}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <div className="grid grid-cols-1 gap-4">
          {targets.map((item: string, index: number) => (
            <Target key={index} target={item} />
          ))}
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {format(parseISO(hit.startDate), "MMM d, yyyy")}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {format(parseISO(hit.endDate), "MMM d, yyyy")}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {`$${new Intl.NumberFormat().format(hit.adSpend)}`}
      </td>
      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
        <a
          href={`${
            process.env.NODE_ENV === "development"
              ? "http://localhost:1337"
              : ""
          }${hit.adMedia[0].url}`}
          target="_blank"
          rel="noreferrer"
          className="text-primary-500 hover:text-primary-700"
        >
          View
        </a>
      </td>
    </tr>
  );
};

const AdDisclosureTable = (): ReactElement => {
  const { hits } = useHits();
  return (
    <div className="flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-[1300px] py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Filer Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Election
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Format
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Target
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Start Date
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    End Date
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Ad Spend
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {hits.map((hit) => (
                  <TableRow key={hit.objectID} hit={hit} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdDisclosureTable;
