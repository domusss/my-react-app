import React, {useState} from "react";
import { NavLink } from "react-router";
import { Forms } from "../forms/Form";



export const Header = (): React.ReactElement => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <header className="header container">
            <NavLink to="/" className="header__item-link">
                <img src="img/logo.png" alt="Логотип" className="header__logo-img" />
            </NavLink>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__list-item">
                        <NavLink to="/" className="header__item-link">О нас</NavLink>
                    </li>
                    <li className="header__list-item">
                        <NavLink to="/" className="header__item-link">ИТ-услуги</NavLink>
                        <img src="img/icons/checkMark.png" alt="Подтверждение" className="header__item__logo-img" />
                    </li>
                    <li className="header__list-item">
                        <NavLink to="/" className="header__item-link">Портфолио</NavLink>
                    </li>
                    <li className="header__list-item">
                        <NavLink to="/cards" className="header__item-link">Карточки</NavLink>
                    </li>
                </ul>

                <button className="header__nav-button button-contact" onClick={() => setIsModalOpen(true)}>
                    Свяжитесь с нами
                </button>
            </nav>

            {isModalOpen && <Forms onClose={() => setIsModalOpen(false)} />}
        </header>
    );
};