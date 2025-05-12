import { useState } from "react";
import "../App.css";
import data from "./data";
const Accordian = () => {
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
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              className={selected === dataItem.id ? "item active" : "item"}
              key={dataItem.id}
            >
              <div
                onClick={() => {
                  handlePlusClick(dataItem.id);
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

export default Accordian;
