import React from "react";

export const Footer = (): React.ReactElement => {
    return (
        <footer className="footer container">
            <div className="footer__content">
                <img src="img/icons/nixxsol.png" alt="Логотип" className="footer__logo" />

                <div className="footer__connection">
                    <div className="footer__connection-block footer__connection-phone">
                        <h4 className="footer__info-phone">+92 300 1234567</h4>
                        <img src="img/icons/phone.png" alt="Телефон" className="footer__phone" />
                    </div>
                    <div className="footer__connection-block footer__connection-pochta">
                        <h4 className="footer__info-pochta">info@nixxsol.com</h4>
                        <img src="img/icons/pochta.png" alt="Почта" className="footer__pochta" />
                    </div>
                    <div className="footer__connection-block footer__connection-location">
                        <h4 className="footer__info-location">
                            Лорем ипсум - основная команда. У меня есть возможность
                            <br />бесплатно почитать книгу Мэтью.
                        </h4>
                        <img src="img/icons/location.png" alt="Геолокоцая" className="footer__location" />
                    </div>
                </div>
                <div className="footer__info">
                    <nav className="footer__nav-list">
                        <ul className="footer__list">
                            <li className="footer__list-item"><a href="#" className="footer__item-link">О нас</a></li>
                            <li className="footer__list-item"><a href="#" className="footer__item-link">Сервисы</a></li>
                            <li className="footer__list-item"><a href="#" className="footer__item-link">Портфолио</a></li>
                            <li className="footer__list-item"><a href="#" className="footer__item-link">Контакты</a></li>
                        </ul>
                    </nav>
                    <div className="footer__blank">
                        <h2 className="footer__title">Оставайтесь на связи</h2>
                        <form className="footer__form">
                            <input type="text" name="pochta" className="footer__blank-pochta" placeholder="Адрес почты"
                                required />
                            <input type="button" value="Связаться с нами" className="footer__blank-button" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer__contact">
                <p className="footer__contact-copyright">&copy; 2022 Nixxsol All Rights Reserved.</p>
                <div className="footer__social__network-block" />
                <img src="img/icons/facebook.png" alt="Фейсбук" className="footer__social__network-img" />
                <img src="img/icons/instagram.png" alt="Инстаграм" className="footer__social__network-img" />
                <img src="img/icons/twitter.png" alt="Твиттер" className="footer__social__network-img" />
            </div>
        </footer >
    )
}