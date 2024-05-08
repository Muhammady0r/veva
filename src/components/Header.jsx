import React from "react";
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
} from "@/components/ui/sheet";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = ({ className }) => {
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
