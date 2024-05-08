import React from "react";
import TableDesktop from "./TableDesktop/TableDesktop";
import TableMobile from "./TableMobile/TableMobile";

const TableMessage = () => {
  return (
    <>
      <TableDesktop />
      <TableMobile />
    </>
  );
};

export default TableMessage;
