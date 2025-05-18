import "./App.css";
import "./ColorSwitch";

import { useState } from "react";
import ColorSwitch from "./ColorSwitch";

function App() {
  const [clicks, setClickValue] = useState(0);

  function handleClick() {
    setClickValue(clicks + 1);
  }

  function getRandomLightColor() {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
  }

  function handleBackgroundColor() {
    document.body.style.backgroundColor = getRandomLightColor();
  }
  return (
    <div style={{ width: "100%", height: "100%" }} onClick={handleClick}>
      <ColorSwitch onChangeColor={handleBackgroundColor} />
      <br />
      <br />
      <h2>Clicks on the page: {clicks}</h2>
    </div>
  );
}

export default App;
