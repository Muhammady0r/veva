import { useState } from "react";
import logo from "/logo.png";
import "./App.css";
import Modal from "./Modals/Modal";
// import LogIn from "./Modals/LogIn";
import Confirmation from "./Modals/Confirmation";

function App() {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);

  return (
    <>
      <Modal active={active} setActive={setActive}>
        {/* <LogIn active={active} setActive={setActive} /> */}
        <Confirmation active={active} setActive={setActive} />
      </Modal>
      <div>
        <a href="https://meedweff.vercel.app" target="_blank">
          <img src={logo} className="logo" alt="logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the MeedWeff logo to go to website
      </p>
    </>
  );
}

export default App;
