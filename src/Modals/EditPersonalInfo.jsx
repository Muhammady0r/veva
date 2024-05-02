/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from "react";
import plus from "../assets/plus.svg";
import PhoneInput from "./UIelements/PhoneInput";
import remove from "../assets/remove.svg";
import TextInput from "./UIelements/TextInput";
import styles from "./agreement.module.css";
import Button from "./UIelements/Button";

function EditPersonalInfo() {
  const [count, setCount] = useState(1);
  const [amount, setAmount] = useState(1);

  const handleIncrease = () => {
    setCount(count < 3 ? count + 1 : count);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleAdd = () => {
    setAmount(amount < 3 ? amount + 1 : amount);
  };

  const handleRemove = () => {
    setAmount(amount - 1);
  };

  return (
    <div className="w-[clamp(,,464px)]">
      <h4 className="font-bold text-[clamp(24px,2vw,32px)] text-start">
        Редактировать
      </h4>
      <TextInput placeholder={"Никифоров Михаил"} />
      {Array.from({ length: count }, (_, index) => (
        <div key={index} className="flex my-[15px]">
          <PhoneInput />
          {index + 1 === count ? (
            <button onClick={handleIncrease} className="ml-[15px]">
              <img src={plus} alt="" />
            </button>
          ) : (
            <button onClick={handleDecrease} className="ml-[15px]">
              <img src={remove} alt="" width="20" height="20" />
            </button>
          )}
        </div>
      ))}
      <div
        className={`overflow-y-auto max-h-[421px] -mr-2 pr-4 ${styles.scrollbar}`}
      >
        {Array.from({ length: amount }, (_, index) => (
          <div key={index}>
            <h5 className="text-lg font-bold">Ваш адрес №{index + 1}:</h5>
            <div className="my-[15px] flex">
              <TextInput placeholder={"г. Ташкент, улица Мукими, 166 ..."} />
              {index + 1 === amount ? (
                <button onClick={handleAdd} className="ml-[15px]">
                  <img src={plus} alt="" width="20" height="20" />
                </button>
              ) : (
                <button onClick={handleRemove} className="ml-[15px]">
                  <img src={remove} alt="" width="20" height="20" />
                </button>
              )}
            </div>
            {index > 0 ? (
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-6">
                  <TextInput placeholder={"Чиланзарский район"} />
                </div>
                <div className="col-span-2">
                  <TextInput placeholder={"Дом"} />
                </div>
                <div className="col-span-2">
                  <TextInput placeholder={"Подъезд"} />
                </div>
                <div className="col-span-2">
                  <TextInput placeholder={"Этаж"} />
                </div>
                <div className="col-span-3">
                  <TextInput placeholder={"Номер квартиры"} />
                </div>
                <div className="col-span-3">
                  <TextInput placeholder={"Код домофона"} />
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-[10px] mt-6 mb-[30px]">
        <input
          type="checkbox"
          className="w-6 h-6 bg-[#e4eaf3] border-0 outline-none rounded-[4px] cursor-pointer login__checkbox"
        />
        <p className="text-sm leading-[1.71] font-light">
          Я согласен на обработку персональных данных
        </p>
      </div>
      <Button>Сохранить</Button>
    </div>
  );
}

/* const editPhone = useRef();
const btn = useRef();
 */
/* useEffect(() => {
  function callback() {
    editPhone.current.insertAdjacentHTML("beforeend", `<${<PhoneInput}/>`);
    console.log("clicked");
  }
  btn.current.addEventListener("click", callback);

  // return () => btn.removeEventListener("click", callback);
}, []);
return (
  <div ref={editPhone}>
    <button ref={btn}>
      <img src={plus} alt="" />
    </button>
  </div>
); */
export default EditPersonalInfo;
