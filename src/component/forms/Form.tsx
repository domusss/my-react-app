// Forms.tsx
import React from "react";
import ReactDOM from "react-dom";

type FormsProps = {
  onClose: () => void;
};

export const Forms = ({ onClose }: FormsProps): React.ReactElement | null => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose(); 
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className="form__modal" onClick={handleOverlayClick}>
      <form className="form__window-modal" onSubmit={onSubmit}>
        <h2 className="form__title">Зарегистрироваться</h2>
        <div className="form__modal-background">
          <div className="form__content">
            <label htmlFor="name" className="form__label">Имя
              <input className="form__input" type="text" name="name" id="name" placeholder="Имя" required />
            </label>
            <label htmlFor="email" className="form__label">Почта
              <input className="form__input" type="email" name="email" id="email" placeholder="Почта" required />
            </label>
          </div>
          <div className="form__content-button">
            <input
              className="form__content-button-input form__content-button-input-submit"
              type="submit"
              value="ОК"
            />
            <button
              className="form__content-button-input form__content-button-input-cancellation"
              type="button"
              onClick={onClose}
            >
              Отмена
            </button>
          </div>
        </div>
      </form>
    </div>,
    document.body
  );
};