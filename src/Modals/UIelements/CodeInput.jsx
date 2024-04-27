import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Confirmation() {
  const [phone, setPhone] = useState("");
  const [lastKeyword, setLastKeyword] = useState("");

  if (phone.length == 3 && lastKeyword !== "Backspace") {
    setPhone(phone + "-");
  }

  return (
    <>
      <input
        type="text"
        className="font-light leading-[1.34] text-[18px] w-full rounded-[10px] appearance-none outline-none bg-[#f2f4f7] px-[15px] py-[14px]"
        placeholder="000-000"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
        onKeyDown={(e) => setLastKeyword(e.key)}
        value={phone}
        maxLength={7}
      />
    </>
  );
}

export default Confirmation;
