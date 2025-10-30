import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Collections from './pages/Collections.jsx';
import Exhibitions from "./pages/Exhibitions";
import Visit from './pages/Visit.jsx';
import Cart from './pages/Cart.jsx';
import Login  from './pages/Login.jsx';
import Register from './components/Register';
import Checkout from './components/Checkout';
import { CartProvider } from './context/CartContext'; 
import Success from './pages/Success';
import Cancel from './pages/Cancel.jsx';
import Profile from './pages/Profile.jsx';

// import Profile from './pages/Login.jsx';



function App() {
  return (
    <Router>
      <CartProvider> {/* ✅ Wrap all children */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/exhibitions" element={<Exhibitions />} />
        <Route path="/visit" element={<Visit/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/login' element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/profile" element={<Profile />} />


        <Route path="/checkout" element={<Checkout />} />

        {/* <Route path="/CartProvider" element={< Cart/>} /> */}
        <Route path="*" element={<Login />} /> {/* Optional fallback */}
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
      <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
