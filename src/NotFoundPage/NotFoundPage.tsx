import React from "react";
import { NavLink } from "react-router";
import { Header } from "../component/Header/Header";
 

export const NotFoundPage = (): React.ReactElement => {


  return (
    <div className="not-found-page">
      <Header/>
      <h1 className="not-found-page__title">404</h1>
      <p className="not-found-page__description">Кажется, этой страницы не существует. Возможно, вы перешли по неверной ссылке.</p>
      <button className="nfp__button"> <NavLink className="text" to ="/" >Вернуться назад</NavLink></button>
    </div>
  );
};