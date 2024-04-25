import { useState } from "react";
import logo from "/logo.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
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
