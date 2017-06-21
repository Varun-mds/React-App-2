import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <ul><li><Link to="/" className="homeLink"> Home </Link></li>
        <li><Link to="/faq" className="faqLink"> FAQ </Link></li>
        <li><Link to="/about" className="aboutLink"> About Us </Link></li>
        <li><Link to="/Services" className="ServicesLink"> Our Services </Link></li>
        <li><Link to="/NewUser" className="NewUserLink"> New User </Link></li>
        <li><Link to="/Login" className="LoginLink"> Login </Link></li>
        </ul>
      </div>
    );
  }
}

export default Header;