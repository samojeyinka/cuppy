import React from "react";
import "../stylesheets/Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="footer_top">
        <div className="left">
          <h3>Get all the Latest CUPPY News</h3>
          <div className="sub">
            <input type="email" placeholder="Email Address" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="right">
          <h4>Bookings@cuppy.co.uk</h4>
          <h4>Info@cuppy.co.uk</h4>
        </div>
      </div>
      <div className="footer_btm">
        <p>© 2021 Cuppy. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
