import "./App.css";

import { useState } from "react";

import Modal from "./Modals/Modal";
// import EditPersonalInfo from "./Modals/EditPersonalInfo";
// import { UserCarousel } from "./Slider/UserCarousel";
import Agreement from "./Modals/Agreement";
import SignUp from "./Modals/SignUp";
import LogIn from "./Modals/LogIn";
// import Confirmation from "./Modals/Confirmation";
import Order from "./Modals/Order";
import Showcase from "./components/Showcase/Showcase";
import Slider from "./components/Slider/Slider";

function App() {
  const [modal, setModal] = useState(true);
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
        {/* <EditPersonalInfo /> */}
        <LogIn active={!active} />
        {/* <Order /> */}
        {/* <Confirmation active={active}  /> */}
        {/* <SignUp active={active} /> */}
        {/* <Agreement /> */}
      </Modal>

      <Showcase
        clickFn={() => {
          setModal(true);
        }}
      />
      <Slider />
    </>
  );
}

export default App;
