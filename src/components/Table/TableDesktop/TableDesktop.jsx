import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/md-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "./Table.css";
import { Slider } from "primereact/slider";
import { Tooltip } from "primereact/tooltip";

const TableDesktop = () => {
  const [first, setFirst] = useState([0, 0, 0]);
  const [rows, setRows] = useState([10, 10, 10]);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

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

  const template3 = {
    layout: "PrevPageLink PageLinks NextPageLink",
    // CurrentPageReport: (options) => {
    //   return (
    //     <span
    //       style={{
    //         color: "var(--text-color)",
    //         userSelect: "none",
    //         width: "120px",
    //         textAlign: "center",
    //       }}
    //     >
    //       {options.first} - {options.last} of {options.totalRecords}
    //     </span>
    //   );
    // },
  };

  return (
    <div className="container mt-[50px]">
      <div className="top">
        <h1>История заказов</h1>
        <InputText
          placeholder="Найти"
          id="search"
          name="search"
          onChange={(e) =>
            setFilters({
              global: {
                value: e.target.value,
                matchMode: FilterMatchMode.CONTAINS,
              },
            })
          }
        />
      </div>
      <DataTable
        value={data}
        filters={filters}
        paginator
        paginatorTemplate={template3}
        // rows={12}
        showGridlines
        first={first[2]}
        rows={rows[2]}
        className="justify-content-start"
        // rowsPerPageOptions={[1, 2, 3]}
        // totalRecords={14}
      >
        <Column field="id" header="№"></Column>
        <Column field="order" header="Дата заказа"></Column>
        <Column field="delivery" header="Дата доставки"></Column>
        <Column field="status" header="Статус доставки"></Column>
        <Column field="type" header="Вид товара"></Column>
        <Column field="quantity" header="Кол-во"></Column>
        <Column field="cost" header="Стоимость 1 единицы"></Column>
        <Column field="allCost" header="Сумма к оплате"></Column>
        <Column field="cancel" header="Действие" className="cancel"></Column>
      </DataTable>
    </div>
  );
};

export default TableDesktop;
