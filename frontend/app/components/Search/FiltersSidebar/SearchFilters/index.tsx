import { ClearRefinements, Menu, RefinementList } from "react-instantsearch";
import MenuSelect from "~/components/MenuSelect";
import NumericMenu from "~/components/NumericMenu";
import DateSelect from "~/components/DateSelect";
import Card from "~/components/Card";

const SearchFilters = () => {
  return (
    <div className="px-2 py-4 bg-gray-100 overflow-y-auto w-80">
      <h2 className="text-xl text-center font-medium mb-3">Search Filters</h2>
      <ul className="space-y-1 flex flex-1 flex-col gap-y-2">
        <li>
          <Card title="Filer">
            <RefinementList
              attribute="filerName"
              classNames={{
                checkbox: "text-primary-500 focus:ring-primary-500 rounded",
                selectedItem: "font-medium text-primary-500",
              }}
              searchable
              sortBy={["count:desc", "name:asc", "isRefined:asc"]}
            />
          </Card>
        </li>
        <li>
          <Card title="Format">
            <MenuSelect
              attribute="adFormat"
              sortBy={["count:desc", "name:asc", "isRefined:asc"]}
            />
          </Card>
        </li>
        <li>
          <Card title="Candidate">
            <RefinementList
              attribute="candidates.lvl0"
              classNames={{
                checkbox: "text-primary-500 focus:ring-primary-500 rounded",
                selectedItem: "font-medium text-primary-500",
                showMore:
                  "bg-none hover:bg-none focus:bg-none bg-primary-600 hover:bg-primary-500 focus:bg-primary-500 focus:ring-0 text-white font-bold py-2 px-4 rounded",
              }}
              limit={5}
              searchable
              showMore
              sortBy={["count:desc", "name:asc", "isRefined:asc"]}
            />
          </Card>
        </li>
        <li>
          <Card title="Office">
            <RefinementList
              attribute="offices.lvl0"
              classNames={{
                checkbox: "text-primary-500 focus:ring-primary-500 rounded",
                selectedItem: "font-medium text-primary-500",
                showMore:
                  "bg-none hover:bg-none focus:bg-none bg-primary-600 hover:bg-primary-500 focus:bg-primary-500 focus:ring-0 text-white font-bold py-2 px-4 rounded",
              }}
              limit={5}
              searchable
              showMore
              sortBy={["count:desc", "name:asc", "isRefined:asc"]}
            />
          </Card>
        </li>
        <li>
          <Card title="Measure">
            <RefinementList
              attribute="measures.lvl0"
              classNames={{
                checkbox: "text-primary-500 focus:ring-primary-500 rounded",
                selectedItem: "font-medium text-primary-500",
                showMore:
                  "bg-none hover:bg-none focus:bg-none bg-primary-600 hover:bg-primary-500 focus:bg-primary-500 focus:ring-0 text-white font-bold py-2 px-4 rounded",
              }}
              limit={5}
              searchable
              showMore
              sortBy={["count:desc", "name:asc", "isRefined:asc"]}
            />
          </Card>
        </li>
        <li>
          <Card title="Party">
            <RefinementList
              attribute="politicalParties.lvl0"
              classNames={{
                checkbox: "text-primary-500 focus:ring-primary-500 rounded",
                selectedItem: "font-medium text-primary-500",
                showMore:
                  "bg-none hover:bg-none focus:bg-none bg-primary-600 hover:bg-primary-500 focus:bg-primary-500 focus:ring-0 text-white font-bold py-2 px-4 rounded",
              }}
              limit={5}
              searchable
              showMore
              sortBy={["count:desc", "name:asc", "isRefined:asc"]}
            />
          </Card>
        </li>
        <li>
          <Card title="Ad Spend">
            <NumericMenu
              attribute="adSpend"
              items={[
                { label: "Any", start: 0 },
                { label: "$1,000+", start: 1000 },
                { label: "$10,000+", start: 10000 },
                { label: "$100,000+", start: 100000 },
                { label: "$1,000,000+", start: 1000000 },
              ]}
            />
          </Card>
        </li>
        <li>
          <Card title="Election">
            <Menu
              attribute="adElection"
              classNames={{
                count: "text-sm text-gray-500",
                selectedItem: "font-medium text-primary-500",
              }}
              sortBy={["count:desc", "name:asc", "isRefined:asc"]}
            />
          </Card>
        </li>
        <li>
          <Card title="End Date">
            <DateSelect attribute="endDateTimestamp" />
          </Card>
        </li>
        <li>
          <ClearRefinements
            classNames={{
              button:
                "bg-none hover:bg-none bg-primary-600 hover:bg-primary-500 text-white font-bold rounded",
              disabledButton:
                "bg-none hover:bg-none bg-primary-600 hover:bg-primary-500 text-white font-bold rounded",
            }}
            translations={{
              resetButtonText: "Reset Filters",
            }}
          />
        </li>
      </ul>
    </div>
  );
};

export default SearchFilters;
