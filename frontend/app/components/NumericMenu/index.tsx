import React from "react";
import { useNumericMenu, type UseNumericMenuProps } from "react-instantsearch";

const NumericMenu = (props: UseNumericMenuProps) => {
  const { items, refine } = useNumericMenu(props);

  return (
    <fieldset>
      <legend className="sr-only">Ad Spend</legend>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            <input
              id={item.label}
              name={item.label}
              type="radio"
              checked={item.isRefined}
              className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-600"
              onChange={() => {
                refine(item.value);
              }}
            />
            <label
              htmlFor={item.label}
              className="ml-3 block text-sm leading-6 text-gray-900"
            >
              {item.label}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default NumericMenu;
