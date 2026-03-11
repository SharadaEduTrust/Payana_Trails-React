import React from "react";
import { BrowserRouter } from "react-router-dom"; // 1. Import BrowserRouter
import BrownBtn from "./components/common/buttons/BrownBtn";
import CreamBtn from "./components/common/buttons/CreamBtn";
import Header from "./components/common/Header";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Home />

        {/* Just some padding so the buttons aren't hidden under your sticky header */}
        <main className="p-10 flex gap-4">
          <BrownBtn text="Sign Up" />
          <CreamBtn text="Login" />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
