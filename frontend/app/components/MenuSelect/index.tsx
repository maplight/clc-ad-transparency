import type { UseMenuProps } from "react-instantsearch";
import { useMenu } from "react-instantsearch";

const MenuSelect = (props: UseMenuProps) => {
  const { items, refine } = useMenu(props);
  const { value: selectedValue } = items.find((item) => item.isRefined) || {
    value: "",
  };

  return (
    <select
      value={selectedValue}
      onChange={(event) => {
        refine((event.target as HTMLSelectElement).value);
      }}
    >
      {items.map((item, index) => (
        <option key={index} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default MenuSelect;
