import { morningFlow } from "./flows/morningFlow";

function App() {
  return (
    <div>
      <h1>🇮🇷 عهد ایرانی</h1>

      <h2>
        {morningFlow.text}
      </h2>

      <p>
        نسخه صفر
      </p>

      {
        morningFlow.options.map((option) => (
          <button key={option.next}>
            {option.text}
          </button>
        ))
      }

    </div>
  );
}

export default App;