import React, { useRef, useState } from "react";
import "./Showcase.css";

import { Navigation, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { Button } from "@/components/ui/button";

const Showcase = () => {
  const [aboutOpened, setAOpened] = useState(false);

  return (
    <div className="banner">
      <div className="dot dot1"></div>
      <div className="dot dot2"></div>
      <img
        src="src/assets/multiDot.png"
        alt=""
        className="multiDot multiDot1"
      />
      <img
        src="src/assets/multiDot.png"
        alt=""
        className="multiDot multiDot2"
      />
      <img src="src/assets/Union.png" alt="" className="banner__union" />
      <img src="src/assets/Union.png" alt="" className="banner__union union2" />

      <div className={`about-water ${aboutOpened ? "about-opened" : ""}`}>
        <button
          onClick={() => {
            setAOpened(!aboutOpened);
          }}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
        <h1>Вода в капсулах 18,9 Л</h1>
        <ul>
          <li>
            <span>Кальций+</span>
            <span>40 мг/л</span>
          </li>
          <li>
            <span>Магний</span>
            <span>20 мг/л</span>
          </li>
          <li>
            <span>Натрий</span>
            <span>50 мг/л</span>
          </li>
          <li>
            <span>Хлор</span>
            <span>200 мг</span>
          </li>
          <li>
            <span>Кислотность</span>
            <span>5 мг</span>
          </li>
          <li>
            <span>Минерализация</span>
            <span>2,0</span>
          </li>
        </ul>
      </div>
      <div className="overlay"></div>
      <Swiper
        modules={[Navigation, EffectCoverflow]}
        spaceBetween={300}
        slidesPerView={window.innerWidth > 1100 ? 3 : 1}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        onSlideChange={() => {
          setAOpened(false);
        }}
      >
        <div className="btns">
          <button className="swiper-prev">
            <i className="fa-solid fa-arrow-left-long fa-2xl"></i>
            <span>Назад</span>
          </button>
          <button className="swiper-next" id="swiper-next">
            <i className="fa-solid fa-arrow-right-long fa-2xl"></i>
            <span>Вперёд</span>
          </button>
        </div>
        <SwiperSlide>
          <img src="/src/assets/bottle.svg" alt="" />
          <button
            onClick={() => {
              setAOpened(!aboutOpened);
            }}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/culler2.svg" alt="" className="scale-125" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/culler1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/bottle.svg" alt="" />
          <button
            onClick={() => {
              setAOpened(!aboutOpened);
            }}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/culler2.svg" alt="" className="scale-125" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/culler1.png" alt="" />
        </SwiperSlide>
      </Swiper>
      <Button variant="" className={"banner__btn"}>
        Заказать воду
      </Button>
      <div className="bottom-links">
        <a href="#">
          <img src="/src/assets/UserIcon.png" alt="" />
        </a>
        <a href="tg://resolve?domain=Meed0ff">
          <img src="/src/assets/telegram.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Showcase;
