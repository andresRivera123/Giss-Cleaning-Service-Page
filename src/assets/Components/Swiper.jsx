import React from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../Styles/Components/swiper.css";
import nextIcon from "../Images/Icons/NextIcon.svg";

// import required modules
import { Pagination } from "swiper/modules";
import { ServicesArray } from "../utils/services";

export default function SwiperExample() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        breakpoints={{
          180: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          550: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          750: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1050: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1500: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {ServicesArray.map((service) => (
          <SwiperSlide key={service.id}>
            <div className="swiper__container">
              <div className="swiper__first">
                <img
                  src={service.image}
                  alt="Image service"
                  className="swiper__image"
                />
                <h2 className="swiper__paragraph basictitle">
                  {service.title}
                </h2>
                <p className="paragraph">{service.description}</p>
              </div>
              
              <div className="swiper__button">
                <Link
                  to="/Giss-Cleaning-Service-Page/services"
                >
                  <img
                    src={nextIcon}
                    alt="Next Icon"
                    className="swiper__next"
                  />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

/* breakpoints={{
          180: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          550: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          750: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1050: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1500: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }} */

/*  <div className="swiper__container">
            <div className="swiper__first">
              <img src={serviceBasic} alt="Image" className="swiper__image" />
              <h2 className="swiper__paragraph basictitle">Basic General Services</h2>
            </div>
            <p className="paragraph">
              El servicio lorem servicio lorem servicio lorem servicio lorem
              servicio lorem servicio lorem servicio lorem
            </p>
            <img src={nextIcon} alt="Next Icon" className="swiper__next" />
          </div> */
