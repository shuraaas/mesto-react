function Main() {

  function handleEditAvatarClick() {
    document.querySelector('.popup_type_edit-avatar').classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    document.querySelector('.popup_type_edit').classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_type_new-card').classList.add('popup_opened');
  }


  return (
    <main className="content">
      <section className="profile">
        <div className="profile__author">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src="#" alt="Аватар пользователя." />
            <button className="btn btn_type_edit-avatar" onClick={handleEditAvatarClick} type="button"></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name"></h1>
            <button className="btn btn_type_edit" onClick={handleEditProfileClick} type="button"></button>
            <p className="profile__job"></p>
          </div>
        </div>
        <button className="btn btn_type_add" onClick={handleAddPlaceClick} type="button"></button>
      </section>
      <section className="cards">
        <ul className="cards__list"></ul>
      </section>
    </main>
  );
}

export default Main;