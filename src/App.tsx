import { morningFlow } from "./flows/morningFlow";
import { useState } from "react";


function App() {
  const [currentNodeId, setCurrentNodeId] = useState("start");
  const currentNode = morningFlow[currentNodeId];

  return (
    <div>
      <h1>🇮🇷 عهد ایرانی</h1>

      <h2>{currentNode.text}</h2>

      {currentNode.options.map((option) => (
        <button key={option.next} onClick={() => setCurrentNodeId(option.next)}>
          {option.text}
        </button>
      ))}
    </div>
  );
}

export default App;