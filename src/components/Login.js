import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
import "./Login.css";

const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png"
          alt="slack-logo"
        />
        <h1>Sign in to Mittranj's Slack Space</h1>
        <p>slack-clone-99.firebase.app</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
};

export default Login;
