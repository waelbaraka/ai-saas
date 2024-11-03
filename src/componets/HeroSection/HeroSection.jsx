import React from 'react';
import './HeroSection.css';
import logo from '../../assets/logo.svg'
// import stars from '../../assets/stars.svg'
// import product from '../../assets/product.svg'
// import product2 from '../../assets/product2.svg'
// import product3 from '../../assets/product3.svg'
// import product4 from '../../assets/product4.svg'
// import Btn from '../btn';

const HeroSection = () => {
  return (
    <section className="hero">
      <nav className="navbar">
        <ul className="nav-links">
          <img src={logo} alt="Your Logo" className="logo" />
          <li><a href="#" className="whitebackground-btn">Contact</a></li>
          <li><a href="#"className="blur-button"> Use Case </a></li>
          <li><a href="#" className="blur-button">Services</a></li>
        </ul>
      </nav>

      <div class="hero-content">
          <h1 class="hero-heading">
            <span>Enhance ✦ </span>
            <br/>
            <span>Productivity </span><span>using AI</span>
            <br/>
            <span>Automation Solutions.</span>
          </h1>
        </div>

        {/* <div class="card">
  <div class="card-content">
    </div>
  <div class="image-container">
    <img src={product} alt="Product 2" class="product-image" />
    <img src={product2} alt="Product 3" class="product-image2" />
    <img src={product3} alt="Product 3" class="product-image3" />
    <img src={product4} alt="Product 3" class="product-image4" />
  </div>
</div>   */}


<p class="hero-paragraph">
                Automate time-consuming tasks, streamline workflows,
                 and reclaim your focus with your own intelligent Al. 
     </p>
     <button class="copy-email-button">
    {/* <img src={stars} alt="stars Icon" className="stars-icon" /> */}
    COPY EMAIL
  </button>
    </section>
  );
};

export default HeroSection;
