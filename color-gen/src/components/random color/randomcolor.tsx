import * as React from "react";
import { useState, useEffect } from "react";
import "../../App.css";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("rgb(112, 199, 208)"); // Initial main background
  const [isCopied, setIsCopied] = useState(false);

  function randomColorUtil(length: number) {
    return Math.floor(Math.random() * length);
  }

  function generateNewColor(mode: string) {
    if (mode === "hex") {
      const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      let hexColor = "#";
      for (let i = 0; i < 6; i++) {
        hexColor += hex[randomColorUtil(hex.length)];
      }
      return hexColor;
    } else {
      let red = randomColorUtil(256);
      let green = randomColorUtil(256);
      let blue = randomColorUtil(256);
      return `rgb(${red}, ${green}, ${blue})`;
    }
  }

  function handleCopy() {
    // Copy the color value to clipboard
    navigator.clipboard
      .writeText(color)
      .then(() => {
        // Show "Copied!" message
        setIsCopied(true);

        // Reset after 2 seconds
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
        // Optionally handle errors (e.g., show error message)
      });
  }

  function handleGenerateRandomColor() {
    const newColor = generateNewColor(typeOfColor);
    setColor(newColor); // Directly set the main background color
    setIsCopied(false); // reset copied state
  }

  useEffect(() => {
    // Set an initial color on load
    const initialColor = generateNewColor(typeOfColor);
    setColor(initialColor);
  }, []); // Runs once on mount

  return (
    <div
      style={{
        background: color, // Main background
      }}
      className="main-container"
    >
      <div className="btn-container">
        <button onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button onClick={handleGenerateRandomColor}>
          Generate Random Color
        </button>
      </div>
      <div
        onClick={handleCopy}
        className={`color-info-container ${isCopied ? "copied" : ""}`}
      >
        <h1>{typeOfColor === "hex" ? "Hex Color" : "RGB Color"}</h1>
        <h2>{color}</h2>
        <div className="copy-message">Copied to clipboard!</div>
      </div>
    </div>
  );
};

export default RandomColor;
