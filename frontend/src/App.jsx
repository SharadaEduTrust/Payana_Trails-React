import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/common/layout/Layout";
import Home from "./pages/Home";
import Journeys from "./pages/Journeys";
import PayanaWay from "./pages/PayanaWay";
import Stories from "./pages/Stories";
import Connect from "./pages/Connect";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journeys" element={<Journeys />} />
          <Route path="/payana-way" element={<PayanaWay />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
