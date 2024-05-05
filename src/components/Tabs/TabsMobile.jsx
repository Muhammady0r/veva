import React, { useEffect, useState } from "react";
import "./TabsMobile.css";
import Table from "../Table/Table";
import TableMessage from "../TableMessages/TableMessage";

const TabsMobile = () => {
  const [selected, setSelected] = useState("history");
  const [component, setComponent] = useState("");

  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };

  useEffect(() => {
    if (selected === "cart") setComponent("Cart");
    else if (selected === "history") setComponent(<Table />);
    else if (selected === "info") setComponent("Info");
    else setComponent(<TableMessage />);
  }, [selected, setSelected]);

  return (
    <div
      className="mob-tabs-select"
      style={{
        padding: "16px",
        margin: "16px",
      }}
    >
      <form>
        <div className="select">
          <select onChange={changeSelectOptionHandler}>
            <option value={"history"}>История заказов</option>
            <option value={"cart"}>Ваша корзина</option>
            <option value={"info"}>Личная информация</option>
            <option value={"notifications"}>Оповещения</option>
          </select>
        </div>
      </form>
      {component}
    </div>
  );
};

export default TabsMobile;
