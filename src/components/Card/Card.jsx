import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "./Card.css";
import { useState } from "react";

import water from "/src/assets/imgs/bottle2.svg";
import culler from "/src/assets/imgs/culler11.png";
import culleHover from "/src/assets/imgs/culler11-opened.png";
import { useNavigate } from "react-router-dom";
import Modal from "@/Modals/Modal";

const CatalogCard = ({ isCuller }) => {
  let [counter, counterAdd] = useState(1);
  const nav = useNavigate();

  const [modal, setModal] = useState(false);
  const [active, setActive] = useState(false);

  const [cullerName, setName] = useState(
    Math.random() > 0.5 ? "Electronix\nYLR-FA-1590 Silver" : "Artel\nART-1638S"
  );

  function formatCurency(num) {
    return (
      `${num.toLocaleString("us-US", {
        style: "currency",
        currency: "UZS",
      })}`
        // .replace("UZS", "")
        .replaceAll(",00", "")
    );
    // .replaceAll(",", " ")
    // .slice(1);
  }

  return (
    <>
      <Modal
        active={active}
        setActive={setActive}
        height={"min"}
        pr={"5px"}
        opened={modal}
        setOpened={setModal}
        agreement
      >
        {isCuller && (
          <>
            <div className="w-full flex justify-center items-center flex-col">
              <img src={culleHover} alt="" />
              <div className="text-center">
                <CardDescription className="mb-2 max-sm:mb-0">
                  Кулер для воды
                </CardDescription>
                <CardTitle className={"max-sm:text-base"}>
                  {cullerName}
                </CardTitle>
              </div>
              <div className="card-dropdown w-full">
                <ul>
                  <li>
                    <span>Нагрев</span>
                    <span>есть</span>
                  </li>
                  <li>
                    <span>Мощность нагрева</span>
                    <span>до +95°С</span>
                  </li>
                  <li>
                    <span>Охлаждение</span>
                    <span>есть</span>
                  </li>
                  <li>
                    <span>Мощность охлаждения</span>
                    <span>до +5°С - +7°С</span>
                  </li>
                  <li>
                    <span>Установка бутылки</span>
                    <span>внизу</span>
                  </li>
                </ul>

                <div className="flex justify-between items-center mb-5 w-full">
                  <div className="counter mb-5 flex gap-3 items-center justify-center bg-[#F2F4F7] py-3 px-2 rounded-lg">
                    <i
                      className="fa-solid text-lg text-[#1CBBEE] fa-chevron-left cursor-pointer"
                      onClick={() => {
                        if (counter > 1) {
                          counterAdd(counter - 1);
                        }
                      }}
                    ></i>
                    <span className="font-bold">{counter}</span>
                    <i
                      onClick={() => {
                        counterAdd(counter + 1);
                      }}
                      className="fa-solid text-lg text-[#1CBBEE] fa-chevron-right cursor-pointer"
                    ></i>
                  </div>

                  <div className="text-right">
                    <h6 className="text-[#98A2B3] text-xs">
                      Итоговая стоимость:
                    </h6>
                    <h4 className="text-[#1CBBEE] text-2xl">
                      {formatCurency(
                        Number(counter) * (isCuller ? 2699000 : 15000)
                      )}{" "}
                    </h4>
                  </div>
                </div>
                <Button
                  className="rounded-full w-full text-lg"
                  onClick={() => {
                    nav(`/profile?water=${counter}`);
                  }}
                >
                  Добавить в корзину
                </Button>
              </div>
            </div>
          </>
        )}
        {!isCuller && (
          <>
            <div className="w-full flex justify-center items-center flex-col">
              <img src={water} alt="" />
              <div className="text-center">
                <CardDescription className="mb-2 max-sm:mb-0">
                  Вода в бутилированной бутылке
                </CardDescription>
                <CardTitle className={"max-sm:text-base"}>18,9 л.</CardTitle>
              </div>
              <div className="card-dropdown w-full">
                <div className="flex justify-between items-center mb-5 w-full">
                  <div className="counter mb-5 flex gap-3 items-center justify-center bg-[#F2F4F7] py-3 px-2 rounded-lg">
                    <i
                      className="fa-solid text-lg text-[#1CBBEE] fa-chevron-left cursor-pointer"
                      onClick={() => {
                        if (counter > 1) {
                          counterAdd(counter - 1);
                        }
                      }}
                    ></i>
                    <span className="font-bold">{counter}</span>
                    <i
                      onClick={() => {
                        counterAdd(counter + 1);
                      }}
                      className="fa-solid text-lg text-[#1CBBEE] fa-chevron-right cursor-pointer"
                    ></i>
                  </div>

                  <div className="text-right">
                    <h6 className="text-[#98A2B3] text-xs">
                      Итоговая стоимость:
                    </h6>
                    <h4 className="text-[#1CBBEE] text-2xl">
                      {formatCurency(
                        Number(counter) * (isCuller ? 2699000 : 15000)
                      )}{" "}
                    </h4>
                  </div>
                </div>
                <Button
                  className="rounded-full w-full text-lg"
                  onClick={() => {
                    nav(`/profile?water=${counter}`);
                  }}
                >
                  Добавить в корзину
                </Button>
              </div>
            </div>
          </>
        )}
      </Modal>
      <Card
        className={`card-item ${
          isCuller ? "culler-card" : ""
        } pt-5 grayscale hover:grayscale-0 ${
          isCuller ? "" : "opacity-60 hover:opacity-100"
        } max-[665px]:grayscale-0 max-[665px]:opacity-100`}
      >
        <div
          onClick={() => {
            setModal(true);
          }}
          className="absolute w-full h-full min-[665px]:hidden"
        ></div>
        <CardContent className="flex flex-col items-center justify-center gap-4">
          <img
            src={isCuller ? culler : water}
            alt=""
            className={isCuller ? "img" : ""}
          />
          {isCuller && (
            <>
              <img src={culleHover} alt="" className="hoverImg" />
            </>
          )}
          <div className="text-center">
            <CardDescription className="mb-2 max-sm:mb-0">
              {isCuller ? "Кулер для воды" : "Вода в бутилированной бутылке"}
            </CardDescription>
            <CardTitle className={"max-sm:text-base"}>
              {isCuller ? cullerName : "18,9 л."}
            </CardTitle>
          </div>
        </CardContent>
        <CardFooter className="card-footer">
          <div className="card-dropdown">
            {isCuller && (
              <ul>
                <li>
                  <span>Нагрев</span>
                  <span>есть</span>
                </li>
                <li>
                  <span>Мощность нагрева</span>
                  <span>до +95°С</span>
                </li>
                <li>
                  <span>Охлаждение</span>
                  <span>есть</span>
                </li>
                <li>
                  <span>Мощность охлаждения</span>
                  <span>до +5°С - +7°С</span>
                </li>
                <li>
                  <span>Установка бутылки</span>
                  <span>внизу</span>
                </li>
              </ul>
            )}
            <div className="flex gap-12 items-center mb-5">
              <div className="counter mb-5 flex gap-3 items-center justify-center bg-[#F2F4F7] py-3 px-2 rounded-lg">
                <i
                  className="fa-solid text-lg text-[#1CBBEE] fa-chevron-left cursor-pointer"
                  onClick={() => {
                    if (counter > 1) {
                      counterAdd(counter - 1);
                    }
                  }}
                ></i>
                <span className="font-bold">{counter}</span>
                <i
                  onClick={() => {
                    counterAdd(counter + 1);
                  }}
                  className="fa-solid text-lg text-[#1CBBEE] fa-chevron-right cursor-pointer"
                ></i>
              </div>

              <div className="text-right">
                <h6 className="text-[#98A2B3] text-xs">Итоговая стоимость:</h6>
                <h4 className="text-[#1CBBEE] text-2xl w-40">
                  {formatCurency(
                    Number(counter) * (isCuller ? 2699000 : 15000)
                  )}{" "}
                </h4>
              </div>
            </div>
            <Button
              className="rounded-full w-full text-lg"
              onClick={() => {
                nav(`/profile?water=${counter}`);
              }}
            >
              Добавить в корзину
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default CatalogCard;
