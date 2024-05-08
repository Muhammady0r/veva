import React from "react";
import TableDesktop from "./TableDesktop/TableDesktop";
import TableMobile from "./TableMobile/TableMobile";

const Table = () => {
  return (
    <div>
      <TableDesktop />
      <TableMobile />
    </div>
  );
};

export default Table;
