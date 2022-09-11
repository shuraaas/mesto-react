function ImagePopup() {
  return (
    <div className="popup popup_type_zoom-img">
      <div className="popup__img-container">
        <button className="btn btn_type_close" type="button"></button>
        <img className="popup__img" src="#" alt="/" />
        <p className="popup__img-name"></p>
      </div>
    </div>
  );
}

export default ImagePopup;