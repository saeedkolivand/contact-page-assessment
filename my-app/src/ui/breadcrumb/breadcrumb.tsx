import * as React from "react";

interface IBreadcrumb {
  name: string;
}

const Breadcrumb: React.FC<IBreadcrumb> = ({ name = "" }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="text-xs tracking-[0.32px] text-[#1a1a1d]"
    >
      {name}
    </nav>
  );
};

export default Breadcrumb;
