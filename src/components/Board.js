import React, { useEffect } from "react";
import ListItem from "../components/layoutComponents/listItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
const Board = (props) => {
  return (
    <>
      <div className="list-items-container">
        <ListItem />
      </div>
    </>
  );
};

export default Board;
