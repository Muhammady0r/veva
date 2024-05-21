import React from "react";
import MyCart from "./MyCart/MyCart";
import Table from "./Table/Table";
import { Information } from "./Information/Information";
import TableMessage from "./TableMessages/TableMessage";
import Tabs from "./Tabs";

const ProfilePage = () => {
  return (
    <div className="container">
      <Tabs
        tabs={[
          "Ваша корзина",
          "История заказов",
          "Личная информация",
          "Оповещения",
        ]}
        nots={[1, 24, null, 7]}
        components={[
          <MyCart />,
          <Table />,
          <Information />,
          <TableMessage />,
        ]}
      />
    </div>
  );
};

export default ProfilePage;
