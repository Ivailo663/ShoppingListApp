import React, { useState } from "react";
import { connect } from "react-redux";
import { userAuthActions } from "../../actions";

function Register(props) {
  const [user, setUsername] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const collectUserInput = (event) => {
    const { name, value } = event.target;
    setUsername({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    //removing default behavior
    props.registerUser(user);
    e.preventDefault();
  };
  return (
    <div className="form-container">
      <h2>Register</h2>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="input-holder">
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={collectUserInput}
            />
          </div>

          <div className="input-holder">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={collectUserInput}
            />
          </div>

          <div className="input-holder">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={collectUserInput}
            />
          </div>
          <div className="input-holder">
            <input
              type="password"
              name="rePassword"
              placeholder="Repeat password"
              onChange={collectUserInput}
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

const actionCreator = {
  registerUser: userAuthActions.registerUser,
};

export default connect(null, actionCreator)(Register);
