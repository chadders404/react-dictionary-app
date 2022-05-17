import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics);
  if (props.phonetics) {
    return <div className="phonetics">Loading phonetics...</div>;
  } else {
    return null;
  }
}
