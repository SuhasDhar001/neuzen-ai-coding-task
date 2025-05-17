import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ user, handleLogout, cartItemCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">ShopEasy</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Products</Link>
        {user ? (
          <>
            <span className="welcome-text">Welcome, {user.name}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link">Signup</Link>
          </>
        )}
        <Link to="/cart" className="cart-icon">
          <i className="fa fa-shopping-cart"></i>
          {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;