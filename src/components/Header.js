import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // State to manage user login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Simulate signup confirmation
  const handleSignup = () => {
    setIsLoggedIn(true);
  };

  return (
    <header className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <div className="lilo">
          {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/signup" onClick={handleSignup}>
              Signup
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
