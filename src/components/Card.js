import React from 'react';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.name, props.link);
  }

  return (
    <li className="card">
      <button className="btn btn_type_delete" type="button"></button>
      <img className="card__img" src={props.link} alt={props.name} onClick={handleClick} />
      <div className="card__description">
        <h2 className="card__place">{props.name}</h2>
        <button className="btn btn_type_like" type="button"></button>
        <p className="card__like-counter">
          {props.likes.length > 0 ? props.likes.length : null}
        </p>
      </div>
    </li>
  );
}

export default Card;