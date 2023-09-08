import React from 'react';
import { BiSolidUserCircle } from 'react-icons/bi';
import { BiSolidPlusCircle } from 'react-icons/bi';
import { BiSolidPurchaseTag } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import { AiFillGift } from 'react-icons/ai';
import { RiWallet3Fill } from 'react-icons/ri';
import './LoginT.css';
import { useNavigate } from 'react-router-dom';

const LoginT = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/signup');
  };

  return (
    <div className="logint">
      <div className="signupt_in">
        <p style={{ fontWeight: 'bold', marginLeft: '-2px' }}>New Customer?</p>
        <p
          onClick={() => onClick()}
          className="signupt_in_link"
          style={{ color: '#2874f0', fontWeight: 'bold', marginLeft: '45px' }}
        >
          Sign Up
        </p>
      </div>
      <hr />

      <div className="logint_in">
        <span className="myicons">
          <BiSolidUserCircle />
        </span>

        <p>My Profile</p>
      </div>
      <hr />

      <div className="logint_in">
        <span className="myicons">
          <BiSolidPlusCircle />
        </span>

        <p>Flipkart Plus Zone</p>
      </div>
      <hr />

      <div className="logint_in">
        <span className="myicons">
          <BiSolidPurchaseTag />
        </span>

        <p>Orders</p>
      </div>
      <hr />

      <div className="logint_in">
        <span className="myicons">
          <AiFillHeart />
        </span>

        <p>Wishlist</p>
      </div>
      <hr />

      <div className="logint_in">
        <span className="myicons">
          <AiFillGift />
        </span>

        <p>Rewards</p>
      </div>
      <hr />

      <div className="logint_in">
        <span className="myicons">
          <RiWallet3Fill />
        </span>

        <p>Gift Cards</p>
      </div>
    </div>
  );
};

export default LoginT;
