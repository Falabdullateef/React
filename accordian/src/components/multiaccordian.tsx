import React, { useState } from "react";
import data from "./data.ts";
import "./../App.css";

const multiaccordian = () => {
  function handleSelection(id: string) {}
  const [multiple, setmultiple] = useState([]);
  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={() => {
                  handleSelection(dataItem.id);
                }}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              <div className="answer">{dataItem.answer}</div>
            </div>
          ))
        ) : (
          <div> No data found</div>
        )}
      </div>
    </div>
  );
};

export default multiaccordian;
