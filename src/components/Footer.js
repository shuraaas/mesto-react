import React from "react";

function Footer() {
  let date = new Date();

  return (
    <footer className="footer">
      <p className="footer__text">&copy; {date.getFullYear()} Mesto Russia</p>
    </footer>
  );
}

export default Footer;