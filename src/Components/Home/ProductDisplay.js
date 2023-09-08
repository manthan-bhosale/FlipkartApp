import React from 'react';
import './ProductDisplay.css';
import { useNavigate } from 'react-router-dom';

function ProductDisplay({ item, index }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="data-img" key={index}>
        <a
          className="nav-link"
          onClick={() => {
            navigate(`/productdetails/${item.id}`);
          }}
        >
          <img src={item.image} alt="nav" width={200} height={200} />
          <p className="data-txt"> {item.title} </p>
        </a>
      </div>
    </div>
  );
}

export default ProductDisplay;
