import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import car_img from "/src/assets/imgs/m001t0331_a_home_delivery_illustration_27sep22 1.svg";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

function Slider({ className }) {
  return (
    <div className={`slider ${className}`}>
      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={false}
        loop={true}
        slidesPerView={"1"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          // slideShadows: false,
        }}
        pagination={{ clickable: true }}
        // pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        className="swiper_container"
      >
        <SwiperSlide className="rounded-2xl">
          <div className="txt">
            <p className="title">
              Круглосуточная доставка <span>24/7</span>
            </p>
            <button>Узнать больше</button>
          </div>
          <div className="img">
            <img src={car_img} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="txt">
            <p className="title">
              Круглосуточная доставка <span>24/7</span>
            </p>
            <button>Узнать больше</button>
          </div>
          <div className="img">
            <img src={car_img} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="txt">
            <p className="title">
              Круглосуточная доставка <span>24/7</span>
            </p>
            <button>Узнать больше</button>
          </div>
          <div className="img">
            <img src={car_img} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="txt">
            <p className="title">
              Круглосуточная доставка <span>24/7</span>
            </p>
            <button>Узнать больше</button>
          </div>
          <div className="img">
            <img src={car_img} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
