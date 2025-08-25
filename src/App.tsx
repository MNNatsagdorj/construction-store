import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BottomNavigation from './components/BottomNavigation';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

function App() {
  const [cartItemCount] = useState(2); // Mock data

  return (
    <Router basename="/construction-store">
      <div className="App min-h-screen bg-gray-50">
        <Header cartItemCount={cartItemCount} />
        
        <main className="pb-20 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

        <BottomNavigation cartItemCount={cartItemCount} />
      </div>
    </Router>
  );
}

export default App;
