import logoPath from '../images/header-logo.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logoPath} alt="Логотоп сайта место." />
    </header>
  );
}

export default Header;