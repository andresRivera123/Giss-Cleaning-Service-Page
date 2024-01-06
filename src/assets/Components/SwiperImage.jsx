import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../Styles/Components/swiper.css";
import imageWork1 from "../Images/Work/1.jpg";
import imageWork2 from "../Images/Work/2.jpg";
import imageWork3 from "../Images/Work/7.jpg";
import imageWork4 from "../Images/Work/11.jpg";
import imageWork5 from "../Images/Work/13.jpg";
import imageWork6 from "../Images/Work/15.jpg";
import imageWork7 from "../Images/Work/20.jpg";
import imageWork8 from "../Images/Work/14.jpg";
import imageWork9 from "../Images/Work/24.jpg";
import imageWork10 from "../Images/Work/16.jpg";

// import required modules
import { Navigation } from "swiper/modules";

export default function SwiperImage() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img className="imageSwiper" src={imageWork1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="imageSwiper" src={imageWork2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="imageSwiper" src={imageWork3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="imageSwiper" src={imageWork4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="imageSwiper" src={imageWork5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="imageSwiper" src={imageWork6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="imageSwiper" src={imageWork7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="imageSwiper" src={imageWork8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="imageSwiper" src={imageWork9} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="imageSwiper" src={imageWork10} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
