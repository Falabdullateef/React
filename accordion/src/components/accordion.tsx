import React from "react";
import data from "./data";
const Accordion = () => {
  return (
    <div>
      <div>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
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
