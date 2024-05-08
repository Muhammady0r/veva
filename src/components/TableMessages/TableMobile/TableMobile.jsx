import React, { useState } from "react";
import "./TableMobile.css";

const TableMobile = () => {
  const data = [
    {
      id: <p className="dNew">1</p>,
      date: <p className="dNew">3/17/2024</p>,
      status: <p className="new">Новое</p>,
      text: <p className="dNew">Вода была доставлена и передана заказчику</p>,
      new: "новое",
    },
    {
      id: <p className="dNew">2</p>,
      date: <p className="dNew">4/16/2024</p>,
      status: <p className="new">Новое</p>,
      text: <p className="dNew">Вода была доставлена и передана заказчику</p>,
      new: "новое",
    },
    {
      id: <p className="dNew">3</p>,
      date: <p className="dNew">1/20/2024</p>,
      status: <p className="new">Новое</p>,
      text: <p className="dNew">Вода была доставлена и передана заказчику</p>,
      new: "новое",
    },
    {
      id: <p className="dNew">4</p>,
      date: <p className="dNew">1/24/2024</p>,
      status: <p className="new">Новое</p>,
      text: <p className="dNew">Вода была доставлена и передана заказчику</p>,
      new: "новое",
    },
    {
      id: <p className="dNew">5</p>,
      date: <p className="dNew">4/11/2024</p>,
      status: <p className="new">Новое</p>,
      text: <p className="dNew">Вода была доставлена и передана заказчику</p>,
      new: "новое",
    },
    {
      id: <p className="dNew">6</p>,
      date: <p className="dNew">3/24/2024</p>,
      status: <p className="new">Новое</p>,
      text: <p className="dNew">Вода была доставлена и передана заказчику</p>,
      new: "новое",
    },
    {
      id: <p className="dNew">7</p>,
      date: <p className="dNew">1/11/2024</p>,
      status: <p className="new">Новое</p>,
      text: <p className="dNew">Вода была доставлена и передана заказчику</p>,
      new: "новое",
    },
    {
      id: 8,
      date: "3/26/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
      new: "прочитано",
    },
    {
      id: 9,
      date: "1/12/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
      new: "прочитано",
    },
    {
      id: 10,
      date: "2/8/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
      new: "прочитано",
    },
    {
      id: 11,
      date: "1/27/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
      new: "прочитано",
    },
    {
      id: 12,
      date: "2/1/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
      new: "прочитано",
    },
    {
      id: 13,
      date: "4/7/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
      new: "прочитано",
    },
    {
      id: 14,
      date: "2/3/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
      new: "прочитано",
    },
    {
      id: 15,
      date: "2/21/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
      new: "прочитано",
    },
    {
      id: 16,
      date: "1/31/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
      new: "прочитано",
    },
    {
      id: 17,
      date: "2/10/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
      new: "прочитано",
    },
    {
      id: 18,
      date: "3/1/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
      new: "прочитано",
    },
    {
      id: 19,
      date: "3/26/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
      new: "прочитано",
    },
    {
      id: 20,
      date: "1/31/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
      new: "прочитано",
    },
    {
      id: 21,
      date: "2/29/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
      new: "прочитано",
    },
    {
      id: 22,
      date: "2/7/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
      new: "прочитано",
    },
    {
      id: 23,
      date: "2/9/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
      new: "прочитано",
    },
    {
      id: 24,
      date: "5/1/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
      new: "прочитано",
    },
  ];
  const [searchInput, setSearchInput] = useState("");
  const [vis, setVis] = useState(3);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value.toLowerCase());
  };

  const addMore = () => {
    setVis((prev) => prev + 3);
  };

  const filteredData = data.filter((el) => {
    //if no input the return the original
    if (searchInput === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      console.log(el);
      return el.new.toLocaleLowerCase().includes(searchInput);
    }
  });

  return (
    <div className="mob-table">
      <h1>Оповещения</h1>
      <input
        placeholder="Найти"
        id="search"
        name="search"
        onChange={handleChange}
        value={searchInput}
      />
      <div className="main">
        {filteredData.slice(0, vis).map((e, i) => (
          <div className={`card ${e.new}`} key={i}>
            <div className="top">
              <div className="dates">
                <div className="order">
                  <span>Дата:</span>
                  <br />
                  {e.date}
                </div>
                {e.status}
              </div>
            </div>
            <div className="center">
              <div className="type">
                <span>Текст оповещения:</span>
                <br />
                {e.text}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className={`more ${vis == 24 ? "moreNone" : ""}`} onClick={addMore}>
        Еще открыть
      </button>
    </div>
  );
};

export default TableMobile;
