import React from "react";
import {CardList}  from "/workspaces/my-react-app/card/CardList.tsx";

export const Service = (): React.ReactElement => {
   return (
     <section className="service container">
            <div className="service__square">
                <div className="service__circle circle-1"></div>
                <div className="service__circle circle-2"></div>
                <div className="service__circle circle-3"></div>
                <div className="service__circle circle-4"></div>
                <h2 className="service__title">Сервисы</h2>
            </div>

            <div className="service__card-container">

                <CardList/>

                {/* <div className="service__card">
                    <img src="img/icons/lab.png" alt="Лабораторный Флакон" className="service__flacon-img"/>
                    <div className="service__comment">
                        <h2 className="service__card-title">Фирменный дизайн</h2>
                        <p className="service__card-description">Благодарим вас за проявленный интерес к нашей компании
                            и добро пожаловать в нашу компанию. Со мной все в порядке, но теперь я убираю его в
                            холодильник на Хэллоуин, фанаты.</p>
                    </div>
                </div>
                <div className="service__card">
                    <img src="img/icons/lab.png" alt="Лабораторный Флакон" className="service__flacon-img"/>
                    <div className="service__comment">
                        <h2 className="service__card-title">Фирменный дизайн</h2>
                        <p className="service__card-description">Благодарим вас за проявленный интерес к нашей компании
                            и добро пожаловать в нашу компанию. Со мной все в порядке, но теперь я убираю его в
                            холодильник на Хэллоуин, фанаты.</p>
                    </div>
                </div>
                <div className="service__card">
                    <img src="img/icons/lab.png" alt="Лабораторный Флакон" className="service__flacon-img"/>
                    <div className="service__comment">
                        <h2 className="service__card-title">Фирменный дизайн</h2>
                        <p className="service__card-description">Благодарим вас за проявленный интерес к нашей компании
                            и добро пожаловать в нашу компанию. Со мной все в порядке, но теперь я убираю его в
                            холодильник на Хэллоуин, фанаты.</p>
                    </div>
                </div>
                <div className="service__card">
                    <img src="img/icons/lab.png" alt="Лабораторный Флакон" className="service__flacon-img"/>
                    <div className="service__comment">
                        <h2 className="service__card-title">Фирменный дизайн</h2>
                        <p className="service__card-description">Благодарим вас за проявленный интерес к нашей компании
                            и добро пожаловать в нашу компанию. Со мной все в порядке, но теперь я убираю его в
                            холодильник на Хэллоуин, фанаты.</p>
                    </div>
                </div>
                <div className="service__card">
                    <img src="img/icons/lab.png" alt="Лабораторный Флакон" className="service__flacon-img"/>
                    <div className="service__comment">
                        <h2 className="service__card-title">Фирменный дизайн</h2>
                        <p className="service__card-description">Благодарим вас за проявленный интерес к нашей компании
                            и добро пожаловать в нашу компанию. Со мной все в порядке, но теперь я убираю его в
                            холодильник на Хэллоуин, фанаты.</p>
                    </div>
                </div>
                <div className="service__card">
                    <img src="img/icons/lab.png" alt="Лабораторный Флакон" className="service__flacon-img"/>
                    <div className="service__comment">
                        <h2 className="service__card-title">Фирменный дизайн</h2>
                        <p className="service__card-description">Благодарим вас за проявленный интерес к нашей компании
                            и добро пожаловать в нашу компанию. Со мной все в порядке, но теперь я убираю его в
                            холодильник на Хэллоуин, фанаты.</p>
                    </div>
                </div>
                <div className="service__card">
                    <img src="img/icons/lab.png" alt="Лабораторный Флакон" className="service__flacon-img"/>
                    <div className="service__comment">
                        <h2 className="service__card-title">Фирменный дизайн</h2>
                        <p className="service__card-description">Благодарим вас за проявленный интерес к нашей компании
                            и добро пожаловать в нашу компанию. Со мной все в порядке, но теперь я убираю его в
                            холодильник на Хэллоуин, фанаты.</p>
                    </div>
                </div>
                <div className="service__card">
                    <img src="img/icons/lab.png" alt="Лабораторный Флакон" className="service__flacon-img"/>
                    <div className="service__comment">
                        <h2 className="service__card-title">Фирменный дизайн</h2>
                        <p className="service__card-description">Благодарим вас за проявленный интерес к нашей компании
                            и добро пожаловать в нашу компанию. Со мной все в порядке, но теперь я убираю его в
                            холодильник на Хэллоуин, фанаты.</p>
                    </div>
                </div> */}
            </div>
        </section>
   )
}