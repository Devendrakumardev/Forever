import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pases/Login";
import Orders from "./Pases/Orders";
import Aboute from "./Pases/Aboute";
import Home from "./Pases/Home";
import Cart from "./Pases/Cart";
import Collection from "./Pases/Collection";
import Contact from "./Pases/Contact";
import PlaceOrder from "./Pases/PlaceOrder";
import Product from "./Pases/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="px-4 sm:px-[7vw] lg:px=[9vw]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboute />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/place-orders" element={<PlaceOrder />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
