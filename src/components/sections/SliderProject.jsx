import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { projects } from "@constants";
import { Link } from "react-router-dom";

import Section from "./Section";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SliderProject = () => {
  return (
    <Section className="!px-0 max-w-none"> 
      <div className="container">
        <h2 className="text-black text-center text-2xl lg:text-[2rem] font-bold font-kallisto">
          Découvrez Nos Projets qui Transforment le Digital
        </h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="h-[45rem] relative pt-12"
        >
            {projects.map((item, index) => (
                <SwiperSlide key={index}>
                    <Link to={item.link}>
                    <div>
                        <div className="flex justify-center items-end absolute bottom-[49px] left-[-1px] rounded-b-3xl bg-gradient-to-t from-black to-transparent w-full h-52">
                            <h3 className="font-nunito-sans font-bold text-white">{item.title}</h3>
                        </div>
                        <img src={item.to} alt={`Projet ${index}`} />
                    </div>
                    </Link>
                </SwiperSlide>
            ))}
          
        </Swiper>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </Section>
  );
};

export default SliderProject;
