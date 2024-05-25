import React, { useEffect, useState } from "react";

import bottle from "/src/assets/imgs/bottle2.svg";

const ProductCard = ({ setCount, setTotalPrice }) => {
  const one = 15000;
  const [count, setCount2] = useState(3);

  function formatCurency(num) {
    return (
      `${num.toLocaleString("us-US", {
        style: "currency",
        currency: "UZS",
      })}`
        // .replace("UZS", "")
        .replaceAll(",00", "")
    );
    // .replaceAll(",", " ")
    // .slice(1);
  }

  useEffect(() => {
    setTotalPrice(one * count);
    setCount(count);
  }, [count]);

  return (
    <div className="card">
      <img src={bottle} alt="" />
      <div>
        <h3>Вода в бутилированной бутылке</h3>
        <div>
          <div className="count">
            <button
              onClick={() => {
                setCount2(count > 1 ? count - 1 : count);
              }}
              className="px-1"
            >
              {"<"}
            </button>
            <p>{count}</p>
            <button
              onClick={() => {
                setCount2(count + 1);
              }}
              className="px-1"
            >
              {">"}
            </button>
          </div>
          <div className="price">
            <p>Стоимость за 1 единицу:</p>
            <h4>{formatCurency(one)}</h4>
          </div>
          <div className="full-price">
            <p>Итоговая стоимость:</p>
            <h4>{formatCurency(one * count)}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
