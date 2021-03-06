import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GRoutes from "./components/GRoutes";
import { Result } from "./components/Result";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Result />
        <Footer />
      </div>
    </div>
  );
};

export default App;
