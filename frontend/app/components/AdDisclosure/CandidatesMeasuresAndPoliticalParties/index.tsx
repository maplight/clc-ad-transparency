import { CheckIcon, StopCircleIcon } from "@heroicons/react/20/solid";
import { XCircleIcon } from "@heroicons/react/24/outline";
import type { ReactElement } from "react";

type Props = {
  lvl1: string[];
  title: string;
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

const CandidatesMeasuresAndPoliticalParties = ({
  lvl1,
  title,
}: Props): ReactElement => {
  return (
    <div>
      <h3 className="block text-sm font-medium text-gray-700 mt-8">{title}</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {lvl1.map((item: string) => {
          // The `item` will be in the format of "candidate | measure | party > position"
          const labelAndPosition = item.split(" > ");

          const label = labelAndPosition[0];
          const position = labelAndPosition[1];

          return (
            <div className="mt-2 flex items-center">
              {getPositionIcon(position as Position)}
              <p className="ml-2 text-sm text-gray-500">
                {getPosition(position as Position)} {label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CandidatesMeasuresAndPoliticalParties;
