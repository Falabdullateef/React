import React, { useState } from "react";
import data from "./data"; // Assuming data.ts is in the same folder
import "./../App.css"; // Make sure path is correct if App.css is in src

interface AccordianProps {
  onToggleMode: () => void;
}

const Accordian: React.FC<AccordianProps> = ({ onToggleMode }) => {
  const [selected, setSelected] = useState<string | null>(null);

  function handleSingleSelection(id: string) {
    setSelected(selected === id ? null : id);
  }

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              className={`item ${selected === dataItem.id ? "active" : ""}`}
              key={dataItem.id}
            >
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>{selected === dataItem.id ? "-" : "+"}</span>
              </div>
              {selected === dataItem.id && (
                <div className="answer">{dataItem.answer}</div>
              )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
      <div className="togglemulti">
        <button onClick={onToggleMode}>Enable Multi Selection</button>
      </div>
    </div>
  );
};

export default Accordian;
