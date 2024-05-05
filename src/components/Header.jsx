import React from "react";
import img1 from "/src/assets/components/logo.svg";
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

const Header = () => {
  return (
    <>
      <header className="flex gap-5 w-full items-center justify-around border-1 p-10">
        <div className="flex items-center gap-3">
          <Sheet>
            <SheetTrigger>
              <i className="fa-solid fa-bars"></i>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetDescription>
                  <div className="soazla">
                    <a className=" hvr" href="">
                      Главная
                    </a>
                    <a className=" hvr" href="">
                      Магазин товаров
                    </a>
                    <a className=" hvr" href="">
                      Договор оферты
                    </a>
                    <a className=" hvr" href="">
                      Сертификаты
                    </a>
                  </div>
                  <div className="tel">
                    <p>Телефон:</p>
                    <a href="tel:+998 55 519 90 90">+998 55 519 90 90</a>
                  </div>
                  <div className="fain">
                    <i className="fain1 fa-brands fa-facebook-f fa-2xl"></i>
                    <i className="fain2 fa-brands fa-instagram fa-2xl"></i>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <div className="img flex items-center gap-3">
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="flex gap-5 items-center links">
          <div className="links flex gap-5 items-center ">
            <a className="link hvr" href="/">
              Главная
            </a>
            <a className="link hvr" href="">
              Магазин товаров
            </a>
          </div>
          <div className="position border flex gap-3 cursor-pointer">
            <i class="fa-solid fa-location-dot text-gray-600"></i>
            <p>улица Мукими, 166</p>
          </div>
        </div>
        <div className="flex gap-2 items-center borderr-1">
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Lng" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">RU</SelectItem>
              <SelectItem value="dark">ENG</SelectItem>
            </SelectContent>
          </Select>

          <button
            type="button"
            className="acc items-center flex gap-5 border border-1r"
          >
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="voyti">Войти в кабинет</p>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
