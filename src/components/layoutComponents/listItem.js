import React from "react";
import eggs from "../../styles/gallery/products/eggs.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";

function ListItem(props) {
  return (
    <>

<div className="list-item-wrapper">
        <div className="delete-list-item-holder">
          <FontAwesomeIcon icon="times" className="delete-list-item" />
        </div>

        <span className="delete-item"></span>
        <div className="item-header">
        <img src={eggs} alt="" />
          <div className="item-description-holder">
           
            <div className="item-info">
              <h3>Eggs</h3>
              <div className="edit-quantity">
            <label for="quantity"></label>
            <div className="quantity-body">
              <button>
              <span>
              <FontAwesomeIcon icon="minus" className="" />
              </span>
               
              </button>
              <input id="quantity" type="number" placeholder="2" />
              <button>
              <span>
              <FontAwesomeIcon icon="plus" className="" />
              </span>
                
              </button>
            </div>
          </div>
              {/* <span>Notes</span>
              <ul className="notes">
                <li>
                  <span>
                    <FontAwesomeIcon
                      icon="sticky-note"
                      className="sticky-note-i"
                    />
                  </span>
                </li>
              </ul> */}
            </div>
          </div>
          <FontAwesomeIcon icon={['far','check-circle']} className="check-circle" />
        </div>
        <div className="item-bottom">
          <FontAwesomeIcon icon="pencil-alt" className="" />

        </div>
      </div>
    </>
  );
}

export default ListItem;
