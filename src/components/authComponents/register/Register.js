import React from 'react'

function Register() {
    return (
        <div className="log-reg-container">
        <h2>Register</h2>
        <div className="form-wrapper">
            <form>
                
{/*       
                <div className="input-holder">
                <input type="text" name="firstName" placeholder="First name"/>
                </div>
                <div  className="input-holder">
                <input type="text" name="lastName" placeholder="Last name"/>
                </div>
               <div  className="input-holder">
               <input type="email" name="email" placeholder="E-mail"/>
               </div>
                <div  className="input-holder">
                <input type="password" name="password" placeholder="Password"/>
                </div>
               <div  className="input-holder">
               <input type="password" name="repeat-password" placeholder="Repeat password"/>
               </div> */}
               {/* <div className="input-holder">
               <input type="text" name="firstName" placeholder="First name"/>
               </div> */}
               <div className="input-holder">
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    </div>
    )
}

export default Register
