import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Catalog from './components/Catalog';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Navbar from './components/Navbar'
import { CartProvider } from './components/CartContext';
import OrderConfirmation from './components/OrderConformation';
// import AdminDashboard from './components/AdminDashboard';
import 'aos/dist/aos.css';
import './components/style/style.css'



function App() {
  return (
   <CartProvider>
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        {/* <Route path="/admin" element={<AdminDashboard />} /> */}
      </Routes>
    </Router>
   </CartProvider>
  );
}

export default App;