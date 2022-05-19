import React from "react";
import "./Phonetic.css";

export default function Phonetics(props) {
  if (props.phonetic) {
    return (
      <div className="phonetics">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
        <scan className="text"> {props.phonetic.text}</scan>
      </div>
    );
  } else {
    return null;
  }
}
