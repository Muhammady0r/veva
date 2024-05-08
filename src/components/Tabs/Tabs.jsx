import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "./Tabs.css";

const TabDesk = ({ tabs, nots, components }) => {
  return (
    <div className="tabs">
      <Tabs defaultValue={0} className="w-full tab-component">
        <TabsList className={"bg-transparent m-0 p-0 tablist"}>
          {tabs.map((tab, i) => {
            return (
              <TabsTrigger value={i} key={i}>
                {tab}
                {nots[i] != null && (
                  <span className="rounded-full w-[20px] h-[20px]">
                    {nots[i]}
                  </span>
                )}
              </TabsTrigger>
            );
          })}
        </TabsList>
        <hr />
        {components.map((cmt, i) => {
          return (
            <TabsContent value={i} key={i}>
              {cmt}
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default TabDesk;
