import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';



export const SliderTestimonical=(): React.ReactElement  => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
      className="testimonial-swiper"
    >
      <SwiperSlide>
        <div className="card__content">
          <img src="img/people1.png" alt="Адам Смитх" className="testimonial__icon-img" />
          <div className="card__content-block">
            <h2 className="testimonial__text-name">Адам Смитх</h2>
            <p className="testimonial__card-description">
              Адам был обычным сельским пареньком, который хотел чтобы, как можно большее количество людей 
              стало счастливыми. Уже с раннего детства он начал продумывать как воплотить свою мечту в
              реальность. Он понимал что в одиночку ему не справиться, поэтому он нашел друга который поддержал
              его безумную идею. Так на свет появилась наша компания.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card__content">
          <img src="img/people2.png" alt="Майк" className="testimonial__icon-img" />
          <div className="card__content-block">
            <h2 className="testimonial__text-name">Майк</h2>
            <p className="testimonial__card-description">
              Майк, лучший друг, а также человек поддержавший безумную идею еще совсем маленького Адама.
              Адам был тем кто вдохновлял Майка. Видя как у него горят глаза, Майк сам хотел стремиться к большему.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};