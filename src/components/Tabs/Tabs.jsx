import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "./Tabs.css";
import Table from "../Table/Table";
import TableMessage from "../TableMessages/TableMessage";

const Tab = () => {
  return (
    <div className="tabs">
      <Tabs defaultValue="cart" className="w-full tab-component">
        <TabsList className={"bg-transparent m-0 p-0 tablist"}>
          <TabsTrigger value="cart">
            Ваша корзина{" "}
            <span className="rounded-full w-[20px] h-[20px]">3</span>
          </TabsTrigger>
          <TabsTrigger value="history">
            История заказов{" "}
            <span className="rounded-full w-[45px] h-[20px]">1200</span>
          </TabsTrigger>
          <TabsTrigger value="info">Личная информация</TabsTrigger>
          <TabsTrigger value="notifications">
            Оповещения <span className="rounded-full w-[20px] h-[20px]">4</span>
          </TabsTrigger>
        </TabsList>
        <hr />
        <TabsContent value="cart">Cart Info</TabsContent>
        <TabsContent value="history">
          <Table />
        </TabsContent>
        <TabsContent value="info">Change your password here.</TabsContent>
        <TabsContent value="notifications">
          <TableMessage />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Tab;
