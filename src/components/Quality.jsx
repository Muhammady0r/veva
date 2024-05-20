import "./Quality.css";
import qualityIMG from "/src/assets/imgs/qualityIMG.png";
import waveIMG from "/src/assets/imgs/wave.svg";
import { Card, CardContent } from "@/components/ui/card";
import BubblesImg from "../assets/imgs/bubbles.mp4"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Quality = () => {
  return (
    <section className="quality pt-2 mt-16 max-lg:mb-10">
      <div className="container flex gap-32 2xl:flex-row xl:flex-row lg:flex-row md:flex-col 2xl:gap-28 xl:gap-28 lg:gap-16 md:gap-14 sm:gap-12 sm:flex-col">
        <div className="quality__left">
          <h2 className="quality__heading text-6xl font-medium 2xl:mb-10 xl:mb-10 lg:mb-9 leading-[1.2] 2xl:text-6xl xl:text-6xl lg:text-5xl 2xl:block xl:block lg:block md:hidden sm:hidden">
            Вода с высокой степенью очистки
          </h2>
          <ul className="quality__list 2xl:grid xl:grid lg:grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 2xl:gap-12 xl:gap-12 lg:gap-9 md:hidden sm:hidden">
            <li className="quality__list-item">
              <img
                src={waveIMG}
                className="2xl:mb-3 xl:mb-3 lg:mb-2 md:mb-1"
                alt=""
              />
              <h4 className="2xl:text-lg xl:text-lg md:text-base">
                Вода укрепляет иммунитет
              </h4>
            </li>
            <li className="quality__list-item">
              <img
                src={waveIMG}
                className="2xl:mb-3 xl:mb-3 lg:mb-2 md:mb-1"
                alt=""
              />
              <h4 className="2xl:text-lg xl:text-lg md:text-base">
                Нормализует работу пищеварительной системы
              </h4>
            </li>
            <li className="quality__list-item">
              <img
                src={waveIMG}
                className="2xl:mb-3 xl:mb-3 lg:mb-2 md:mb-1"
                alt=""
              />
              <h4 className="2xl:text-lg xl:text-lg md:text-base">
                Регулирует кислотно-щелочного баланс
              </h4>
            </li>
            <li className="quality__list-item">
              <img
                src={waveIMG}
                className="2xl:mb-3 xl:mb-3 lg:mb-2 md:mb-1"
                alt=""
              />
              <h4 className="2xl:text-lg xl:text-lg md:text-base">
                Избавляет от запоров, способствует похудению, выводит токсины из
                организма
              </h4>
            </li>
            <li className="quality__list-item">
              <img
                src={waveIMG}
                className="2xl:mb-3 xl:mb-3 lg:mb-2 md:mb-1"
                alt=""
              />
              <h4 className="2xl:text-lg xl:text-lg md:text-base">
                Лечит гастрит с нормальной и повышенной кислотностью
              </h4>
            </li>
            <li className="quality__list-item">
              <img
                src={waveIMG}
                className="2xl:mb-3 xl:mb-3 lg:mb-2 md:mb-1"
                alt=""
              />
              <h4 className="2xl:text-lg xl:text-lg md:text-base">
                Улучшает обмен веществ
              </h4>
            </li>
          </ul>

          <Carousel className="w-full 2xl:hidden xl:hidden lg:hidden md:block sm:block">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  className="swipe-card md:basis-1/2 sm:basis-full"
                  key={index}
                >
                  <div className="p-1">
                    <Card className="bg-[#F2F4F7] px-5 py-4 rounded-lg">
                      <CardContent className="flex items-center justify-center max-h-[270px]">
                        <div className="quality__list-item flex flex-col gap-4">
                          <h4 className="font-bold">
                            Максимальная <br /> чистота
                          </h4>
                          <img
                            src={waveIMG}
                            className="2xl:mb-3 xl:mb-3 lg:mb-2 md:mb-1 max-w-[125px]"
                            alt=""
                          />
                          <p className="2xl:text-lg xl:text-lg md:text-base">
                            Наша вода проходит через двойной процесс очистки -
                            обратный осмос и ультрафильтрация. Это означает, что
                            каждая капля, которую вы пьете, свободна от примесей
                            и загрязнений.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* <div className="quality__right 2xl:w-1/3 xl:w-1/3 lg:w-1/3 self-end flex md:w-full justify-center items-center sm:w-full"> */}
        <img
          className="quality__img bg-red-10 2xl:block xl:block lg:block md:hidden sm:hidden cursor-pointer"
          src={qualityIMG}
          alt=""
        />

        <img className="bubbles" src="https://i.pinimg.com/originals/5d/ea/eb/5deaeb33a97005e24ce8ff7f8bcaf420.gif" alt="" />
        {/* </div> */}
      </div>
    </section >
  );
};
