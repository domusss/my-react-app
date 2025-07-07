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
              “Морковка Lorem ipsum, расширенный конкурс среди студентов.
              Прическу следует запекать в микроволновке в виде горшочка. Разнообразный, но
              производительный продукт est, удобный для партнеров-потребителей.”
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
              “Морковка Lorem ipsum, расширенный конкурс среди студентов.
              Прическу следует запекать в микроволновке в виде горшочка. Разнообразный, но
              производительный продукт est, удобный для партнеров-потребителей.”
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};