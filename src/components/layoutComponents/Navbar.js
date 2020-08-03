import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
function Navbar() {
    return (
    <div className="navbar">
    <span>
    <FontAwesomeIcon icon="angle-left" className="nav-item"/>
    </span>
        <ul>
            <li> <FontAwesomeIcon icon={['far','clipboard']} className="nav-item"/></li>
            <li>
                <div className="create-list-item-holder" onClick={()=>props.switch("create-item")}>
                    <FontAwesomeIcon icon="plus" className="create-list-item"/> 
                </div>
            </li>
            <li><FontAwesomeIcon icon={['far','user']} className="nav-item"/></li>
        </ul>
        <div>
        <FontAwesomeIcon icon="bars" className="nav-item"/>
        </div>
    </div>
       
    )
}

export default Navbar
