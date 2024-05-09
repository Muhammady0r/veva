import React, { useState } from "react";
import img1 from "/src/assets/imgs/logo.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { MapContainer } from "react-leaflet/MapContainer";
import "leaflet/dist/leaflet.css";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker, Popup, useMapEvents } from "react-leaflet";

import "./Header.css";
import { Link, NavLink } from "react-router-dom";

import userIcon from "/src/assets/imgs/User.png";
import { buttonVariants } from "../ui/button";

import facebook from "/src/assets/imgs/facebook.svg";
import instagram from "/src/assets/imgs/instagram.svg";

const Header = ({ profileFn, openCer, className }) => {
  const [pos, setPos] = useState(null);
  const [found, setFound] = useState(false);

  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
        setPos(
          `x:${`${e.latlng.lat}`.split(".")[0]} y:${
            `${e.latlng.lng}`.split(".")[0]
          }`
        );
        setFound(true);
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>F*ck you Muhahahahaha</Popup>
      </Marker>
    );
  }

  return (
    <div className={`header container w-full`}>
      <header className={`flex justify-between w-full`}>
        <div className="flex justify-center items-center gap-4">
          <Sheet>
            <SheetTrigger className="min-[700px]:hidden">
              <i className="fa-solid fa-bars fa-xl"></i>
            </SheetTrigger>
            <SheetContent side={"left"} className={"menuSheet"}>
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
              <ul className="nav-links flex flex-col gap-5">
                <li>
                  <SheetClose asChild>
                    <NavLink to={"/"} className={"text-xl text-[#98A2B3]"}>
                      Главная
                    </NavLink>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <NavLink
                      to={"/catalog"}
                      className={"text-xl text-[#98A2B3]"}
                    >
                      Магазин товаров
                    </NavLink>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <a className={"text-xl text-[#98A2B3] cursor-pointer"}>
                      Договор оферты
                    </a>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <a
                      className={"text-xl text-[#98A2B3] cursor-pointer"}
                      onClick={openCer}
                    >
                      Сертификаты
                    </a>
                  </SheetClose>
                </li>
              </ul>
              <p className="mt-14">Телефон:</p>
              <a href="tel:+998555199090" className="text-lg font-bold mb-1">
                +998 55 519 90 90
              </a>
              <ul className="flex gap-3">
                <li>
                  <Link
                    to={"https://www.facebook.com"}
                    className="border text-black flex p-2 rounded-full"
                  >
                    <img src={facebook} alt="" className="scale-90" />
                  </Link>
                </li>
                <li>
                  <Link
                    to={"https://www.instagram.com/meed0ff/"}
                    className="border text-black flex p-2 rounded-full"
                  >
                    <img src={instagram} alt="" className="scale-90" />
                  </Link>
                </li>
              </ul>
            </SheetContent>
          </Sheet>

          <Link to={"/"} className="img flex items-center gap-3">
            <img src={img1} alt="" />
          </Link>
        </div>
        <div className="mid flex justify-center items-center gap-28 max-[1050px]:gap-5 max-[700px]:hidden">
          <div className="links flex gap-10">
            <NavLink to={"/"}>Главная</NavLink>
            <NavLink to={"/catalog"}>Магазин товаров</NavLink>
          </div>
          <Select>
            <SelectTrigger className="w-[209px] rounded-xl max-[940px]:hidden">
              <img src="/src/assets/imgs/Vector.svg" alt="" />
              <SelectValue placeholder="Местоположение" />
            </SelectTrigger>
            <SelectContent>
              {pos != null && <SelectItem value="1">{pos}</SelectItem>}
              <AlertDialog>
                <AlertDialogTrigger
                  className={`${buttonVariants({ variant: "" })} w-full p-0 ${
                    found ? "hidden" : ""
                  }`}
                >
                  Определить локацию
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Определение локации</AlertDialogTitle>
                    <AlertDialogDescription></AlertDialogDescription>
                  </AlertDialogHeader>
                  <MapContainer
                    style={{ height: 250, width: "100%", borderRadius: 10 }}
                    center={{ lat: 40, lng: 60 }}
                    zoom={20}
                    scrollWheelZoom={false}
                    className={`relative transition-all ${
                      found ? "pointer-events-none" : ""
                    }`}
                  >
                    <div
                      className={`absolute w-full h-full top-0 left-0 z-[99999999] flex justify-center items-center backdrop-blur ${
                        found ? "hidden" : ""
                      }`}
                    >
                      <b className="text-2xl">Нажми на меня</b>
                    </div>
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      className={`transition-all ${
                        found ? "pointer-events-none" : "cursor-pointer"
                      }`}
                    />
                    <LocationMarker />
                  </MapContainer>
                  {found && (
                    <h1 className="font-bold text-xl">
                      Местоположение сохранено!
                    </h1>
                  )}
                  <AlertDialogFooter>
                    <AlertDialogAction>
                      {found ? "Закрыть" : "Отмена"}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </SelectContent>
          </Select>
        </div>
        <div className="end flex justify-center items-center gap-1">
          <Select defaultValue="1">
            <SelectTrigger className="lng rounded-l-full w-16 outline-none border-[#e0e5f1]">
              <SelectValue placeholder="Язык" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Ru</SelectItem>
              <SelectItem value="2">En</SelectItem>
            </SelectContent>
          </Select>
          <Link
            onClick={profileFn}
            className="user py-[9px] px-4 text-xs flex justify-center items-center bg-background rounded-r-full gap-3"
          >
            <img src={userIcon} alt="" />
            <span className="max-[700px]:hidden">Войти в кабинет</span>
          </Link>
        </div>
      </header>
      <Select>
        <SelectTrigger className="w-full rounded-xl mt-4 min-[940px]:hidden">
          <img src="/src/assets/imgs/Vector.svg" alt="" />
          <SelectValue placeholder="Местоположение" />
        </SelectTrigger>
        <SelectContent>
          {pos != null && <SelectItem value="1">{pos}</SelectItem>}
          <AlertDialog>
            <AlertDialogTrigger
              className={`${buttonVariants({ variant: "" })} w-full p-0 ${
                found ? "hidden" : ""
              }`}
            >
              Определить локацию
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Определение локации</AlertDialogTitle>
                <AlertDialogDescription></AlertDialogDescription>
              </AlertDialogHeader>
              <MapContainer
                style={{ height: 250, width: "100%", borderRadius: 10 }}
                center={{ lat: 40, lng: 60 }}
                zoom={20}
                scrollWheelZoom={false}
                className={`relative transition-all ${
                  found ? "pointer-events-none" : ""
                }`}
              >
                <div
                  className={`absolute w-full h-full top-0 left-0 z-[99999999] flex justify-center items-center backdrop-blur ${
                    found ? "hidden" : ""
                  }`}
                >
                  <b className="text-2xl">Нажми на меня</b>
                </div>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  className={`transition-all ${
                    found ? "pointer-events-none" : "cursor-pointer"
                  }`}
                />
                <LocationMarker />
              </MapContainer>
              {found && (
                <h1 className="font-bold text-xl">Местоположение сохранено!</h1>
              )}
              <AlertDialogFooter>
                <AlertDialogAction>
                  {found ? "Закрыть" : "Отмена"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </SelectContent>
      </Select>
    </div>
  );

  return (
    <>
      <header
        className={`flex w-full items-center justify-between border-1 p-10 px-16 pr-36 ${className}`}
      >
        <div className="flex items-center gap-3">
          <Sheet>
            <SheetTrigger>
              <i className="fa-solid fa-bars"></i>
            </SheetTrigger>
            <SheetContent>
              <div className="soazla">
                <NavLink className=" hvr" to="/">
                  Главная
                </NavLink>
                <NavLink className=" hvr" to="/catalog">
                  Магазин товаров
                </NavLink>
                <NavLink className=" hvr" to="">
                  Договор оферты
                </NavLink>
                <NavLink className=" hvr" to="">
                  Сертификаты
                </NavLink>
              </div>
              <div className="tel">
                <p>Телефон:</p>
                <NavLink to="tel:+998 55 519 90 90">+998 55 519 90 90</NavLink>
              </div>
              <div className="fain">
                <i className="fain1 fa-brands fa-facebook-f fa-2xl"></i>
                <i className="fain2 fa-brands fa-instagram fa-2xl"></i>
              </div>
            </SheetContent>
          </Sheet>
          <Link to={"/"} className="img flex items-center gap-3">
            <img src={img1} alt="" />
          </Link>
        </div>
        <div className="flex gap-5 items-center links">
          <div className="links flex gap-5 items-center ">
            <NavLink className="link hvr" to="/">
              Главная
            </NavLink>
            <NavLink className="link hvr" to="/catalog">
              Магазин товаров
            </NavLink>
          </div>
          <div className="position border flex gap-3 cursor-pointer">
            <i className="fa-solid fa-location-dot text-gray-600"></i>
            <p>улица Мукими, 166</p>
          </div>
        </div>
        <div className="flex gap-2 items-center border-1 rounded-full overflow-hidden">
          <Select defaultValue="ru">
            <SelectTrigger className="">
              <SelectValue placeholder="Lng" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ru">RU</SelectItem>
              <SelectItem value="en">EN</SelectItem>
            </SelectContent>
          </Select>

          <Link
            to="/profile"
            className="acc items-center flex gap-5 border border-1r"
          >
            <Avatar className={"scale-90"}>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="voyti scale-90">Войти в кабинет</p>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
