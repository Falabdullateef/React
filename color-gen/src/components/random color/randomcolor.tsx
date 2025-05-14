import { useState } from "react";

const randomcolor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtil(length: number) {
    return Math.floor(Math.random() * length);
  }
  function handleGenerateRandomColor(mode: string) {
    if (mode === "hex") {
      const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      let hexColor = "#";

      for (let i = 0; i < 6; i++) {
        hexColor += hex[randomColorUtil(hex.length)];
      }
      setColor(hexColor);
    } else {
      let red = randomColorUtil(225);
      let green = randomColorUtil(225);
      let blue = randomColorUtil(225);
      let rgbColor = `rgb(${red}, ${green}, ${blue})`;
      setColor(rgbColor);
      console.log(rgbColor);
    }
  }
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={() =>
          handleGenerateRandomColor(typeOfColor === "hex" ? "hex" : "rgb")
        }
      >
        Generate Random Color
      </button>
    </div>
  );
};

export default randomcolor;
