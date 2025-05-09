import { useState } from "react";
import Toggle from "./components/Toggle";

const App = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      console.log("Toggle State: ON");
    } else {
      console.log("Toggle State: OFF");
    }
  };
  return (
    <div className="toggle">
      <Toggle isChecked={isChecked} onToggle={handleToggle}></Toggle>
    </div>
  );
};

export default App;
