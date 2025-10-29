import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header.jsx';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.jsx';
import AppDownload from '../../components/AppDownload/AppDownload.jsx';
import { useNavigate } from "react-router-dom"; // 👈 Add this

const Home = ({ searchTerm }) => {
  const [category, setCategory] = useState("All");
  const navigate = useNavigate(); // 👈 React Router navigation hook

  const handlePartnerClick = () => {
    const confirmSwitch = window.confirm("Switch to Delivery Partner Dashboard?");
    if (confirmSwitch) navigate("/delivery");
  };

  return (
    <div className="home">
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} searchTerm={searchTerm} />
      <AppDownload />

      {/* 👇 Add this new section */}
      <div className="partner-toggle">
        <h3>Are you a delivery partner?</h3>
        <button onClick={handlePartnerClick} className="partner-btn">
          🚴‍♂️ Go to Partner Dashboard
        </button>
      </div>
    </div>
  );
};

export default Home;
