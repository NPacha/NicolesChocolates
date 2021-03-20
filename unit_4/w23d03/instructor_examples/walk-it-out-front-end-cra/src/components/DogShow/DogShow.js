import React from "react";
import "./DogShow.css";

function DogShow(props) {
  const { imageUrl, name, age, frequency } = props.dog;
  return (
    <div className="dog-preview">
      <img src={imageUrl} alt={name} className="dog-image" />
      <h3>{name}</h3>
      {props.isLoggedIn ? <h4>Age: {age}</h4> : ""}
      {props.isLoggedIn ? <h4>Walk Frequency: {frequency}</h4> : ""}
    </div>
  );
}

export default DogShow;
