import React, { useState } from "react";
import "./TableMobile.css";

const TableMobile = () => {
  const data = [
    {
      id: 1,
      type: "Вода в бутилированной бутылке",
      order: "5/8/2023",
      delivery: "22/7/2023",
      status: <p className="pending">В процессе</p>,
      quantity: 88,
      cost: "15 000 сум",
      allCost: "1 320 000 сум",
      cancel: "Отменить заказ",
    },
    {
      id: 2,
      type: "Вода в бутилированной бутылке",
      order: "12/11/2023",
      delivery: "26/10/2023",
      status: <p className="pending">В процессе</p>,
      quantity: 66,
      cost: "15 000 сум",
      allCost: "990 000 сум",
      cancel: `Отменить заказ`,
    },
    {
      id: 3,
      type: "Вода в бутилированной бутылке",
      order: "3/12/2023",
      delivery: "15/8/2023",
      status: <p className="delivered">Доставлено</p>,
      quantity: 97,
      cost: "15 000 сум",
      allCost: "1 455 000 сум",
      cancel: `Повторить заказ`,
    },
    {
      id: 4,
      type: "Вода в бутилированной бутылке",
      order: "20/11/2023",
      delivery: "16/4/2024",
      status: <p className="pending">В процессе</p>,
      quantity: 2,
      cost: "15 000 сум",
      allCost: "30 000 сум",
      cancel: `Отменить заказ`,
    },
    {
      id: 5,
      type: "Вода в бутилированной бутылке",
      order: "15/4/2024",
      delivery: "23/5/2023",
      status: <p className="pending">В процессе</p>,
      quantity: 79,
      cost: "15 000 сум",
      allCost: "1 185 000 сум",
      cancel: `Отменить заказ`,
    },
    {
      id: 6,
      type: "Вода в бутилированной бутылке",
      order: "21/5/2023",
      delivery: "24/7/2023",
      status: <p className="pending">В процессе</p>,
      quantity: 18,
      cost: "15 000 сум",
      allCost: "  270 000 сум",
      cancel: `Отменить заказ`,
    },
    {
      id: 7,
      type: "Вода в бутилированной бутылке",
      order: "9/7/2023",
      delivery: "3/10/2023",
      status: <p className="pending">В процессе</p>,
      quantity: 24,
      cost: "15 000 сум",
      allCost: "  360 000 сум",
      cancel: `Отменить заказ`,
    },
    {
      id: 8,
      type: "Вода в бутилированной бутылке",
      order: "26/2/2024",
      delivery: "5/9/2023",
      status: <p className="delivered">Доставлено</p>,
      quantity: 72,
      cost: "15 000 сум",
      allCost: "1 080 000 сум",
      cancel: `Повторить заказ`,
    },
    {
      id: 9,
      type: "Вода в бутилированной бутылке",
      order: "3/9/2023",
      delivery: "20/12/2023",
      status: <p className="pending">В процессе</p>,
      quantity: 65,
      cost: "15 000 сум",
      allCost: "  975 000 сум",
      cancel: `Отменить заказ`,
    },
    {
      id: 10,
      type: "Вода в бутилированной бутылке",
      order: "29/12/2023",
      delivery: "31/1/2024",
      status: <p className="delivered">Доставлено</p>,
      quantity: 99,
      cost: "15 000 сум",
      allCost: "1 485 000 сум",
      cancel: `Повторить заказ`,
    },
    {
      id: 11,
      type: "Вода в бутилированной бутылке",
      order: "3/10/2023",
      delivery: "6/7/2023",
      status: <p className="notDelivered">Не доставлено</p>,
      quantity: 70,
      cost: "15 000 сум",
      allCost: "1 050 000 сум",
      cancel: `Повторить заказ`,
    },
    {
      id: 12,
      type: "Вода в бутилированной бутылке",
      order: "22/8/2023",
      delivery: "11/2/2024",
      status: <p className="pending">В процессе</p>,
      quantity: 69,
      cost: "15 000 сум",
      allCost: "1 035 000 сум",
      cancel: `Отменить заказ`,
    },
    {
      id: 13,
      type: "Вода в бутилированной бутылке",
      order: "9/7/2023",
      delivery: "31/12/2023",
      status: <p className="delivered">Доставлено</p>,
      quantity: 83,
      cost: "15 000 сум",
      allCost: "1 245 000 сум",
      cancel: `Повторить заказ`,
    },
    {
      id: 14,
      type: "Вода в бутилированной бутылке",
      order: "14/1/2024",
      delivery: "6/4/2024",
      status: <p className="delivered">Доставлено</p>,
      quantity: 20,
      cost: "15 000 сум",
      allCost: "  300 000 сум",
      cancel: `Повторить заказ`,
    },
    {
      id: 15,
      type: "Вода в бутилированной бутылке",
      order: "3/12/2023",
      delivery: "18/3/2024",
      status: <p className="notDelivered">Не доставлено</p>,
      quantity: 62,
      cost: "15 000 сум",
      allCost: "  930 000 сум",
      cancel: `Повторить заказ`,
    },
    {
      id: 16,
      type: "Вода в бутилированной бутылке",
      order: "6/4/2024",
      delivery: "13/5/2023",
      status: <p className="pending">В процессе</p>,
      quantity: 30,
      cost: "15 000 сум",
      allCost: "  450 000 сум",
      cancel: `Отменить заказ`,
    },
    {
      id: 17,
      type: "Вода в бутилированной бутылке",
      order: "31/10/2023",
      delivery: "2/5/2023",
      status: <p className="notDelivered">Не доставлено</p>,
      quantity: 82,
      cost: "15 000 сум",
      allCost: "1 230 000 сум",
      cancel: `Повторить заказ`,
    },
    {
      id: 18,
      type: "Вода в бутилированной бутылке",
      order: "22/3/2024",
      delivery: "26/4/2024",
      status: <p className="notDelivered">Не доставлено</p>,
      quantity: 37,
      cost: "15 000 сум",
      allCost: "  555 000 сум",
      cancel: `Повторить заказ`,
    },
    {
      id: 19,
      type: "Вода в бутилированной бутылке",
      order: "16/7/2023",
      delivery: "28/7/2023",
      status: <p className="pending">В процессе</p>,
      quantity: 54,
      cost: "15 000 сум",
      allCost: "  810 000 сум",
      cancel: `Отменить заказ`,
    },
    {
      id: 20,
      type: "Вода в бутилированной бутылке",
      order: "29/3/2024",
      delivery: "24/7/2023",
      status: <p className="pending">В процессе</p>,
      quantity: 30,
      cost: "15 000 сум",
      allCost: "  450 000 сум",
      cancel: `Отменить заказ`,
    },
    {
      id: 21,
      type: "Вода в бутилированной бутылке",
      order: "12/6/2023",
      delivery: "22/3/2024",
      status: <p className="notDelivered">Не доставлено</p>,
      quantity: 85,
      cost: "15 000 сум",
      allCost: "1 275 000 сум",
      cancel: `Повторить заказ`,
    },
    {
      id: 22,
      type: "Вода в бутилированной бутылке",
      order: "3/10/2023",
      delivery: "17/3/2024",
      status: <p className="pending">В процессе</p>,
      quantity: 91,
      cost: "15 000 сум",
      allCost: "1 365 000 сум",
      cancel: `Отменить заказ`,
    },
    {
      id: 23,
      type: "Вода в бутилированной бутылке",
      order: "9/10/2023",
      delivery: "3/11/2023",
      status: <p className="delivered">Доставлено</p>,
      quantity: 60,
      cost: "15 000 сум",
      allCost: "  900 000 сум",
      cancel: `Повторить заказ`,
    },
    {
      id: 24,
      type: "Вода в бутилированной бутылке",
      order: "27/12/2023",
      delivery: "4/5/2023",
      status: <p className="pending">В процессе</p>,
      quantity: 96,
      cost: "15 000 сум",
      allCost: "1 440 000 сум",
      cancel: `Отменить заказ`,
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
      return el.order.toLocaleLowerCase().includes(searchInput);
    }
  });

  return (
    <div className="mob-table">
      <h1>История заказов</h1>
      <input
        placeholder="Найти"
        id="search"
        name="search"
        onChange={handleChange}
        value={searchInput}
      />
      <div className="main">
        {filteredData.slice(0, vis).map((e, i) => (
          <div className="card" key={i}>
            <div className="top">
              <div className="dates">
                <div className="order">
                  <span>Дата заказа:</span>
                  <br />
                  {e.order}
                </div>
                <div className="delivery">
                  <span>Дата доставки:</span>
                  <br />
                  {e.delivery}
                </div>
              </div>
              {e.status}
            </div>
            <div className="center">
              <div className="type">
                <span>Вид товара:</span>
                <br />
                {e.type}
              </div>
              <div className="col">
                <div className="quantity">
                  <span>Кол-во:</span>
                  <br />
                  {e.quantity}
                </div>
                <div className="cost">
                  <span>Стоимость 1 единицы:</span>
                  <br />
                  {e.cost}
                </div>
              </div>
              <div className="allCost">
                <span>Сумма к оплате:</span>
                <p>{e.allCost}</p>
              </div>
            </div>
            <button className="cancel">{e.cancel}</button>
          </div>
        ))}
      </div>
      <button
        className={`more ${vis == 24 ? "moreNone" : ""}`}
        onClick={addMore}
      >
        Еще открыть
      </button>
    </div>
  );
};

export default TableMobile;
