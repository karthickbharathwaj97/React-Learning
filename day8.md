● How do you create Nested Routes react-router-dom configuration

-> We use to add children to that parent route comoponent.

eg.

```
{
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
```

Here Profile component is nested route inside About component.

● Read about createHashRouter, createMemoryRoute from React Router docs.

-> createHashRouter : This router is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL".

createMemoryRoute : Instead of using the browsers history a memory router manages it's own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.

● What is the order of life cycle method calls in Class Based Components

->

```
   constructor
   render
   componentDidMount
   componentDidUpdate
   componentWillUnmount
```

● Why do we use componentDidMount ?

-> componentDidMount is used for API Calls.

● Why do we use componentWillUnmount ? Show with example

-> componentWillUnmount is used to unmount the component, basically it calls when we move to other component/page from current component/ page.

```
import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy name",
        location: "dummy location",
      },
    };
    // console.log("Child - Constructor" + this.props.name);
  }
  componentDidMount() {
    // API Calls
    // const data = await fetch("https://api.github.com/users/deepakydv25");
    // const json = await data.json();
    // console.log(json);
    // this.setState({
    //   userInfo: json,
    // });
    // this.timer = setInterval(() => {
    //   console.log("NAMASTE REACT OP");
    // }, 1000);
    // console.log("Child - ComponentDidMount" + this.props.name);
  }
  componentDidUpdate() {
    // console.log("Child - ComponentDidUpdate");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    // console.log("Child - ComponentWillUnmount");
  }
  render() {
    // console.log("Child - Render" + this.props.name);
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name:{this.state.userInfo.name}</h2>
        <h3>Count: {this.state.userInfo.location}</h3>
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >
          Count Button
        </button>
      </div>
    );
  }
}
export default Profile;
```

● (Research) Why do we use super(props) in constructor?

-> In JavaScript, `super` refers to the parent class constructor(here it points to React.Component implementation). You can't use `this` in a constructor until after you've called the parent constructor.

Link : https://medium.com/@jbbpatel94/why-do-we-write-super-props-fc367074a2af

● (Research) Why can't we have the callback function of useEffect async ?

-> Because React’s useEffect hook expects a cleanup function returned from it which is called when the component unmounts. Using an async function here will cause a bug as the cleanup function will never get called.

```
// ❌ Don't do this!
useEffect(async () => {
  const users = await fetchUsers();
  setUsers(users);
  return () => {
    // this never gets called, hello memory leaks...
  };
}, []);
```

Link : https://ultimatecourses.com/blog/using-async-await-inside-react-use-effect-hook#:~:text=Why%3F,function%20will%20never%20get%20called.

# Coding Assignment:

● Create a Class Based Component

    ● Create 2 class based child components
    ● Pass props from Parent to child
    ● Create a constructor
    ● Create a state variable inside child
    ● Use this.setState to update it
    ● What if there are multiple state variables ?
    ● Write a console.log for each lifecycle method
    ● Play with the console logs to find out the correct order of their execution

● Create interval inside componentDidMount ?

    ● Use clearInterval to fix the issue caused by that interval

● Read Life Cycle Method Diagram - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/