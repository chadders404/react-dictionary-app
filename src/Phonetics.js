import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetic);
  if (props.phonetic) {
    return <div className="phonetics">Loading phonetics...</div>;
  } else {
    return null;
  }
}
