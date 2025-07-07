import React from "react";

export const Book =(): React.ReactElement =>{
    return(
                <section className="book container">
            <div className="book__content">
                <div className="book__content-subtitle">
                    <h4 className="book__subtitle">Рекомендации</h4>
                    <div className="book__content-strip"></div>
                </div>
                <h1 className="book__title">Запишитесь на встречу с нами</h1>
                <p className="book__description">
                    Мы самая лучшая компания по производству пиццы в мире. 
                    Наша сеть расстянулась настолько что вы даже представить себе не сможете.
                    Если ты хочешь стать частью нашей всемирной паутины оставляй заявку прямо сейчас.
                </p>
            </div>
            <div className="book__form">
                <form className="modal-form">
                    <input className="form-input form__text-input" type="text" name="name" placeholder="Имя" required/>
                    <input className="form-input form__text-input" type="text" name="pochta" placeholder="Почта" required/>
                    <input className="form-input form__text-input" type="text" name="phone"
                        placeholder="Телефон (необязательно)"/>
                    <textarea className="form-input form__area-input" name="message" id="message"
                        placeholder="Расскажите нам о проекте, над которым вы работаете (необязательно)"></textarea>
                    <input type="submit" value="Предоставить" className="form__button-input"/>
                </form>
            </div>
            <div className="book__block-red"></div>
        </section>
    )
}