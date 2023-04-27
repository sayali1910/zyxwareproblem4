import React, { ReactElement } from "react";
import Header from "./header";
const LayoutComponent = ({ children }: { children: ReactElement }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
export default LayoutComponent;
