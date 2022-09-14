import React, { useState, useEffect } from "react";
import api from '../utils/api';
import Card from './Card';

function Main(props) {

  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then(data => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      });
    api.getInitialCards()
      .then(cards => {
        const result = cards.map(card => ({
          id: card._id,
          name: card.name,
          likes: card.likes,
          link: card.link
        }));
        setCards(result);
      })
    }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__author">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src={userAvatar} alt="Аватар пользователя." />
            <button className="btn btn_type_edit-avatar" onClick={props.onEditAvatar} type="button"></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button className="btn btn_type_edit" onClick={props.onEditProfile} type="button"></button>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button className="btn btn_type_add" onClick={props.onAddPlace} type="button"></button>
      </section>

      {cards ? (
        <section className="cards">
          <ul className="cards__list">
            {cards.map(card => <Card key={card.id} {...card}/>)}
          </ul>
        </section>
      ) : null}
    </main>
  );
}

export default Main;