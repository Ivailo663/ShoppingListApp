import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Board from '../mainComponents/Board'
import CreateItem from '../mainComponents/CreateItem'
import "@fortawesome/free-solid-svg-icons";

class Main extends Component  {
    constructor(props) {
        super(props)

        this.state = {
            component:"board"
        }

    }
    switchComponent = (switchTo) =>{
        this.setState({component: switchTo})
        console.log(this.state.component,"component")
    }
    displayComponents = () => {
        const {component} =  this.state

        {/* TODO: check why switch/case is not working */}

        //  switch(component){
        //      case "board":
        //         <Board switch={(switchTo)=>this.switchComponent(switchTo)}/>
        //     case "create-item":
        //          <CreateItem switch={(switchTo)=>this.switchComponent(switchTo)}/> 
        //  }

         if(component === "board"){
             return <Board switch={(switchTo)=>this.switchComponent(switchTo)}/>
         }else if(component === "create-item"){
             return <CreateItem switch={(switchTo)=>this.switchComponent(switchTo)}/> 
         }
    }
    render() {
        return (
            <div className="list-top-container">
                <div className="head">

                </div>
                
                <div className="white-board">
                    {this.displayComponents()}
               </div>
        
            </div>
        )
    }
}

export default Main