import React, { useState, useEffect, useContext } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      job: description
    });
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
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
            value={name || ''}
            id="name-input"
            type="text"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            onChange={handleChangeName}
            required
          />
          <span className="form__input-error name-input-error"></span>
        </label>
        <label className="form__field">
          <input
            className="form__input form__input_type_job"
            name="job"
            value={description || ''}
            id="job-input"
            type="text"
            placeholder="О себе"
            minLength="2"
            maxLength="200"
            onChange={handleChangeDescription}
            required
          />
          <span className="form__input-error job-input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;