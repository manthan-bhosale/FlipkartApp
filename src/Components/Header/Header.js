import React from 'react';
import './Header.css';
import { FaSistrix } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import MoreT from './MoreT';
import LoginT from './LoginT';
import 'tippy.js/themes/light.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();

  const counter = useSelector(state => state.AddToCart.counter);

  const onClick1 = () => {
    navigate('/becomeseller');
  };

  return (
    <div className="header">
      <div className="header-logo">
        <img
          src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt="Flipkart Logo"
        />
        <div className="header-logo1">
          <span className="header-logo1-explore">Explore</span>
          <span className="header-logo1-plus">Plus</span>
          <span>
            <img
              width="10"
              src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
              alt="Explore"
            />
          </span>
        </div>
      </div>

      <div className="header-search">
        <input
          type="text"
          className="header-search1"
          placeholder="Search for products, brands and more"
        ></input>
        <span className="search-icon">
          <FaSistrix />
        </span>
      </div>

      <div className="header-login">
        <Tippy theme="light" content={<LoginT></LoginT>} interactive={true}>
          <button>Login</button>
        </Tippy>
      </div>

      <div className="header-seller">
        <a onClick={() => onClick1()}>Become a Seller </a>
      </div>

      <div className="header-more">
        <Tippy theme="light" content={<MoreT></MoreT>} interactive={true}>
          <span>More</span>
        </Tippy>

        <FaChevronDown />
      </div>

      <div
        className="header-cart"
        onClick={() => {
          navigate('/cart');
        }}
      >
        <FaShoppingCart />
        <p>Cart</p>
        <span className="counter"> {counter} </span>
      </div>
    </div>
  );
};

export default Header;
