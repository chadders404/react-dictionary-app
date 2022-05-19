import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="column1"></div>
      <div className="column2">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>

        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
      </div>
      <div className="column3"></div>
    </div>
  );
}
