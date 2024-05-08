import LogIn from "@/Modals/LogIn";
import Modal from "@/Modals/Modal";
import React, { useState } from "react";
import Showcase from "./Showcase/Showcase";
import Slider from "./Slider/Slider";
import { Quality } from "@/components/Quality";
import Order from "@/Modals/Order";

const HomePage = () => {
  const [modal, setModal] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <>
      <Modal
        active={active}
        setActive={setActive}
        height={"min"}
        pr={"5px"}
        opened={modal}
        setOpened={setModal}
      >
        <LogIn active={!active} />
      </Modal>
      <Showcase
        clickFn={() => {
          setModal(true);
        }}
      />
      <Slider className={"container mt-20"} />

      <Quality />
    </>
  );
};

export default HomePage;
