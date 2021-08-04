import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Alert } from "reactstrap";
// import { FacebookLoginButton } from "react-social-login-buttons";
// import logo from "./logo.svg";
import {
  FlexContainer,
  LoginContainer,
  HeadingH1,
} from "../design/LoginElement";

import { withRouter } from "react-router-dom";

import { SignUpLink } from "./SignUp";
import { PasswordForgetLink } from "./PasswordForget";
import { auth, db } from "../firebase";
import * as routes from "../constants/routes";

const SignInPage = ({ history }) => {
  return (
    <LoginContainer>
    <FlexContainer>
      <HeadingH1>Sign In</HeadingH1>

        <SignInForm history={history} />
        <SignUpLink />
        <PasswordForgetLink />
        </FlexContainer>
      </LoginContainer>

  );
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
  showingAlert: false,
};

class SignInForm extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = (event) => {
    const { email, password } = this.state;

    const { history } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch((error) => {
        this.setState(byPropKey("error", error));
        this.timer(); //defined below
      });

    event.preventDefault();
  };

  facebookLogin = () => {
    const { history } = this.props;
    auth
      .doFacebookSignIn()
      .then((authUser) => {
        console.log("authUser", authUser);

        db.doCreateUser(
          //store some info from facebook into the firebase db
          authUser.user.uid,
          authUser.user.displayName,
          authUser.user.email
        )
          .then(() => {
            // this.setState({
            //   ...INITIAL_STATE
            // });
            history.push(routes.HOME); //redirects to Home Page
          })
          .catch((error) => {
            this.setState(byPropKey("error", error));
          });
      })
      .catch((error) => {
        this.setState(byPropKey("error", error));
      });
  };

  timer = () => {
    this.setState({
      showingAlert: true,
    });

    setTimeout(() => {
      this.setState({
        showingAlert: false,
      });
    }, 4000);
  };

  render() {
    const { email, password, error, showingAlert } = this.state;

    const isInvalid = password === "" || email === "";

    return (

<div>

      {showingAlert && (
            <Alert color="danger" onLoad={this.timer}>
              {error.message}
            </Alert>
          )}
          <Form onSubmit={this.onSubmit}>
            <FormGroup className="mt-5">
              {/* <Label for="exampleEmail">Email</Label> */}
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter your email"
                value={email}
                onChange={(event) =>
                  this.setState(byPropKey("email", event.target.value))
                }
              />
            </FormGroup>
            <FormGroup className="mt-5">
              {/* <Label for="examplePassword">Password</Label> */}
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="enter your password"
                value={password}
                onChange={(event) =>
                  this.setState(byPropKey("password", event.target.value))
                }
              />
            </FormGroup>

            <div className="text-center mt-5">
              <Button disabled={isInvalid} type="submit" color="primary">
                Sign In
              </Button>
            </div>
          </Form>

          <hr />

          {/* <FacebookLoginButton onClick={this.facebookLogin} /> */}
          {/* <button onClick={this.facebookLogin}>Login with Facebook</button> */}
</div>
    );


  }
}

export default withRouter(SignInPage);

export { SignInForm };
