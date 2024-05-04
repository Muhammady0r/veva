import React, { useEffect, useState } from "react";

const ProductCard = ({ totalPrice, setTotalPrice }) => {
  const one = 15000;
  const [count, setCount] = useState(3);

  function formatCurency(num) {
    return `${num.toLocaleString("us-US", {
      style: "currency",
      currency: "UZS",
    })}`
      .replace("UZS", "")
      .replaceAll(".00", "")
      .replaceAll(",", " ")
      .slice(1);
  }

  useEffect(() => {
    setTotalPrice(one * count);
  }, [count]);

  return (
    <div className="card">
      <img src="/src/assets/bottle.svg" alt="" />
      <div>
        <h3>Вода в бутилированной бутылке</h3>
        <div>
          <div className="count">
            <button
              onClick={() => {
                setCount(count > 1 ? count - 1 : count);
              }}
              className="px-1"
            >
              {"<"}
            </button>
            <p>{count}</p>
            <button
              onClick={() => {
                setCount(count + 1);
              }}
              className="px-1"
            >
              {">"}
            </button>
          </div>
          <div className="price">
            <p>Стоимость за 1 единицу:</p>
            <h4>{formatCurency(one)} сум</h4>
          </div>
          <div className="full-price">
            <p>Итоговая стоимость:</p>
            <h4>{formatCurency(one * count)} сум</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
