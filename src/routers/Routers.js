import React from 'react';
import {Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import ProductDetails from "../pages/ProductDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Routers = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="shop" element={<Shop/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="checkout" element={<Checkout/>} />
        <Route path="shop/:id" element={<ProductDetails/>} />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup/>} />
    </Routes>
  )
}

export default Routers
