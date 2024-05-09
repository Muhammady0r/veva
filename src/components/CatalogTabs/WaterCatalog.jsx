import React from "react";
import CatalogCard from "../Card/Card";

const WaterCatalog = () => {
  return (
    <div className="grid gap-7 grid-cols-4 max-[1330px]:grid-cols-3 max-[1045px]:grid-cols-2">
      <CatalogCard />
      <CatalogCard />
      <CatalogCard />
      <CatalogCard />
      <CatalogCard />
    </div>
  );
};

export default WaterCatalog;
