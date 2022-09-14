import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(name, link) {
    setSelectedCard({ name, link });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>

      <div className="popup popup_type_edit">
        <div className="popup__container">
          <button className="btn btn_type_close" type="button"></button>
          <h2 className="popup__description">Редактировать профиль</h2>
          <form className="form form_type_edit" name="edit" method="post" action="/">
            <fieldset className="form__content">
              <label className="form__field">
                <input className="form__input form__input_type_name" name="name" id="name-input" type="text" placeholder="Имя" minLength="2" maxLength="40" required />
                <span className="form__input-error name-input-error"></span>
              </label>
              <label className="form__field">
                <input className="form__input form__input_type_job" name="job" id="job-input" type="text" placeholder="О себе" minLength="2" maxLength="200" required />
                <span className="form__input-error job-input-error"></span>
              </label>
            </fieldset>
            <button  className="btn btn_type_save" type="submit">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_new-card">
        <div className="popup__container">
          <button className="btn btn_type_close" type="button"></button>
          <h2 className="popup__description">Новое место</h2>
          <form className="form form_type_add-card" name="new-card" method="post" action="/">
            <fieldset className="form__content">
              <label className="form__field">
                <input className="form__input form__input_type_place-name" name="place-name" id="place-name-input" type="text" placeholder="Название" minLength="2" maxLength="30" required />
                <span className="form__input-error place-name-input-error"></span>
              </label>
              <label className="form__field">
                <input className="form__input form__input_type_url" name="url" id="url-input" type="url" placeholder="Ссылка на картинку" required />
                <span className="form__input-error url-input-error"></span>
              </label>
            </fieldset>
            <button className="btn btn_type_save" type="submit">Создать</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_edit-avatar">
        <div className="popup__container">
          <button className="btn btn_type_close" type="button"></button>
          <form className="form form_type_edit-avatar" name="edit-avatar" method="post" action="/">
            <h2 className="popup__description">Обновить аватар</h2>
            <fieldset className="form__content">
              <label className="form__field">
                <input className="form__input form__input_type_avatar" name="avatar" id="avatar-input" type="url" placeholder="Ссылка на аватар" required />
                <span className="form__input-error avatar-input-error"></span>
              </label>
            </fieldset>
            <button className="btn btn_type_save" type="submit">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_delete-card">
        <div className="popup__container">
          <button className="btn btn_type_close" type="button"></button>
          <form className="form form_type_confirm" name="delete-card" method="post" action="/">
            <h2 className="popup__description">Вы уверены?</h2>
            <button className="btn btn_type_save" type="submit">Да</button>
          </form>
        </div>
      </div>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <PopupWithForm
        title="Редактировать профиль"
        name="edit"
        children="edit"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        title="Новое место"
        name="new-card"
        children="new-card"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        title="Обновить аватар"
        name="edit-avatar"
        children="edit-avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        title="Вы уверены?"
        name="delete-card"
        children="delete-card"
        isOpen=""
        onClose={closeAllPopups}
      />

    </div>
  );
}

export default App;
