import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
         
          <li>
            <strong>Github Repo:</strong> {props.github}
          </li>
          <li>
            <strong>Deployed Page:</strong> {props.deployed}
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Card;
