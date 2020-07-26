import React, { Component } from 'react'
import ListItem from '../layoutComponents/listItem'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";

class Main extends Component  {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="list-top-container">
                <div className="head">
                </div>

                {/* TODO: make that component starting point for toggling all other components  */}


                <div className="white-board">
                    <div className="list-items-container">
                        <ListItem/>
                    </div>
                    <div className="create-list-item-holder">
                        <FontAwesomeIcon icon="plus" className="create-list-item"/> 
                    </div>
                </div>
            </div>
        )
    }
}

export default Main