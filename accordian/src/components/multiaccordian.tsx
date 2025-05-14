import React, { useState } from "react";
import data from "./data"; // Assuming data.ts is in the same folder
import "./../App.css"; // Make sure path is correct if App.css is in src

interface MultiAccordianProps {
  onToggleMode: () => void;
}

const MultiAccordian: React.FC<MultiAccordianProps> = ({ onToggleMode }) => {
  const [multiple, setMultiple] = useState<string[]>([]);

  function handleMultiSelection(getCurrentId: string) {
    setMultiple((prevMultiple) => {
      const cpyMultiple = [...prevMultiple];
      const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

      if (findIndexOfCurrentId === -1) {
        // if not already in the array
        cpyMultiple.push(getCurrentId);
      } else {
        // if already in the array, remove it
        cpyMultiple.splice(findIndexOfCurrentId, 1);
      }
      return cpyMultiple;
    });
  }

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              className={`item ${
                multiple.includes(dataItem.id) ? "active" : ""
              }`}
              key={dataItem.id}
            >
              <div
                onClick={() => handleMultiSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>{multiple.includes(dataItem.id) ? "-" : "+"}</span>
              </div>
              {multiple.includes(dataItem.id) && (
                <div className="answer">{dataItem.answer}</div>
              )}
            </div>
          ))
        ) : (
          <div> No data found</div>
        )}
      </div>
      <div className="togglemulti">
        <button onClick={onToggleMode}>Enable Single Selection</button>
      </div>
    </div>
  );
};

export default MultiAccordian;
