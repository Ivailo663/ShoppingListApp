import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import eggs from "../styles/gallery/products/eggs.png";
import "@fortawesome/free-solid-svg-icons";
import { createItemActions, getFoodData } from "../actions";
import Button from "../components/layoutComponents/Button";
import NoResults from "../components/layoutComponents/NoResults";
import { call } from "file-loader";

const CreateItem = (props) => {
  const [input, setInput] = useState(null);
  const inputRef = useRef();

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (inputRef.current.value === input) props.getFoodData(input);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [input, inputRef]);
  const capitalize = (food) => {
    if (typeof food !== "string") return "";
    return food.charAt(0).toUpperCase() + food.slice(1);
  };
  return (
    <>
      <div className="create-element">
        <div className="create-element-header">
          <Button
            icon={"chevron-left"}
            btn={"Back"}
            cl={"text-btn"}
            click={() => props.switch("board")}
          />
          <Button icon={"heart"} btn={"Favorites"} cl={"green-btn"} />
        </div>

        <form>
          <label htmlFor="search-item">
            <FontAwesomeIcon icon="search" className="search-item-icon" />
          </label>
          <input
            type="text"
            className="search-item"
            id="search-item"
            placeholder="Type the product here"
            onChange={(event) => handleChange(event)}
            ref={inputRef}
          />
        </form>
        {props.data ? (
          <>
            <div className="item-creator">
              <div className="left-part">
                <img src={props.data.img} />
              </div>
              <div className="right-part">
                <div className="description-element">
                  <label>Product:</label>
                  <p>{capitalize(props.data.food)}</p>
                  {/* <p>hello item</p> */}
                </div>
                <div className="description-element">
                  <label>Quantity:</label>
                  <input type="number " defaultValue="0" />
                </div>
                <div className="description-element">
                  <label>Priority:</label>
                  <div className="priority-toggle">
                    <FontAwesomeIcon icon="circle" className="btn" />
                  </div>
                  <label className="priority">low</label>
                </div>
              </div>
            </div>

            <div className="add-notes">
              <div
                className="add-notes-btn"
                onClick={props.openCreateNoteModal}
              >
                Click to add
                <strong>notes</strong>
              </div>
            </div>
            <Button btn={"Clear"} icon={"trash"} cl={"text-btn"} />
          </>
        ) : (
          <NoResults />
        )}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.getFoodData.data,
    component: state.routeBetweenComps.component,
  };
};
const actionCreators = {
  openCreateNoteModal: createItemActions.openCreateNoteModal,
  getFoodData,
};
export default connect(mapStateToProps, actionCreators)(CreateItem);
