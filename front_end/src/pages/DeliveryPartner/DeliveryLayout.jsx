import React, { useState } from "react";
import "./DeliveryLayout.css";
import DeliverySidebar from "./DeliverySidebar";
import DeliveryHome from "./DeliveryHome";
import DeliveryHistory from "./DeliveryHistory";
import DeliveryEarnings from "./DeliveryEarnings";
import DeliveryProfile from "./DeliveryProfile";

const DeliveryLayout = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "history":
        return <DeliveryHistory />;
      case "earnings":
        return <DeliveryEarnings />;
      case "profile":
        return <DeliveryProfile />;
      default:
        return <DeliveryHome />;
    }
  };

  return (
    <div className="delivery-layout">
      {/* Sidebar */}
      <div className="delivery-sidebar">
        <h3>Partner Panel</h3>
        <div className="delivery-menu">
          <button
            className={activeTab === "home" ? "active" : ""}
            onClick={() => setActiveTab("home")}
          >
            🏍️ Active Orders
          </button>
          <button
            className={activeTab === "history" ? "active" : ""}
            onClick={() => setActiveTab("history")}
          >
            📦 History
          </button>
          <button
            className={activeTab === "earnings" ? "active" : ""}
            onClick={() => setActiveTab("earnings")}
          >
            💰 Earnings
          </button>
          <button
            className={activeTab === "profile" ? "active" : ""}
            onClick={() => setActiveTab("profile")}
          >
            👤 Profile
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="delivery-main">{renderContent()}</div>
    </div>
  );
};

export default DeliveryLayout;
