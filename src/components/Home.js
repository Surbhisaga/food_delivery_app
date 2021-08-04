import React, { Component } from "react";

import withAuthorization from "./withAuthorization";
// import { db } from "../firebase";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroButton,
} from "../design/HeroElement";

class HomePage extends Component {
  state = {
    users: null,
    username: "",
    loading: true,
  };

  // componentDidMount() {
  //   db.onceGetUsers().then((res) => {
  //     this.setState({
  //       users: res.val(),
  //     });
  //   });

  //   const { loggedUser } = this.props;
  //   db.doGetAnUnser(loggedUser.uid).then((res) => {
  //     this.setState({
  //       username: res.val().username,
  //       loading: false,
  //     });
  //   });
  // }

  render() {
    return (
      <div>
        <HeroContainer>
          <HeroContent>
            
            <HeroItems>
              <HeroH1>Gretest Pizza Ever!</HeroH1>
              <HeroP>ready in 15 minutes</HeroP>
              <HeroButton>Place Order</HeroButton>
            </HeroItems>
            <p style={{ marginTop: "80px" }}>
              NOTE: This page is only accessible by signed in users.
            </p>
            {/* {!!users && <UserList users={users} />} */}
          </HeroContent>
        </HeroContainer>
      </div>
    );
  }
}

// const UserList = ({ users }) => (
//   <div>
//     {console.log("users", users)}
//     <h2>List of Usernames of Users</h2>
//     <p>(Saved on Sign Up in Firebase Database)</p>

//     {Object.keys(users).map(key => (
//       <div key={key}>{users[key].username}</div>
//     ))}
//   </div>
// );

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage); //grants authorization to open endpoint if an user is signed in
