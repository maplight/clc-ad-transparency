import type { UseMenuProps } from "react-instantsearch";
import { useMenu } from "react-instantsearch";

const MenuSelect = (props: UseMenuProps) => {
  const { items, refine } = useMenu(props);
  const { value: selectedValue } = items.find((item) => item.isRefined) || {
    value: "",
  };

  return (
    <select
      className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-primary-500 focus:ring-2 focus:ring-primary-600 sm:text-sm sm:leading-6"
      value={selectedValue}
      onChange={(event) => {
        refine((event.target as HTMLSelectElement).value);
      }}
    >
      <option value="">All</option>
      {items.map((item, index) => (
        <option key={index} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default MenuSelect;
