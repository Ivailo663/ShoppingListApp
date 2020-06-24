import React from 'react'

function Register() {
    return (
        <div className="log-reg-container">
        <h2>Register</h2>
        <div className="form-wrapper">
            {/* <form> */}
                
      
            <div className="input-holder">
                <input type="text" name="firstName" placeholder="First name"/>
            </div>
                
                
            <div className="input-holder">
                <input type="text" name="lastName" placeholder="Last name"/>
            </div>
               
                
{/*                
               <input type="email" name="email" placeholder="E-mail"/>
               
                
                <input type="password" name="password" placeholder="Password"/>
                
               
               <input type="password" name="repeat-password" placeholder="Repeat password"/>
               
            
               <input type="text" name="firstName" placeholder="First name"/> */}
               

                <button>Submit</button>
            {/* </form> */}
        </div>
    </div>
    )
}

export default Register
