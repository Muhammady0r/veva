import React, { useState } from "react";
import "./TabsMobile.css";

const TabsMobile = ({ tabs, components }) => {
  const [component, setComponent] = useState(components[0]);

  const changeSelectOptionHandler = (event) => {
    setComponent(components[event.target.value]);
  };

  return (
    <div className="mob-tabs-select">
      <form>
        <div className="select">
          <select onChange={changeSelectOptionHandler}>
            {tabs.map((tab, i) => {
              return (
                <option value={i} key={i}>
                  {tab}
                </option>
              );
            })}
          </select>
        </div>
      </form>
      {component}
    </div>
  );
};

export default TabsMobile;
