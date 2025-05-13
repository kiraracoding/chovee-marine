import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import ShoppingCart from './pages/ShoppingCart.jsx';
import SavedCart from './pages/SavedCart.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';

function AppWithRouter() {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/signup'];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/product-page" element={<ProductPage />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/saved" element={<SavedCart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <>
    <Router>
      <AppWithRouter />
    </Router>
    </>
  );
}

export default App
