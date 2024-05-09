import { useEffect, useState } from "react";
import Button from "./UIelements/Button";
import CodeInput from "./UIelements/CodeInput";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Confirmation({ closeFn, className }) {
  // return active ? <CodeInput /> : <CodeInput />;
  const [active, setActive] = useState(false);
  const [time, setTime] = useState(10);
  const nav = useNavigate();

  useEffect(() => {
    if (active == false && time > 1) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }

    if (time == 1) {
      setTimeout(() => {
        setActive(true);
      }, 1000);
    }
  }, [time]);

  return (
    <div className={className}>
      <h4 className="font-bold text-[clamp(24px,2vw,32px)] text-start">
        Введите код из СМС
      </h4>
      <div className="mt-[24px] mb-[30px]">
        <CodeInput />
      </div>
      <Button
        onClick={() => {
          nav("/profile");
          closeFn();
        }}
      >
        Войти в кабинет
      </Button>
      <p className="block text-center w-full text-[18px] font-light text-[#98a2b3] underline-offset-[5px] decoration-1 underline mt-5">
        <button
          className={`underline ${
            active ? "" : "cursor-not-allowed opacity-50"
          }`}
          onClick={() => {
            setActive(false);
            setTime(10);
          }}
        >
          Повторить отправку кода {active ? "" : `(${time} сек)`}
        </button>
      </p>
    </div>
  );
}

export default Confirmation;
