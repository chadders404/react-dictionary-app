import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <section className="photos">
        <div className="photoSubgrid">
          {props.photos.map(function (photo, index) {
            return (
              <a
                href={photo.src.original}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                <img
                  src={photo.src.landscape}
                  className="img-fluid"
                  alt="images provided by Pexels"
                />
              </a>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
