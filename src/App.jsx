import "./App.css";
// import { UserCarousel } from "./Slider/UserCarousel";
import Modal from "./Modals/Modal";
// import Agreement from "./Modals/Agreement";
// import SignUp from "./Modals/SignUp";
// import LogIn from "./Modals/LogIn";
// import Confirmation from "./Modals/Confirmation";
import Order from "./Modals/Order";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(false);

  return (
    <div className="h-full w-full">
      <Modal
        active={active}
        setActive={setActive}
        agreement
        height={"min"}
        pr={"5px"}
      >
        {/* <LogIn active={active} /> */}
        <Order />
        {/* <Confirmation active={active}  /> */}
        {/* <SignUp active={active} /> */}
        {/* <Agreement /> */}
      </Modal>
      {/* <UserCarousel /> */}
    </div>
  );
}

export default App;
