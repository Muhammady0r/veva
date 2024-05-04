import React, { useRef, useState } from "react";
import "./MyCart.css";
import Slider from "../Slider/Slider";
import ProductCard from "./ProductCard";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Checkbox } from "@/components/ui/checkbox";

const MyCart = () => {
  const [date, setDate] = useState();
  const [time, setTime] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const checkTime1 = useRef(null);
  const checkTime2 = useRef(null);

  function formatCurency(num) {
    return `${num.toLocaleString("us-US", {
      style: "currency",
      currency: "UZS",
    })}`
      .replace("UZS", "")
      .replaceAll(".00", "")
      .replaceAll(",", " ")
      .slice(1);
  }

  return (
    <div className="myCart container">
      <div className="cart">
        <h2>Моя корзина</h2>
        <ProductCard totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
        <div className="btns">
          <div>
            <p>Адрес доставки:</p>
            <Select defaultValue="166">
              <SelectTrigger className="w-full bg-[#F2F4F7] border-none">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="166">
                  г. Ташкент, улица Мукими, 166
                </SelectItem>
                <SelectItem value="150">
                  г. Ташкент, улица Бегубор, 150
                </SelectItem>
                <SelectItem value="230">
                  г. Ташкент, улица Дружба, 230
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <p>Номер подъезда:</p>
            <Input
              defaultValue={"12"}
              className={"w-full bg-[#F2F4F7] border-none"}
            />
          </div>
          <div>
            <p>Номер телефона для связи:</p>
            <Select defaultValue="1">
              <SelectTrigger className="w-full bg-[#F2F4F7] border-none">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">+ 998 90 124-25-25</SelectItem>
                <SelectItem value="2">+ 998 94 123-54-95</SelectItem>
                <SelectItem value="3">+ 998 88 763-26-47</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="btns">
          <div>
            <p>Дата доставки:</p>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full bg-[#F2F4F7] border-none justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="time">
            <p>Время доставки:</p>
            <div>
              <label htmlFor="time1">
                <Checkbox
                  name={"time"}
                  id={"time1"}
                  ref={checkTime1}
                  checked={!time}
                  onCheckedChange={(e) => {
                    setTime(false);
                  }}
                />
                Днем <br /> с 10:00-15:00
              </label>
              <label htmlFor="time2">
                <Checkbox
                  name={"time"}
                  id={"time2"}
                  ref={checkTime2}
                  checked={time}
                  onCheckedChange={(e) => {
                    setTime(true);
                  }}
                />
                К вечеру <br /> 16:00-20:00
              </label>
            </div>
          </div>
          <div>
            <p>Оплата:</p>
            <Select defaultValue="1">
              <SelectTrigger className="w-full bg-[#F2F4F7] border-none">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Наличными</SelectItem>
                <SelectItem value="2">Карта</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="total-price">
          <div>
            <p>К оплате:</p>
            <h1>{formatCurency(totalPrice)} сум</h1>
          </div>
          <Button variant="">Оформить заказ</Button>
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default MyCart;
