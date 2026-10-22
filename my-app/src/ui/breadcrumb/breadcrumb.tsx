import * as React from "react";

interface IBreadcrumb {
  name: string;
}

const Breadcrumb: React.FC<IBreadcrumb> = ({ name = "" }) => {
  return (
    <div className="flex content-center justify-between items-center text-breadcrumb">
      {name}
    </div>
  );
};

export default Breadcrumb;

// /* Breadcrumb */
//
// width: 45px;
// height: 16px;
//
// /* Utility styles/label-01
//
// This is a multipurpose type style that can be used for field labels in components, error messages, and captions. It should not be used for body copy.
// */
// font-family: 'PP Telegraf';
// font-style: normal;
// font-weight: 400;
// font-size: 12px;
// line-height: 16px;
// /* identical to box height, or 133% */
// display: flex;
// align-items: center;
// letter-spacing: 0.32px;
//
// color: #1A1A1D;
//
//
// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;
