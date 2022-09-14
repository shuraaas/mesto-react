import React from 'react';

function Card(props) {
  return (
    <li className="card">
      <button className="btn btn_type_delete" type="button"></button>
      <img className="card__img" src={props.link} alt={props.name} />
      <div className="card__description">
        <h2 className="card__place">{props.name}</h2>
        <button className="btn btn_type_like" type="button"></button>
        <p className="card__like-counter">{props.likes.length}</p>
      </div>
    </li>
  );
}

export default Card;