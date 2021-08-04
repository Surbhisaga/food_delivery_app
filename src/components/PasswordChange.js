// import { background } from "@chakra-ui/react";
import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Alert } from "reactstrap";
import {ForgotContainer,FlexContainer,HeadingH1} from "../design/AccountElement";

import { auth } from "../firebase";

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null,
  showingAlert: false
};

class PasswordChangeForm extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = event => {
    const { passwordOne } = this.state;
    auth
      .doPasswordChange(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })

      .catch(error => {
        this.setState(byPropKey("error", error));
        this.timer(); //show alert message for some seconds
      });

    event.preventDefault();

  };

  timer = () => {
    this.setState({
      showingAlert: true
    });

    setTimeout(() => {
      this.setState({
        showingAlert: false
      });
    }, 4000);
  };

  render() {
    const { passwordOne, passwordTwo, error, showingAlert } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

    return (
      <ForgotContainer style={{ marginTop: "40px"}}>
        <FlexContainer>
          <HeadingH1>Reset Password</HeadingH1>
        {showingAlert && (
          <Alert color="danger" onLoad={this.timer}>
            {error.message}
          </Alert>
        )}

        <Form onSubmit={this.onSubmit}>
          <FormGroup className="mt-5">
            {/* <Label for="examplePassword1">New Password</Label> */}
            <Input
              type="password"
              name="password"
              id="examplePassword1"
              placeholder="New Password"
              value={passwordOne}
              onChange={e =>
                this.setState(byPropKey("passwordOne", e.target.value))
              }
            />
          </FormGroup>
          <FormGroup className="mt-5">
            {/* <Label for="examplePassword2">Confirm Password</Label> */}
            <Input
              type="password"
              name="password"
              id="examplePassword2"
              placeholder="Confirm Password"
              value={passwordTwo}
              onChange={e =>
                this.setState(byPropKey("passwordTwo", e.target.value))
              }
            />
          </FormGroup>

          <div className="text-center mt-5">
            <Button disabled={isInvalid} type="submit" color="primary">
              Change My Password
            </Button>
          </div>
        </Form>
        </FlexContainer>
      </ForgotContainer>
    );
  }
}

export default PasswordChangeForm;

// <form onSubmit={this.onSubmit}>
//   <input
//     value={passwordOne}
//     onChange={event =>
//       this.setState(byPropKey("passwordOne", event.target.value))
//     }
//     type="password"
//     placeholder="New Password"
//   />
//   <input
//     value={passwordTwo}
//     onChange={event =>
//       this.setState(byPropKey("passwordTwo", event.target.value))
//     }
//     type="password"
//     placeholder="Confirm New Password"
//   />
//   <button disabled={isInvalid} type="submit">
//     Change My Password
//   </button>

//   {error && <p>{error.message}</p>}
// </form>
