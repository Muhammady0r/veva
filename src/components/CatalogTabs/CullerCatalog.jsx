import React from "react";
import CatalogCard from "../Card/Card";

const CullerCatalog = () => {
  return (
    <div className="grid grid-cols-4">
      <CatalogCard isCuller />
      <CatalogCard isCuller />
      <CatalogCard isCuller />
      <CatalogCard isCuller />
      <CatalogCard isCuller />
    </div>
  );
};

export default CullerCatalog;
