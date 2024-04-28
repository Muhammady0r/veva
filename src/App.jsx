import "./App.css";
import { UserCarousel } from "./Slider/UserCarousel";
// import Modal from "./Modals/Modal";
// import Agreement from "./Modals/Agreement";
// import SignUp from "./Modals/SignUp";
// import LogIn from "./Modals/LogIn";
// import Confirmation from "./Modals/Confirmation";

function App() {
  // const [active, setActive] = useState(false);

  return (
    <div className="h-full w-full">
      {/* <Modal active={active} setActive={setActive}> */}
      {/* <LogIn active={active}  /> */}
      {/* <Confirmation active={active}  /> */}
      {/* <SignUp active={active} /> */}
      {/* <Agreement /> */}
      {/* </Modal> */}
      <UserCarousel />
    </div>
  );
}

export default App;
