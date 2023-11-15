import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  NewspaperIcon,
  RadioIcon,
  TvIcon,
} from "@heroicons/react/24/outline";
import type { ReactElement } from "react";

type AdFormat = "Digital" | "Print" | "Radio" | "Tv" | "Direct Mail";

type Props = {
  format: AdFormat;
};

const getFormatIcon = (format: AdFormat): ReactElement | undefined => {
  switch (format) {
    case "Digital":
      return (
        <DevicePhoneMobileIcon
          className="h-5 w-5 text-gray-900"
          aria-hidden="true"
        />
      );
    case "Print":
      return (
        <NewspaperIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
      );
    case "Radio":
      return <RadioIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />;
    case "Tv":
      return <TvIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />;
    case "Direct Mail":
      return (
        <EnvelopeIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
      );
  }
};

const getFormat = (format: AdFormat): string => {
  if (format === "Direct Mail") {
    return "Mail";
  }

  return format;
};

const Format = ({ format }: Props): ReactElement => {
  return (
    <>
      <h2 className="sr-only">Format</h2>
      <div className="flex items-center">
        <div>
          <div className="flex items-center">{getFormatIcon(format)}</div>
          <p className="sr-only">{format}</p>
        </div>
        <p className="ml-2 text-sm text-gray-500">{getFormat(format)}</p>
      </div>
    </>
  );
};

export default Format;
