import React from "react";

export const Portfolio=(): React.ReactElement =>{
    return(
        <section className="portfolio container">
            <div className="portfolio__content">
                <h1 className="portfolio__title">Портфолио</h1>
                <p className="portfolio__description">Итальянская пицца - основная команда. Теперь это будет успокаивающим
                    элементом.</p>
                <button className="portfolio__button">Больше портфолий </button>
            </div>
            <div className="swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img src="img/p1.png" alt="Игры" className="portfolio__p1-img"/>
                    </div>
                    <div className="swiper-slide">
                        <img src="img/p2.png" alt="Банк" className="portfolio__p2-img"/>
                    </div>
                    <div className="swiper-slide">
                        <img src="img/p2.png" alt="Сайт" className="portfolio__p3-img"/>
                    </div>
                </div>
                <div className="swiper-button">
                    <div className="swiper-button-prev">^</div>
                    <div className="swiper-button-next">^</div>
                </div>

            </div>

        </section>
    )
}