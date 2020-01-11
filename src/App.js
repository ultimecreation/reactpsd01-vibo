import React from "react";
import "./App.scss";
import Home from "./Component/Home";
import About from "./Component/About";
import Application from "./Component/Application";
import Info from "./Component/Info";
import Footer from "./Component/Footer";
import MobileNavbar from "./Component/MobileNavbar";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MobileNavbar />
        <Home />
        <About />
        <Application />
        <Info />
        <Footer />
      </header>
    </div>
  );
}

export default App;
