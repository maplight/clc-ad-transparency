import React from "react";
import { useNumericMenu, type UseNumericMenuProps } from "react-instantsearch";

const NumericMenu = (props: UseNumericMenuProps) => {
  const { items, refine } = useNumericMenu(props);

  return (
    <ul>
      {items.map((item) => (
        <li key={item.value}>
          <label>
            <input
              type="radio"
              name={item.label}
              checked={item.isRefined}
              onChange={() => {
                refine(item.value);
              }}
            />
            <span>{item.label}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default NumericMenu;
