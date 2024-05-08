import React from "react";
import Tab from "./Tabs/Tabs";
import TabsMobile from "./Tabs/TabsMobile";

const Tabs = ({ tabs, nots, components }) => {
  return (
    <>
      <Tab tabs={tabs} nots={nots} components={components} />
      <TabsMobile tabs={tabs} components={components} />
    </>
  );
};

export default Tabs;
