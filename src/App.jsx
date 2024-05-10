import "./App.css";
import { Footer } from "./components/Footer";

import { useEffect, useState } from "react";

import Modal from "./Modals/Modal";
import Agreement from "./Modals/Agreement";
import Header from "./components/Header/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import Union from "./components/Union";
import CatalogPage from "./components/CatalogPage";
import LogIn from "./Modals/LogIn";
import SignUp from "./Modals/SignUp";
import Layout from "./components/Layout/Layout";

function App() {
  const [modal, setModal] = useState(false);
  const [login, setLogin] = useState(false);
  const [reg, setReg] = useState(false);
  const [active, setActive] = useState(false);
  const loc = useLocation();

  return (
    <>
      <Layout
        profileFn={() => {
          setLogin(true);
        }}
        cerFn={() => {
          setModal(true);
        }}
      >
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

        <Modal
          active={active}
          setActive={setActive}
          height={"min"}
          pr={"5px"}
          opened={login}
          setOpened={setLogin}
          reg={reg}
          setReg={setReg}
        >
          <LogIn
            active={!active}
            setReg={setReg}
            reg={reg}
            closeFn={() => {
              setLogin(false);
              setReg(false);
            }}
          />
          <SignUp
            className={`${reg && active ? "" : "hidden"}`}
            closeFn={() => {
              setLogin(false);
              setReg(false);
            }}
          />
        </Modal>

        <Union className={`${loc.pathname == "/" ? "hidden" : ""}`} />

        <Routes>
          <Route path="/" element={<HomePage setLogin={setLogin} />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
