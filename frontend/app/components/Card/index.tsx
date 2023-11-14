import type { ReactElement } from "react";

type Props = {
  title: string;

  children: ReactElement;
};

const Card = ({ children, title }: Props): ReactElement => {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="px-1 py-2 sm:px-3">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      </div>
      <div className="px-1 py-2 sm:p-3">{children}</div>
    </div>
  );
};

export default Card;
