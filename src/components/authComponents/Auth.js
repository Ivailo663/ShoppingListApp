import React, { Component } from 'react'
import Login from './login/Login'
import Register from './register/Register'


class Auth extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="auth-container">
                    <header>
                        <h1>
                        Build your grocery list with a few clicks
                        </h1>
                    </header>
                    <section className="auth-body">
                        {!true?<Login/>: <Register/>}
                    </section>   
            </div>
        
        )
    }
}

export default Auth