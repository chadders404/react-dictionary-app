import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetic);
  if (props.phonetic) {
    return (
      <div className="phonetics">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
        <br />
        {props.phonetic.text}
      </div>
    );
  } else {
    return null;
  }
}
