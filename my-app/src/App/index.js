import { useState } from "react";
import PageOne from "../Components/Page_1/PageOne";
import PageTwo from "../Components/Page_2/PageTwo";
import "./index.scss";

function App() {
  const [turnOn, setTurnOff] = useState(0);

  return (
    <div>
      {turnOn === 0 ? (
        <PageOne turnOn={turnOn} setTurnOff={setTurnOff} />
      ) : (
        <PageTwo turnOn={turnOn} setTurnOff={setTurnOff} />
      )}
    </div>
  );
}

export default App;
