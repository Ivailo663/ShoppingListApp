import React from "react";
import eggs from "../../../styles/gallery/products/eggs.png";
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
          <div className="item-description-holder">
            <img src={eggs} alt="" />
            <div className="item-info">
              <h3>Eggs</h3>
              <span>Notes</span>
              <ul className="notes">
                <li>
                  <span>
                    <FontAwesomeIcon
                      icon="sticky-note"
                      className="sticky-note-i"
                    />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <FontAwesomeIcon icon="check-circle" className="check-circle" />
        </div>
        <div className="item-bottom">
          <FontAwesomeIcon icon="pencil-alt" className="" />

          <div className="edit-quantity">
            <label for="quantity">Quantity</label>
            <div className="quantity-body">
              <button>
                <FontAwesomeIcon icon="minus" className="" />
              </button>
              <input id="quantity" type="number" placeholder="2" />
              <button>
                <FontAwesomeIcon icon="plus" className="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="list-item-wrapper">
        <div className="delete-list-item-holder">
          <FontAwesomeIcon icon="times" className="delete-list-item" />
        </div>
        <span className="delete-item"></span>
        <div className="item-header">
          <div className="item-description-holder">
            <img src={eggs} alt="" />
            <div className="item-info">
              <h3>Eggs</h3>
              <span>Notes</span>
              <ul className="notes">
                <li>
                  <span>
                    <FontAwesomeIcon
                      icon="sticky-note"
                      className="sticky-note-i"
                    />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <FontAwesomeIcon icon="check-circle" className="check-circle" />
        </div>
        <div className="item-bottom">
          <FontAwesomeIcon icon="pencil-alt" className="" />

          <div className="edit-quantity">
            <label for="quantity">Quantity</label>
            <div className="quantity-body">
              <button>
                <FontAwesomeIcon icon="minus" className="" />
              </button>
              <input id="quantity" type="number" placeholder="2" />
              <button>
                <FontAwesomeIcon icon="plus" className="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="list-item-wrapper">
        <div className="delete-list-item-holder">
          <FontAwesomeIcon icon="times" className="delete-list-item" />
        </div>
        <span className="delete-item"></span>
        <div className="item-header">
          <div className="item-description-holder">
            <img src={eggs} alt="" />
            <div className="item-info">
              <h3>Eggs</h3>
              <span>Notes</span>
              <ul className="notes">
                <li>
                  <span>
                    <FontAwesomeIcon
                      icon="sticky-note"
                      className="sticky-note-i"
                    />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <FontAwesomeIcon icon="check-circle" className="check-circle" />
        </div>
        <div className="item-bottom">
          <FontAwesomeIcon icon="pencil-alt" className="" />

          <div className="edit-quantity">
            <label for="quantity">Quantity</label>
            <div className="quantity-body">
              <button>
                <FontAwesomeIcon icon="minus" className="" />
              </button>
              <input id="quantity" type="number" placeholder="2" />
              <button>
                <FontAwesomeIcon icon="plus" className="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="list-item-wrapper">
        <div className="delete-list-item-holder">
          <FontAwesomeIcon icon="times" className="delete-list-item" />
        </div>
        <span className="delete-item"></span>
        <div className="item-header">
          <div className="item-description-holder">
            <img src={eggs} alt="" />
            <div className="item-info">
              <h3>Eggs</h3>
              <span>Notes</span>
              <ul className="notes">
                <li>
                  <span>
                    <FontAwesomeIcon
                      icon="sticky-note"
                      className="sticky-note-i"
                    />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <FontAwesomeIcon icon="check-circle" className="check-circle" />
        </div>
        <div className="item-bottom">
          <FontAwesomeIcon icon="pencil-alt" className="" />

          <div className="edit-quantity">
            <label for="quantity">Quantity</label>
            <div className="quantity-body">
              <button>
                <FontAwesomeIcon icon="minus" className="" />
              </button>
              <input id="quantity" type="number" placeholder="2" />
              <button>
                <FontAwesomeIcon icon="plus" className="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="list-item-wrapper">
        <div className="delete-list-item-holder">
          <FontAwesomeIcon icon="times" className="delete-list-item" />
        </div>
        <span className="delete-item"></span>
        <div className="item-header">
          <div className="item-description-holder">
            <img src={eggs} alt="" />
            <div className="item-info">
              <h3>Eggs</h3>
              <span>Notes</span>
              <ul className="notes">
                <li>
                  <span>
                    <FontAwesomeIcon
                      icon="sticky-note"
                      className="sticky-note-i"
                    />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <FontAwesomeIcon icon="check-circle" className="check-circle" />
        </div>
        <div className="item-bottom">
          <FontAwesomeIcon icon="pencil-alt" className="" />
          <div className="edit-quantity">
            <label for="quantity">Quantity</label>
            <div className="quantity-body">
              <button>
                <FontAwesomeIcon icon="minus" className="" />
              </button>
              <input id="quantity" type="number" placeholder="2" />
              <button>
                <FontAwesomeIcon icon="plus" className="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListItem;
