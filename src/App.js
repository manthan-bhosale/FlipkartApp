import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import Category from './pages/Category';
import Signup from './pages/Signup';
import BecomeSeller from './pages/BecomeSeller';
import CategoryItems from './pages/CategoryItems';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/category" element={<Category />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/becomeseller" element={<BecomeSeller />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/categoryitems/:item" element={<CategoryItems />} />
      </Routes>
    </div>
  );
}

export default App;
