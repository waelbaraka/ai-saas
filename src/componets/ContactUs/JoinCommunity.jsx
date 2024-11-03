// JoinCommunity.js
import React from 'react';
import './JoinCommunity.css';
import backgroundImage from '../../assets/contactbg.png';
import logo from '../../assets/logo.svg';

const JoinCommunity = () => {
  return (
    <div className="community-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="line"></div>
      <img src={logo} alt="Logo" className="center-logo" />
      <div className="contact-container">
        <div className="contact-box">
          <h2>Contact Us</h2>
          <form>
            <label htmlFor="full-name" className="required">Full Name </label>
            <input type="text" id="full-name" name="full-name" required />

            <label htmlFor="company-name" className="required">Company Name </label>
            <input type="text" id="company-name" name="company-name" required />

            <label htmlFor="email"  className="required">Email </label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message"  className="required" >Message</label>
            <textarea id="message" name="message" rows="4"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
