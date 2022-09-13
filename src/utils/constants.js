// Объект настроек формы
const settings = {
  // селектор класса формы
  formSelector: '.form',
  // селектор поля ввода формы
  inputSelector: '.form__input',
  // селектор кнопки отправки формы
  submitButtonSelector: '.btn_type_save',
  // класс неактивной кнопки
  inactiveButtonClass: 'btn_inactive',
  // класс ошибки поля ввода
  inputErrorClass: 'form__input_type_error',
  // класс подсказки ошибки
  errorClass: 'form__input-error_active'
};

const formValidators = {};

const apiConfig = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-48/',
  tokenId: '1a0fcad2-374c-4a16-bc60-ad5ac7325d61'
};

const page = document.querySelector('.page');
// кнопки
const buttonEdit = page.querySelector('.btn_type_edit');
const buttonAdd = page.querySelector('.btn_type_add');
const buttonEditAvatar = page.querySelector('.btn_type_edit-avatar');

const userData = {
  profileAvatarSelector: '.profile__avatar',
  profileNameSelector: '.profile__name',
  profileJobSelector: '.profile__job'
}

// контейрер для карточек
const cardsListSelector = '.cards__list';

// шаблон карточки
const cardSelector = '.card-template';

const myId = {id: ''};

export {
  settings,
  apiConfig,
  buttonEdit,
  buttonEditAvatar,
  buttonAdd,
  userData,
  cardsListSelector,
  page,
  cardSelector,
  myId,
  formValidators
};