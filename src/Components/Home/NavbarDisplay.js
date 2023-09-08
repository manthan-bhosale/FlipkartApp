import React from 'react';

import { useNavigate } from 'react-router-dom';

function NavbarDisplay({ data, index }) {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="data-img"
        key={index}
        onClick={() => {
          navigate('/category');
        }}
      >
        <a className="nav-link">
          <img
            src={data.url}
            alt="nav"
            style={{
              width: '64px',
            }}
          />
          <p className="data-txt"> {data.text} </p>
        </a>
      </div>
    </div>
  );
}
export default NavbarDisplay;
