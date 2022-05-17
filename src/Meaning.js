import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="meaning">
      <div>
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div>
                <br />
                {definition.definition}
                <br />
                <em>{definition.example}</em>
                <br />
              </div>
            </div>
          );
        })}
      </div>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
