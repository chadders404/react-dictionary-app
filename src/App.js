import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="column1"></div>
      <div className="column2">
        <header className="App-header">
          <img
            className="dictionaryLogo"
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/035/070/original/Dictionary_Logo-01.png?1653339338"
            alt="Dictionary"
          />
        </header>

        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
      </div>
      <div className="column3"></div>
    </div>
  );
}
