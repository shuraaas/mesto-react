import { React, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({
  _id,
  name,
  link,
  owner,
  likes,
  onCardClick,
  onCardLike,
  onCardDelete
}) {

  const currentUser = useContext(CurrentUserContext);
  const isOwn = owner._id === currentUser._id;
  const isLiked = likes.some(item => item._id === currentUser._id);
  const cardDeleteButtonClassName = (
    `${isOwn ? 'btn btn_type_delete' : 'btn_hidden'}`
  );
  const cardLikeButtonClassName = (
    `${isLiked ? 'btn btn_type_like btn_type_like-active' : 'btn btn_type_like'}`
  );

  function handleClick() {
    onCardClick(name, link);
  }

  function handleLikeClick() {
    onCardLike({ _id, likes });
  }

  function handleDeleteClick() {
    onCardDelete(_id);
  }

  return (
    <li className="card">
      <button className={cardDeleteButtonClassName} type="button" onClick={handleDeleteClick}></button>
      <img className="card__img" src={link} alt={name} onClick={handleClick} />
      <div className="card__description">
        <h2 className="card__place">{name}</h2>
        <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
        <p className="card__like-counter">
          {likes.length > 0 ? likes.length : null}
        </p>
      </div>
    </li>
  );
}

export default Card;