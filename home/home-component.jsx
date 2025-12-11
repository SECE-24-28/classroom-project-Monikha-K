import React from 'react';
import { HomeStyle } from './home-style';

const ShopNow = () => {
  return (
    <HomeStyle>
      <nav>
        <img src="/logo.png" alt="logo"/><h1>Vellora Living</h1>
        <div>
          <ul>
            <a href="">Home</a>
            <a href="">Explore</a>
            <a href="">About us</a>
            <a href="">Trending</a>
            <a href="">Contact</a>

          </ul>
        </div>
        <div>
          <button className="b1">Sign In</button>
          <button className="b2">Register</button>
        </div>
      </nav>
      <div className="main">
      <div className="left">
        <div className="above">
        <h1><span>Furniture</span> That Elevates Your <span>Space</span></h1>
        <p>Crafted for comfort. Designed for modern living.</p>
        </div>
        <div className="below">
          <button className="b1">Shop Now</button>
          <button className="b2">Check New Arrival</button>
        </div>

      </div>
      <div className="right">
        <img src="/home.jpg" alt="home" />
      </div>
      </div>
    </HomeStyle>
  );
};

export default ShopNow;
