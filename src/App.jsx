import "./App.css";
import { Quality } from "./assets/components/Quality";
import { Footer } from "./assets/components/Footer";

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
import Header from "./components/Header";

function App() {
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
        {/* <EditPersonalInfo /> */}
        <LogIn active={!active} />
        {/* <Order /> */}
        {/* <Confirmation active={active}  /> */}
        {/* <SignUp active={active} /> */}
        {/* <Agreement /> */}
      </Modal>

      <Header />
      <Showcase
        clickFn={() => {
          setModal(true);
        }}
      />
      <Slider />

      <Quality />
      <div className="container">
        <Footer />
      </div>
    </>
  );
}

export default App;
