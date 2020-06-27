import React, { Component } from 'react'
import Login from './login/Login'
import Register from './register/Register'
import salat from  '../../styles/gallery/products/salat.svg'
import cheese from '../../styles/gallery/products/cheese.svg'
import bread from '../../styles/gallery/products/bread.svg'


class Auth extends Component {
    constructor(props) {
        super(props)

        this.state = {
            haveAccount:false
        }
    }
    toggleForm = () =>{
        this.setState({haveAccount:!this.state.haveAccount})
    }

    render() {
        const{haveAccount} = this.state
        return (
            <div className="auth-container">
            <img src={cheese} alt="cheese" className="cheese"/>
                    <header>
                        <h1>
                        Build your grocery list with a few clicks
                        </h1>
                        <img src={salat} alt="salat" className="salat"/>
                    </header>
                    <section className="auth-body">
                    <img src={bread} alt="bread" className="bread"/>
                        {haveAccount?<Login toggle={this.toggleForm}/> : <Register toggle={this.toggleForm}/>}
                    </section>   
            </div>
        
        )
    }
}

export default Auth