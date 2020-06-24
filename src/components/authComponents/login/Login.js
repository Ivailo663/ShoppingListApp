import React from 'react'

function Login() {
    return (
        <div className="log-reg-container">
            <h2>Log in</h2>
            <div className="form-wrapper">
                <form>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <button>Log in</button>
                </form>
            </div>
        </div>
    )
}
    
export default Login
