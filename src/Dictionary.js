import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001f338b99ebbc94002a64ab528bb814035";

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`;

    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div></div>
        <div>
          <section>
            <h1>What word would you like to look up?</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                onChange={handleKeywordChange}
                placeholder={props.defaultKeyword}
              />
            </form>
            <div className="hint">
              Try searching: sunset, chemical, eclipse...
            </div>
          </section>
        </div>
        <div>
          <Results results={results} />
          <Photos photos={photos} />
        </div>
        <div></div>
        <p>
          Open source code on{" "}
          <a href="https://github.com/chadders404/react-dictionary-app">
            Github
          </a>
          👾
        </p>
      </div>
    );
  } else {
    load();
  }
}
