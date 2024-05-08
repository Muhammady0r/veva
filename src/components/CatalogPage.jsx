import React from "react";
import Tabs from "./Tabs";
import WaterCatalog from "./CatalogTabs/WaterCatalog";
import CullerCatalog from "./CatalogTabs/CullerCatalog";

const CatalogPage = () => {
  return (
    <div className="container">
      <h2 className="text-3xl font-bold mt-5 mb-12">Магазин товаров</h2>
      <Tabs
        tabs={["Бутилированная вода", "Помпа", "Кулер"]}
        nots={[1, 5, 5]}
        components={[<WaterCatalog />, "Помпа", <CullerCatalog />]}
      />
    </div>
  );
};

export default CatalogPage;
