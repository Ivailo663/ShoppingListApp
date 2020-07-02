import React from "react";

function Register(props) {
  return (
    <div className="form-container">
      <h2>Register</h2>
      <div className="form-wrapper">
        <form>
          <div className="input-holder">
            <input type="text" name="username" placeholder="username" />
          </div>

          <div className="input-holder">
            <input type="email" name="email" placeholder="E-mail" />
          </div>

          <div className="input-holder">
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div className="input-holder">
            <input
              type="password"
              name="repeat-password"
              placeholder="Repeat password"
            />
          </div>

          <button>Submit</button>
        </form>

        <p className="toggle-form" onClick={props.toggle}>
          I have an account!<strong>Log in!</strong>
        </p>
      </div>
    </div>
  );
}

export default Register;
