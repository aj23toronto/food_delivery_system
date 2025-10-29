import React from 'react';
import './Header.css';

const Header = () => {
  const handleViewMenu = () => {
    const exploreMenuSection = document.getElementById('explore-menu');
    if (exploreMenuSection) {
      exploreMenuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes. 
          Our mission is to satisfy your cravings and serve you delicious meals 
          whenever you want.
        </p>
        <button onClick={handleViewMenu}>View Menu</button> {/* 👈 added onClick */}
      </div>
    </div>
  );
};

export default Header;
