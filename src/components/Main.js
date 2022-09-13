import React from "react";

function Main(props) {

  // console.log(props)

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__author">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src="#" alt="Аватар пользователя." />
            <button className="btn btn_type_edit-avatar" onClick={props.onEditAvatar} type="button"></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name"></h1>
            <button className="btn btn_type_edit" onClick={props.onEditProfile} type="button"></button>
            <p className="profile__job"></p>
          </div>
        </div>
        <button className="btn btn_type_add" onClick={props.onAddPlace} type="button"></button>
      </section>
      <section className="cards">
        <ul className="cards__list"></ul>
      </section>
    </main>
  );
}

export default Main;