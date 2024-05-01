import "./App.css";
import Slider from "./Components/Slider/Slider";
// import Modal from "./Modals/Modal";
// import { UserCarousel } from "./Slider/UserCarousel";
import Modal from "./Modals/Modal";
// import Agreement from "./Modals/Agreement";
// import SignUp from "./Modals/SignUp";
// import LogIn from "./Modals/LogIn";
// import Confirmation from "./Modals/Confirmation";
import Order from "./Modals/Order";
import Showcase from "./components/Showcase/Showcase";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="absolute h-full w-full z-50">
        <Modal
          active={active}
          setActive={setActive}
          height={"min"}
          pr={"5px"}
        >
          {/* <LogIn active={active} /> */}
          <Order />
          {/* <Confirmation active={active}  /> */}
          {/* <SignUp active={active} /> */}
          {/* <Agreement /> */}
        </Modal>
      </div>

      <Showcase />
      <Slider />
    </>
  );
}

export default App;
