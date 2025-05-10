import React, { useState } from "react";
import data from "./data";
const Accordion = () => {
  const [selected, setSelected] = useState<string | null>(null);

  function handlePlusClick(id: string) {
    console.log("You have clicked question: " + id);
    if (selected == id) {
      setSelected(null);
      console.log("Set Selected is: " + selected);
      return;
    }
    setSelected(id);
    console.log("Set Selected is: " + selected);
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div className="title">
                <h3>{dataItem.question}</h3>
                <span
                  onClick={() => {
                    handlePlusClick(dataItem.id);
                  }}
                >
                  +
                </span>
                {selected === dataItem.id ? (
                  <div className="answer">{dataItem.answer}</div>
                ) : null}
              </div>
            </div>
          ))
        ) : (
          <div> No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
