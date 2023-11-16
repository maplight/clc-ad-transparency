import type { ReactElement } from "react";
import mapLightLogo from "~/images/maplight-logo.png";

const Header = (): ReactElement => {
  return (
    <header className="bg-primary-600 fixed z-50 shadow-2xl w-full h-20">
      <div className="py-4 px-4 sm:px-6 lg:px-8">
        <img className="h-12 w-auto" src={mapLightLogo} alt="MapLight Logo" />
      </div>
    </header>
  );
};

const HeaderSpacer = (): ReactElement => {
  return <div className="h-20" />;
};

export default Header;
export { HeaderSpacer };
