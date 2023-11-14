import Header from "./Header";
import type { ReactElement, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props): ReactElement => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
