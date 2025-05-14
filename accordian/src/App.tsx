import React, { useState } from "react";
import "./App.css";
import Accordian from "./components/accordian"; // Assuming this is your single-select
import MultiAccordian from "./components/multiaccordian"; // Assuming this is your multi-select

function App() {
  const [isMultiSelectionMode, setIsMultiSelectionMode] = useState(false);

  const toggleMode = () => {
    setIsMultiSelectionMode((prevMode) => !prevMode);
  };

  return (
    <div className="App">
      {isMultiSelectionMode ? (
        <MultiAccordian onToggleMode={toggleMode} />
      ) : (
        <Accordian onToggleMode={toggleMode} />
      )}
    </div>
  );
}

export default App;
