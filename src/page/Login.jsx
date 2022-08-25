import google from "../Image/google-brands.svg"
import facebook from "../Image/facebook-brands.svg"
import github from "../Image/github-brands.svg"
import React from "react";

const Login = () => {
    const Google=()=>{
        window.open(`http://localhost:7000/auth/google`)

    }
  return (
    <div className="login">
      <h1 className="loginTitle">choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={Google}>
            <img src={google} alt="google" className="icon " style={{width:"2rem"}} />
            Google
          </div>
          <div className="loginButton facebook">
            <img src={facebook} alt="facebook" className="icon " style={{width:"2rem"}} />
            facebook
          </div>
          <div className="loginButton github">
            <img src={github} alt="github" className="icon "  style={{width:"2rem"}}/>
            GitHub
          </div>
        </div>
        <div className="center">
            <div className="line"/>
            <div className="or">OR</div>
        </div>
        <div className="right">
            <input type="text" placeholder="username" />
            <input type="text" placeholder="password" />
            <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
