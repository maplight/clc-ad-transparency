import type { ReactElement } from "react";

type Props = {
  title: string;

  children: ReactElement;
};

const Card = ({ children, title }: Props): ReactElement => {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-2 py-3 sm:px-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      </div>
      <div className="px-2 py-3 sm:p-4">{children}</div>
    </div>
  );
};

export default Card;
