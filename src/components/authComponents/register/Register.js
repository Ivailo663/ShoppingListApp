import React from 'react'

function Register() {
    return (
        <div className="form-container">
        <h2>Register</h2>
        <div className="form-wrapper">
            <form>
                
               <div>
                <input type="password" name="password" placeholder="Password"/>
        
                </div>
                
               <div>
               <input type="text" name="firstName" placeholder="First name"/>
               </div>
                    
          

                <button>Submit</button>
            </form>
        </div>
    </div>
    )
}   

export default Register
