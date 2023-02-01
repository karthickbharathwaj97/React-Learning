import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

class AboutUs extends React.Component {
  constructor(props) {
    console.log("Parent Constructor");
    super(props);
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("It is react");
    }, 1000);
    console.log("parent did mount");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>This is the about us page</h1>
        <ProfileClass name="ClassB" xyz="xyz" />
      </div>
    );
  }
}

export default AboutUs;
