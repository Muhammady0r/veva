import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import "./Information.css";

import Slider from "../Slider/Slider";

export const Information = () => {
  return (
    <div className="info">
      <div className="information">
        <h2 className="information__heading">Личная информация</h2>

        <div className="table max-w-[735px]">
          <div className=" gap-1">
            <h5>Фамилия и имя:</h5>
            <h5>Никифоров Михаил</h5>
          </div>
          <div className=" gap-1">
            <h5>Номер телефона:</h5>
            <h5>
              + 998 90 124-25-25 <br /> + 998 90 124-25-25
            </h5>
          </div>
          <div className=" gap-1">
            <h5>Ваш адрес №1:</h5>
            <h5>г. Ташкент, улица Мукими, 166 ...</h5>
          </div>
          <div className=" gap-1">
            <h5>Ваш адрес №2:</h5>
            <h5>г. Ташкент, улица Мукими, 166 ...</h5>
          </div>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              className={
                "information__button bg-[#F2F4F7] text-black px-9 py-6 font-bold rounded-full hover:bg-[#d0d2d4]"
              }
            >
              <i className="fa-regular fa-pen-to-square"></i>
              Редактировать
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] overflow-y-scroll max-h-screen">
            <DialogHeader>
              <DialogTitle className="dialog__title">Редактировать</DialogTitle>
            </DialogHeader>
            <div className="dialog__main">
              <div>
                <Input className="bg-[#F2F4F7]" placeholder="John Doe"></Input>
                <Input
                  className="bg-[#F2F4F7]"
                  placeholder="+998 90 124-25-25"
                ></Input>
                <Input
                  className="bg-[#F2F4F7]"
                  placeholder="+998 90 124-25-25"
                ></Input>
              </div>

              <div>
                <h4>Ваш адрес №1:</h4>

                <div className="flex gap-4 items-center justify-center">
                  <Input
                    className="bg-[#F2F4F7]"
                    placeholder="г. Ташкент, улица Мукими, 166 ..."
                  ></Input>
                  <button>
                    <i className="fa-regular fa-circle-xmark"></i>
                  </button>
                </div>

                <Select>
                  <SelectTrigger className="bg-[#F2F4F7]">
                    <SelectValue placeholder="Чиланзарский район" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#F2F4F7]">
                    <SelectGroup>
                      <SelectLabel className="bg-[#F2F4F7]">
                        Выберите район
                      </SelectLabel>
                      <SelectItem className="bg-[#F2F4F7]" value="apple">
                        Чиланзарский район
                      </SelectItem>
                      <SelectItem className="bg-[#F2F4F7]" value="strawberry">
                        Алмазарский район
                      </SelectItem>
                      <SelectItem className="bg-[#F2F4F7]" value="banana">
                        Мирзо-Улугбекский район
                      </SelectItem>
                      <SelectItem className="bg-[#F2F4F7]" value="blueberry">
                        Учтепинский район
                      </SelectItem>
                      <SelectItem className="bg-[#F2F4F7]" value="grapes">
                        Ташкентская область
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <div className="dialog__grid">
                  <Input className="bg-[#F2F4F7]" placeholder="Дом"></Input>
                  <Input className="bg-[#F2F4F7]" placeholder="Подъезд"></Input>
                  <Input className="bg-[#F2F4F7]" placeholder="Этаж"></Input>
                  <Input
                    className="bg-[#F2F4F7]"
                    placeholder="Номер квартиры"
                  ></Input>
                  <Input
                    className="bg-[#F2F4F7]"
                    placeholder="Код домофона"
                  ></Input>
                </div>
              </div>

              <div className="flex gap-1">
                <Checkbox id="terms" />
                <Label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 hover:cursor-pointer"
                >
                  Accept terms and conditions
                </Label>
              </div>
            </div>
            <DialogFooter className={"flex"}>
              <Button className="dialog__submit w-full rounded-full">
                Сохранить
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <Slider />
    </div>
  );
};
