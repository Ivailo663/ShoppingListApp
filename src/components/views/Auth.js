import React, { Component } from "react";
import Login from "../authComponents/Login";
import Register from "../authComponents/Register";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      haveAccount: false,
    };
  }
  toggleForm = () => {
    this.setState({ haveAccount: !this.state.haveAccount });
  };

  render() {
    const { haveAccount } = this.state;
    return (
      <div className="auth-container">
        <header>
          <h1>Build your grocery list with a few clicks</h1>
        </header>
        <section className="auth-body white-board">
          {haveAccount ? (
            <Login toggle={this.toggleForm} />
          ) : (
            <Register toggle={this.toggleForm} />
          )}
        </section>
      </div>
    );
  }
}

export default Auth;