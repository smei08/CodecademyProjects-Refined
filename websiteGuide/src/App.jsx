import { useState } from "react";
import "./App.css";
// import Intro from "./components/Intro";
import Colors from "./components/Colors";
import Fonts from "./components/Fonts";

function App() {
  return (
    <div className="site-container">
      <h1>My Webiste Style Guide Template</h1>
      {/* <Intro /> */}
      {/* <Logo /> */}
      <Colors />
      <Fonts />
      {/* <Mockups /> */}
    </div>
  );
}

export default App;
