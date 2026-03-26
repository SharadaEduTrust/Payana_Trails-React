import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/common/layout/Layout";
import Home from "./pages/Home";
import Journeys from "./pages/Journeys";
import PayanaWay from "./pages/PayanaWay";
import Stories from "./pages/Stories";
import Connect from "./pages/Connect";

// Import standard journey sections
import Wildlife from "./components/sections/Journey/Wildlife";
import Heritage from "./components/sections/Journey/Heritage";
import Cultural from "./components/sections/Journey/Cultural";

// Import Destinations
import Destinations from "./components/sections/Journey/Destinations";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Main Journeys Page */}
          <Route path="/journeys" element={<Journeys />} />

          {/* Journey Types */}
          <Route path="/journeys/wildlife" element={<Wildlife />} />
          <Route path="/journeys/heritage" element={<Heritage />} />
          <Route path="/journeys/cultural" element={<Cultural />} />

          {/* Destinations */}
          <Route path="/journeys/destinations" element={<Destinations />} />

          {/* Other Pages */}
          <Route path="/payana-way" element={<PayanaWay />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
