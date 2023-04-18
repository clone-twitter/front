import React from "react";

interface Props {
  children: React.ReactNode;
}

const SideColumn = ({children}: Props) => {
  return <div className="side_column">{children}</div>;
};

export default SideColumn;

