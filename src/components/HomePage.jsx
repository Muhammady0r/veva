import React, { useState } from "react";
import Showcase from "./Showcase/Showcase";
import Slider from "./Slider/Slider";
import { Quality } from "@/components/Quality";

const HomePage = ({ setLogin }) => {
  return (
    <>
      <Showcase
        clickFn={() => {
          setLogin(true);
        }}
      />
      <Slider className={"container mt-20"} />

      <Quality />
    </>
  );
};

export default HomePage;
