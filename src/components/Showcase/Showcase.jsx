import React, { useEffect, useRef, useState } from "react";
import "./Showcase.css";

import { Navigation, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { Button } from "@/components/ui/button";
import Union from "../Union";

import multiDot from "/src/assets/imgs/multiDot.png";
import Bottle from "/src/assets/imgs/bottle.svg";
import culler2 from "/src/assets/imgs/culler2.svg";
import culler1 from "/src/assets/imgs/culler1.png";
import userIcon from "/src/assets/imgs/UserIcon.png";
import tgIcon from "/src/assets/imgs/telegram.png";
import { Link } from "react-router-dom";

const Showcase = ({ clickFn }) => {
  const [aboutOpened, setAOpened] = useState(false);

  return (
    <>
      <div className="banner">
        <div className="dot dot1"></div>
        <div className="dot dot2"></div>
        <img src={multiDot} alt="" className="multiDot multiDot1" />
        <img src={multiDot} alt="" className="multiDot multiDot2" />

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
          // loop={true}
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
            <img src={culler1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Bottle} alt="" />
            <button
              onClick={() => {
                setAOpened(!aboutOpened);
              }}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <img src={culler2} alt="" className="scale-110" />
          </SwiperSlide>
          {/* <SwiperSlide>
            <img src={Bottle} alt="" />
            <button
              onClick={() => {
                setAOpened(!aboutOpened);
              }}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <img src={culler2} alt="" className="scale-110" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={culler1} alt="" />
          </SwiperSlide> */}
        </Swiper>
        <Button variant="" className={"banner__btn"} onClick={clickFn}>
          Заказать воду
        </Button>
        <div className="bottom-links">
          <Link to="/profile">
            <img src={userIcon} alt="" />
          </Link>
          <a href="tg://resolve?domain=Meed0ff">
            <img src={tgIcon} alt="" />
          </a>
        </div>
      </div>
      <Union />
    </>
  );
};

export default Showcase;
