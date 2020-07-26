import React, { Component } from 'react'
import Navbar from '../layoutComponents/Navbar'
import ListItem from './listItem/listItem'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";

class List extends Component  {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="list-top-container">
               
                <div className="head">
                <Navbar/>
                </div>
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

export default List