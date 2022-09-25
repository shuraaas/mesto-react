import { React, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {

  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.owner === currentUser._id;
  const isLiked = props.likes.some(item => item._id === currentUser._id);
  const cardDeleteButtonClassName = (
    `${isOwn ? 'btn btn_type_delete' : 'btn_hidden'}`
  );
  const cardLikeButtonClassName = (
    `${isLiked ? 'btn btn_type_like btn_type_like-active' : 'btn btn_type_like'}`
  );

  function handleClick() {
    props.onCardClick(props.name, props.link);
  }

  return (
    <li className="card">
      <button className={cardDeleteButtonClassName} type="button"></button>
      <img className="card__img" src={props.link} alt={props.name} onClick={handleClick} />
      <div className="card__description">
        <h2 className="card__place">{props.name}</h2>
        <button className={cardLikeButtonClassName} type="button"></button>
        <p className="card__like-counter">
          {props.likes.length > 0 ? props.likes.length : null}
        </p>
      </div>
    </li>
  );
}

export default Card;