import checked from "../assets/checked.svg";
function Order() {
  return (
    <div>
      <div className="text-center">
        <img className="block min-w-[5px] mx-auto" src={checked} alt="logo" />
        <h4 className="text-[clamp(24px,4.6vw,32px)] font-light mt-6 mb-[30px]">
          Спасибо, Ваша заявка принята!
        </h4>
      </div>
      <ul>
        <li className="py-[11.5px] px-[20px] bg-[#f2f4f7]">
          <span className="inline-block font-light text-[clamp(14px,3vw,18px)] w-[clamp(110px,30vw,141px)] mr-[17px]">
            Вы заказали:
          </span>
          <span className="font-bold text-[clamp(14px,3.4vw,18px)]">
            Бутилированую воду
          </span>
        </li>
        <li className="py-[11.5px] px-[20px]">
          <span className="inline-block font-light text-[clamp(14px,3vw,18px)] w-[clamp(110px,30vw,141px)] mr-[17px]">
            Кол-во:
          </span>
          <span className="font-bold text-[clamp(14px,3.4vw,18px)]">
            3 штуки
          </span>
        </li>
        <li className="py-[11.5px] px-[20px] bg-[#f2f4f7]">
          <span className="inline-block font-light text-[clamp(14px,3vw,18px)] w-[clamp(110px,30vw,141px)] mr-[17px]">
            Время доставки:
          </span>
          <span className="font-bold text-[clamp(14px,3.4vw,18px)]">
            к вечеру 16:00-20:00
          </span>
        </li>
        <li className="py-[11.5px] px-[20px]">
          <span className="inline-block font-light text-[clamp(14px,3vw,18px)] w-[clamp(110px,30vw,141px)] mr-[17px]">
            Форма оплаты:
          </span>
          <span className="font-bold text-[clamp(14px,3.4vw,18px)]">
            Наличными
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Order;
