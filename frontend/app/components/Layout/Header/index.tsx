import type { ReactElement } from "react";
import mapLightLogo from "~/images/maplight-logo.png";

const Header = (): ReactElement => {
  return (
    <header className="bg-primary-600 fixed z-50 shadow-2xl w-full h-20">
      <div className="py-4 px-4 sm:px-6 lg:px-8 flex flex-row items-center justify-between">
        <img className="h-12 w-auto" src={mapLightLogo} alt="MapLight Logo" />
        <h1 className="font-bold text-2xl text-white">Ad Disclosure Search</h1>
      </div>
    </header>
  );
};

const HeaderSpacer = (): ReactElement => {
  return <div className="h-20" />;
};

export default Header;
export { HeaderSpacer };
