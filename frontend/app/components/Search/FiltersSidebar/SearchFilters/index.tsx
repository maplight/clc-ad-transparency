import { HierarchicalMenu, Menu, RefinementList } from "react-instantsearch";
import MenuSelect from "~/components/MenuSelect";
import NumericMenu from "~/components/NumericMenu";
import Card from "~/components/Card";

const SearchFilters = () => {
  return (
    <ul className="-mx-2 space-y-1 flex flex-1 flex-col gap-y-2">
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
        <Card title="Format">
          <MenuSelect
            attribute="adFormat"
            sortBy={["count:desc", "name:asc", "isRefined:asc"]}
          />
        </Card>
      </li>
      <li>
        <Card title="Filer">
          <RefinementList
            attribute="createdBy"
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
        <Card title="Candidate">
          <HierarchicalMenu
            attributes={["candidates.lvl0", "candidates.lvl1"]}
            classNames={{
              selectedItem: "font-medium text-primary-500",
            }}
          />
        </Card>
      </li>
      <li>
        <Card title="Measure">
          <HierarchicalMenu
            attributes={["measures.lvl0", "measures.lvl1"]}
            classNames={{
              selectedItem: "font-medium text-primary-500",
            }}
          />
        </Card>
      </li>
      <li>
        <Card title="Party">
          <HierarchicalMenu
            attributes={["politicalParties.lvl0", "politicalParties.lvl1"]}
            classNames={{
              selectedItem: "font-medium text-primary-500",
            }}
          />
        </Card>
      </li>
    </ul>
  );
};

export default SearchFilters;
