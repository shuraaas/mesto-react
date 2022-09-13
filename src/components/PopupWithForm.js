import React from "react";

function PopupWithForm(props) {
  return (
    <div className={props.isOpen
      ? `popup popup_type_${props.name} popup_opened`
      : `popup popup_type_${props.name}`}>
      <div className="popup__container">
        <button className="btn btn_type_close" type="button"></button>
        <h2 className="popup__description">{props.title}</h2>
        <form className="form form_type_edit" name={props.name} method="post" action="/">
          <fieldset className="form__content">
            <label className="form__field">

              <p>{props.children}</p>

            </label>
          </fieldset>
          <button  className="btn btn_type_save" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;