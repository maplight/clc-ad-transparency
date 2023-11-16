import { CheckIcon, StopCircleIcon } from "@heroicons/react/20/solid";
import { XCircleIcon } from "@heroicons/react/24/outline";
import type { ReactElement } from "react";

type Props = {
  target: string;
};

type Position = "Opposes" | "Supports" | "Neither";

const getPositionIcon = (position: Position): ReactElement => {
  switch (position) {
    case "Opposes":
      return (
        <XCircleIcon
          className="h-5 w-5 flex-shrink-0 text-red-500"
          aria-hidden="true"
        />
      );
    case "Supports":
      return (
        <CheckIcon
          className="h-5 w-5 flex-shrink-0 text-green-500"
          aria-hidden="true"
        />
      );
    case "Neither":
      return (
        <StopCircleIcon
          className="h-5 w-5 flex-shrink-0 text-gray-500"
          aria-hidden="true"
        />
      );
  }
};

const getPosition = (position: Position): string => {
  if (position === "Neither") {
    return "Neither Supports nor Opposes";
  }

  return position;
};

const Target = ({ target }: Props): ReactElement => {
  const labelAndPosition = target.split(" > ");

  const label = labelAndPosition[0];
  const position = labelAndPosition[1];
  return (
    <div className="flex items-center">
      {getPositionIcon(position as Position)}
      <p className="ml-2 text-sm text-gray-500">
        {getPosition(position as Position)} {label}
      </p>
    </div>
  );
};

export default Target;
