import "./App.css";
import { Footer } from "./components/Footer";

import { useState } from "react";

import Modal from "./Modals/Modal";
import Agreement from "./Modals/Agreement";
import Header from "./components/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import Union from "./components/Union";
import CatalogPage from "./components/CatalogPage";

function App() {
  const [modal, setModal] = useState(false);
  const [active, setActive] = useState(false);
  const loc = useLocation();

  return (
    <>
      <Header
        className={`${
          loc.pathname == "/" ? "bg-transparent absolute" : "bg-[#dee3ef]"
        }`}
      />
      <Modal
        active={active}
        setActive={setActive}
        height={"min"}
        pr={"5px"}
        opened={modal}
        setOpened={setModal}
        agreement
        className={""}
      >
        <Agreement
          closeFn={() => {
            setModal(false);
          }}
        />
      </Modal>
      <Union className={`${loc.pathname == "/" ? "hidden" : ""}`} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
      </Routes>

      <div className="container">
        <Footer
          cerFunc={() => {
            setModal(true);
          }}
        />
      </div>
    </>
  );
}

export default App;
