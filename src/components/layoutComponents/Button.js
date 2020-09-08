import React from "react";
import "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button(props) {
  return (
    <div className="btn-holder btn">
      <button onClick={props.click} className={`main-btn ${props.cl}`}>
        <span>
          <FontAwesomeIcon
            icon={props.icon}
            className={`btn-icon-offset ${props.cl}`}
          />
        </span>
        {props.btn}
      </button>
    </div>
  );
}
