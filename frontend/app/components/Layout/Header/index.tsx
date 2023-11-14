import type { ReactElement } from "react";
import clcLogo from "~/images/clc-logo.png";

const Header = (): ReactElement => {
  return (
    <header className="bg-primary-600 fixed z-50 shadow-2xl w-full h-24">
      <div className="py-4 px-4 sm:px-6 lg:px-8">
        <img className="h-12 w-auto" src={clcLogo} alt="CLC Logo" />
      </div>
    </header>
  );
};

const HeaderSpacer = (): ReactElement => {
  return <div className="h-24" />;
};

export default Header;
export { HeaderSpacer };
