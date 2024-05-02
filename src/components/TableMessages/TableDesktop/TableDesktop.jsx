import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/md-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "./TableDesktop.css";
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
      id: <p className="dNew">1</p>,
      date: <p className="dNew">3/17/2024</p>,
      status: <p className="new">Новое</p>,
      text: <p className="dNew">Вода была доставлена и передана заказчику</p>,
    },
    {
      id: <p className="dNew">2</p>,
      date: <p className="dNew">4/16/2024</p>,
      status: <p className="new">Новое</p>,
      text: <p className="dNew">Вода была доставлена и передана заказчику</p>,
    },
    {
      id: <p className="dNew">3</p>,
      date: <p className="dNew">1/20/2024</p>,
      status: <p className="new">Новое</p>,
      text: <p className="dNew">Вода была доставлена и передана заказчику</p>,
    },
    {
      id: <p className="dNew">4</p>,
      date: <p className="dNew">1/24/2024</p>,
      status: <p className="new">Новое</p>,
      text: <p className="dNew">Вода была доставлена и передана заказчику</p>,
    },
    {
      id: <p className="dNew">5</p>,
      date: <p className="dNew">4/11/2024</p>,
      status: <p className="new">Новое</p>,
      text: <p className="dNew">Вода была доставлена и передана заказчику</p>,
    },
    {
      id: <p className="dNew">6</p>,
      date: <p className="dNew">3/24/2024</p>,
      status: <p className="new">Новое</p>,
      text: <p className="dNew">Вода была доставлена и передана заказчику</p>,
    },
    {
      id: <p className="dNew">7</p>,
      date: <p className="dNew">1/11/2024</p>,
      status: <p className="new">Новое</p>,
      text: <p className="dNew">Вода была доставлена и передана заказчику</p>,
    },
    {
      id: 8,
      date: "3/26/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
    },
    {
      id: 9,
      date: "1/12/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
    },
    {
      id: 10,
      date: "2/8/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
    },
    {
      id: 11,
      date: "1/27/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
    },
    {
      id: 12,
      date: "2/1/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
    },
    {
      id: 13,
      date: "4/7/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
    },
    {
      id: 14,
      date: "2/3/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
    },
    {
      id: 15,
      date: "2/21/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
    },
    {
      id: 16,
      date: "1/31/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
    },
    {
      id: 17,
      date: "2/10/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
    },
    {
      id: 18,
      date: "3/1/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
    },
    {
      id: 19,
      date: "3/26/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
    },
    {
      id: 20,
      date: "1/31/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
    },
    {
      id: 21,
      date: "2/29/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
    },
    {
      id: 22,
      date: "2/7/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
    },
    {
      id: 23,
      date: "2/9/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
    },
    {
      id: 24,
      date: "5/1/2024",
      status: <p className="old">Прочитано</p>,
      text: "Вода была доставлена и передана заказчику",
    },
  ];

  const template3 = {
    layout: "PrevPageLink PageLinks NextPageLink",
  };

  return (
    <div className="container mt-[50px]">
      <div className="top">
        <h1>Оповещения</h1>
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
        <Column field="date" header="Дата"></Column>
        <Column field="status" header="Статус "></Column>
        <Column field="text" header="Текст оповещения"></Column>
      </DataTable>
    </div>
  );
};

export default TableDesktop;
