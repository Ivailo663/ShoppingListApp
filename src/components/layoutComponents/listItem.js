import React, { useState } from "react";
import eggs from "../../styles/gallery/products/eggs.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import EditItem from "./EditItem";

function ListItem(props) {
  const [controllsOpen, setControllsOpen] = useState(false);
  const [list, setList] = useState([{ name: "ivaylo" }, { name: "dimitar" }]);
  return (
    <>
      <div className="list-item-container">
        {controllsOpen ? (
          <EditItem close={() => setControllsOpen(false)} />
        ) : (
          <>
            <div className="item-body">
              <img src={eggs} alt="" />
              <div className="item-description-holder">
                <div className="item-name">
                  <h3>Eggs</h3>
                  <span>(2x)</span>
                </div>

                <div className="timestamp-holder">
                  <p>
                    <strong className="created">Created:</strong>2 mins ago by{" "}
                    <strong className="creator">@me</strong>
                  </p>
                </div>
                <div className="notes-wrapper">
                  <p className="notes">
                    <strong>Notes:</strong>
                  </p>
                  <div className="">
                    <span>
                      <FontAwesomeIcon
                        icon="sticky-note"
                        className="sticky-note"
                      />
                    </span>
                    <span>
                      <FontAwesomeIcon
                        icon="sticky-note"
                        className="sticky-note"
                      />
                    </span>
                    <span>
                      <FontAwesomeIcon
                        icon="sticky-note"
                        className="sticky-note"
                      />
                    </span>
                  </div>
                </div>
              </div>

              <FontAwesomeIcon
                icon={["far", "check-circle"]}
                className="check-circle"
              />
              <div
                className="edit-list-item-holder btn"
                onClick={() => setControllsOpen(true)}
              >
                <FontAwesomeIcon icon="pencil-alt" className="edit-item" />
              </div>
            </div>
          </>
        )}
      </div>
    </>
    // list.map((el, index) => <h1 key={index}>{el.name}</h1>)
  );
}

export default ListItem;
