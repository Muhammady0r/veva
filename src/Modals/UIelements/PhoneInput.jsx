import { useState } from "react";
import styles from "./phoneInput.module.css";

// eslint-disable-next-line react/prop-types
function PhoneInput() {
  const [phone, setPhone] = useState("");
  const [lastKeyword, setLastKeyword] = useState("");

  if (phone.length == 2 && lastKeyword !== "Backspace") {
    setPhone(phone + " ");
  } else if (phone.length == 6 && lastKeyword !== "Backspace") {
    setPhone(phone + "-");
  } else if (phone.length == 9 && lastKeyword !== "Backspace") {
    setPhone(phone + "-");
  } else {
    phone;
  }

  return (
    <div className="w-full text-start flex">
      <input
        type="text"
        disabled
        value={"+998"}
        className="font-light leading-[1.34] text-[18px] w-[68px] rounded-s-[10px] appearance-none bg-[#f2f4f7] pl-[15px] py-[14px]"
      />
      <input
        type="tel"
        className={`font-light leading-[1.34] text-[18px] grow-[1] rounded-e-[10px] appearance-none outline-none bg-[#f2f4f7] pr-[15px] py-[14px] ${styles.removeArrow}`}
        placeholder="00 000-00-00"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
        onKeyDown={(e) => setLastKeyword(e.key)}
        value={phone}
        maxLength={12}
      />
    </div>
  );
}

export default PhoneInput;
