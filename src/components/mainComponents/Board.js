import React,{useEffect} from 'react'
import ListItem from '../layoutComponents/listItem'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
const Board = (props) => {
    return (
        <>
            <div className="list-items-container">
                <ListItem/>
                <div className="create-list-item-holder" onClick={()=>props.switch("create-item")}>
                    <FontAwesomeIcon icon="plus" className="create-list-item"/> 
                </div>
            </div>
        </>
    )
}

export default Board
