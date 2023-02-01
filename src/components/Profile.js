import ProfileClass from "./ProfileClass";
import { useState } from "react";
import { useEffect } from "react";
const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    // console.log("inside");
  }, []);
  return (
    <div>
      <h1>Functional Profile {props.name}</h1>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount(1);
          setCount2(2);
        }}
      >
        Increment
      </button>
      <h1>Count: {count2}</h1>
    </div>
  );
};
export default Profile;
