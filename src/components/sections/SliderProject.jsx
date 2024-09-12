import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import slide_img from "../../assets/image/project/projet1.jpg"
import slide_img2 from "../../assets/image/project/projet2.jpg"
import Section from './Section'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SliderProject = () => {
  return (
    <Section className="!px-0 max-w-none">
        <div className='container'>
            <h2 className='text-center text-2xl lg:text-[2rem] font-bold font-kallisto'>Slider project</h2>
            <Swiper 
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                coverflowEffect={
                    {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier:2.5,
                    }
                }
                pagination={{el:'.swiper-pagination',clickable:true}}
                navigation={{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev',clickable:true,}}
                modules={[EffectCoverflow,Pagination,Navigation]}
                className='h-[52rem] relative pt-12'
            >
                <SwiperSlide>
                    <img src={slide_img} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_img2} alt="" />
                </SwiperSlide>
            </Swiper>
                <div className='slider-controler'>
                    <div className='swiper-button-prev slider-arrow'>
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className='swiper-button-next slider-arrow'>
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className='swiper-pagination'>

                    </div>
                </div>
        </div>
    </Section>
  )
}

export default SliderProject