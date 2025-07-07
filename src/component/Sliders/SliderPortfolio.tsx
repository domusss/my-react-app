import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';



export const SliderPortfolio = (): React.ReactElement => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
      className="portfolio-swiper"
    >
      <SwiperSlide>
        <img src="img/p1.png" alt="Игры" className="portfolio__p1-img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/p2.png" alt="Банк" className="portfolio__p2-img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/p3.png" alt="Сайт" className="portfolio__p3-img" />
      </SwiperSlide>
    </Swiper>
  );
};