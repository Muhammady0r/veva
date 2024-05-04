import "./App.css";

import { useState } from "react";

import Modal from "./Modals/Modal";
// import EditPersonalInfo from "./Modals/EditPersonalInfo";
// import { UserCarousel } from "./Slider/UserCarousel";
// import Agreement from "./Modals/Agreement";
// import SignUp from "./Modals/SignUp";
// import LogIn from "./Modals/LogIn";
// import Confirmation from "./Modals/Confirmation";
// import Order from "./Modals/Order";
// import Showcase from "./components/Showcase/Showcase";
import PersonalInfo from "./components/PersonalInfo";

function App() {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="h-full w-full">
        <Modal
          active={active}
          setActive={setActive}
          agreement
          height={"min"}
          pr={"5px"}
        >
          {/* <EditPersonalInfo /> */}
          {/* <LogIn active={active} /> */}
          {/* <Order /> */}
          {/* <Confirmation active={active}  /> */}
          {/* <SignUp active={active} /> */}
          {/* <Agreement /> */}
          <PersonalInfo />
        </Modal>
      </div>
      {/* <Showcase /> */}
    </>
  );
}

export default App;
