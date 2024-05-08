import checked from "/src/assets/imgs/checked.svg";
function Order({ count, time, pay }) {
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
            {count} штук(и)
          </span>
        </li>
        <li className="py-[11.5px] px-[20px] bg-[#f2f4f7]">
          <span className="inline-block font-light text-[clamp(14px,3vw,18px)] w-[clamp(110px,30vw,141px)] mr-[17px]">
            Время доставки:
          </span>
          <span className="font-bold text-[clamp(14px,3.4vw,18px)]">
            {!time ? "Днем с 10:00-15:00" : "К вечеру 16:00-20:00"}
          </span>
        </li>
        <li className="py-[11.5px] px-[20px]">
          <span className="inline-block font-light text-[clamp(14px,3vw,18px)] w-[clamp(110px,30vw,141px)] mr-[17px]">
            Форма оплаты:
          </span>
          <span className="font-bold text-[clamp(14px,3.4vw,18px)]">
            {pay == 1 ? "Наличными" : "Карта"}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Order;
