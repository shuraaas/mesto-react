import React, { useEffect, useContext, useRef } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const nameRef = useRef();
  const jobRef = useRef();

  useEffect(() => {
    nameRef.current.value = currentUser.name;
    jobRef.current.value = currentUser.about;
  }, [currentUser, nameRef, jobRef])

  // function handleChange(e) {
  //   if (e.target.name === 'name') nameRef.current.value = e.target.value;
  //   if (e.target.name === 'job') jobRef.current.value = e.target.value;
  // }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name: nameRef.current.value,
      job: jobRef.current.value
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="form__content">
        <label className="form__field">
          <input
            className="form__input form__input_type_name"
            name="name"
            ref={nameRef}
            id="name-input"
            type="text"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            // onChange={handleChange}
            required
          />
          <span className="form__input-error name-input-error"></span>
        </label>
        <label className="form__field">
          <input
            className="form__input form__input_type_job"
            name="job"
            ref={jobRef}
            id="job-input"
            type="text"
            placeholder="О себе"
            minLength="2"
            maxLength="200"
            // onChange={handleChange}
            required
          />
          <span className="form__input-error job-input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;