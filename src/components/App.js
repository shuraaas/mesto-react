import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="page">
      <div className="page__container">

        <Header />
        <Main />
        <Footer />

      </div>
      <template className="card-template">
        <li className="card">
          <button className="btn btn_type_delete" type="button"></button>
          <img className="card__img" src="#" alt="/" />
          <div className="card__description">
            <h2 className="card__place"></h2>
            <button className="btn btn_type_like" type="button"></button>
            <p className="card__like-counter"></p>
          </div>
        </li>
      </template>
      <div className="popup popup_type_edit">
        <div className="popup__container">
          <button className="btn btn_type_close" type="button"></button>
          <h2 className="popup__description">Редактировать профиль</h2>
          <form className="form form_type_edit" name="edit-profile" method="post" action="/">
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
          <form className="form form_type_add-card" name="new-place" method="post" action="/">
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
      <div className="popup popup_type_zoom-img">
        <div className="popup__img-container">
          <button className="btn btn_type_close" type="button"></button>
          <img className="popup__img" src="#" alt="/" />
          <p className="popup__img-name"></p>
        </div>
      </div>
      <div className="popup popup_type_delete-card">
        <div className="popup__container">
          <button className="btn btn_type_close" type="button"></button>
          <form className="form form_type_confirm" name="confirm" method="post" action="/">
            <h2 className="popup__description">Вы уверены?</h2>
            <button className="btn btn_type_save" type="submit">Да</button>
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
    </div>
  );
}

export default App;
