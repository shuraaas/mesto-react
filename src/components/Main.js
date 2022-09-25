import React, { useState, useEffect, useContext } from "react";
import api from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {

  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialCards()
      .then(cards => {
        const result = cards.map(card => ({
          id: card._id,
          owner: card.owner._id,
          name: card.name,
          likes: card.likes,
          link: card.link,
        }));
        setCards(result);
      })
      .catch(err => console.error(err));
    }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__author">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src={currentUser.avatar} alt="Аватар пользователя." />
            <button className="btn btn_type_edit-avatar" onClick={props.onEditAvatar} type="button"></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="btn btn_type_edit" onClick={props.onEditProfile} type="button"></button>
            <p className="profile__job">{currentUser.about}</p>
          </div>
        </div>
        <button className="btn btn_type_add" onClick={props.onAddPlace} type="button"></button>
      </section>

      {cards ? (
        <section className="cards">
          <ul className="cards__list">
            {cards.map(card => (
              <Card
                key={card.id}
                onCardClick={props.onCardClick}
                {...card}
              />
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}

export default Main;