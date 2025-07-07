import React from "react";
import { SliderTestimonical } from "../../Sliders/SliderTestimonical";

export const Testimonial = (): React.ReactElement => {
    return (
        <section className="testimonial container">
            <div className="testimonial__content">
                <h1 className="testimonial__title">Рекомендации</h1>
                <p className="testimonial__description">
                    Наша команда
                </p>
                <button className="testimonial__button">Исследовать </button>
            </div>

            <SliderTestimonical />
        </section>
    )
}