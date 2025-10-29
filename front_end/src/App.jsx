import React, { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Contact from "./pages/contactus/ContactUs";
import LoginPopup from "./components/LoginPopup/LoginPopup";

// Delivery Pages
import DeliveryLayout from "./pages/DeliveryPartner/DeliveryLayout";
import DeliveryHome from "./pages/DeliveryPartner/DeliveryHome";
import DeliveryHistory from "./pages/DeliveryPartner/DeliveryHistory";
import DeliveryProfile from "./pages/DeliveryPartner/DeliveryProfile";
import DeliveryEarnings from "./pages/DeliveryPartner/DeliveryEarnings";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();

  // Routes where customer navbar should NOT show
  const hideNavbarRoutes = ["/delivery", "/delivery/history", "/delivery/profile", "/delivery/earnings"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

      <div className="app">
        {/* Conditionally render customer navbar */}
        {!shouldHideNavbar && <Navbar setShowLogin={setShowLogin} />}

        <Routes>
          {/* Customer Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/contact" element={<Contact />} />

          {/* Delivery Partner Nested Routes */}
          <Route path="/" element={<Home />} /> // 👈 user home first (default)
          <Route path="/delivery" element={<DeliveryLayout />}>
          <Route index element={<DeliveryHome />} />
          <Route path="history" element={<DeliveryHistory />} />
          <Route path="profile" element={<DeliveryProfile />} />
          <Route path="earnings" element={<DeliveryEarnings />} />
        </Route>


          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
