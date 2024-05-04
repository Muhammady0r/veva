import EditPersonalInfo from "@/Modals/EditPersonalInfo";
import { useState } from "react";

// const personInfo = { fullname: '', phoneNumber: ['',''], address:[] };

function PersonalInfo() {
  const [setActive] = useState(false);
  const [state, setState] = useState({
    fullName: "",
    phoneNumber1: "",
    phoneNumber2: "",
    address1: "",
    address2: "",
  });
  return (
    <>
      <EditPersonalInfo
        setActive={setActive}
        state={state}
        setState={setState}
      />
      <div className="">
        <h4 className="text-[clamp(24px,4.75vw,32px)] font-bold">
          Личная информация
        </h4>
        <ul className="my-[50px]">
          <li>
            <p className="text-[clamp(14px,2.67vw,18px)] font-light">
              Фамилия и имя:
            </p>
            <span className="text-[clamp(14px,2.67vw,18px)] font-bold">
              {state.fullName}
            </span>
          </li>
          <li>
            <p className="text-[clamp(14px,2.67vw,18px)] font-light">
              Номер телефона:
            </p>
            <span className="text-[clamp(14px,2.67vw,18px)] font-bold">
              {state.phoneNumber1}
              <br />
              {state.phoneNumber2}
            </span>
          </li>
          <li>
            <p className="text-[clamp(14px,2.67vw,18px)] font-light">
              Ваш адрес №1:
            </p>
            <span className="text-[clamp(14px,2.67vw,18px)] font-bold">
              {state.address1}
            </span>
          </li>
          <li>
            <p className="text-[clamp(14px,2.67vw,18px)] font-light">
              Ваш адрес №2:
            </p>
            <span className="text-[clamp(14px,2.67vw,18px)] font-bold">
              {state.address2}
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default PersonalInfo;
