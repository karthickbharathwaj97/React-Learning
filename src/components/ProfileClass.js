import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    console.log("child constructor");
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "Location",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/karthickbharathwaj97"
    );
    const json = await data.json();
    this.setState({
      userInfo: json,
    });

    console.log(json);
    //best place to make and api call
    console.log("child Component Did Mount");
  }

  render() {
    console.log(" child render");
    return (
      <div>
        <h1>Class Profile {this.props.name}</h1>
        <h2>{this.state.userInfo.name}</h2>
        <h2>{this.state?.userInfo?.location}</h2>
        <img src={this.state.userInfo.avatar_url} alt="" />
        <h1>Count: {this.state.count}</h1>
        <button
          //Do not mutate state directly use this.setState because while using it react knows when to do reconcilation
          onClick={() => {
            this.setState({
              count: 1,
              count2: 2,
            });
          }}
        >
          Increment Class
        </button>
        <h1>Count2: {this.state.count2}</h1>
      </div>
    );
  }
}
export default ProfileClass;
