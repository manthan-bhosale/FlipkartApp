import React, { useEffect } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryList } from '../../actions/CategoryDisplay';
import NavbarDisplay from './NavbarDisplay';

const Navbar = () => {
  const dispatch = useDispatch();
  const category = useSelector(state => state.CategoryDisplay.category);

  useEffect(() => {
    dispatch(getCategoryList());
  }, [dispatch]);

  return (
    <div className="navbar">
      {category.map((data, index) => (
        <NavbarDisplay key={index} data={data} />
      ))}
    </div>
  );
};
export default Navbar;
