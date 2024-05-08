import React from "react";

import unionIMG from "/src/assets/imgs/Union.png";

const Union = ({ className }) => {
  return (
    <div
      className={`relative z-[2] grid grid-cols-2 bg-transparent w-full -translate-y-5 max-[1144px]:-translate-y-4 max-[920px]:-translate-y-3 max-md:-translate-y-4 max-md:grid-cols-1 max-[460px]:-translate-y-3 ${className}`}
    >
      <img
        src={unionIMG}
        alt=""
        className="scale-x-[1.025] scale-y-150 max-[360px]:scale-y-[1.75] max-[360px]:scale-x-125"
      />
      <img
        src={unionIMG}
        alt=""
        className="scale-x-[1.025] scale-y-150 max-md:hidden"
      />
    </div>
  );
};

export default Union;
