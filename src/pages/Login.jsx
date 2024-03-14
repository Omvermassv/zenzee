import React from "react";
import { Link } from "react-router-dom";
import sty from "./login.module.css";

function Login() {
  return (
    <div className={sty.Wrapper}>
      <div className={sty.container}>
        <div className={sty.logoArea}>Logo</div>
        <div className={sty.loginArea}>
          <div className={sty.headerContainer}>
            <p>Zen-Zee</p>
          </div>
          <div className={sty.inputContainer}>
            <div className={sty.heading}>
              <p>Login</p>
            </div>
            <label className={`${sty.inputL} ${sty.input}`} htmlFor="username">User Name</label>
            <input className={`${sty.inputL} ${sty.input} ${sty.in}`} type="text" id="username" />
            <label className={`${sty.inputL} ${sty.input}`} htmlFor="userpassword">Password</label>
            <input className={`${sty.inputL} ${sty.input} ${sty.in}`} type="password" id="userpassword" />
            <button className={sty.btn}>Login</button>
          </div>
          <div className={sty.textlink}>
            <p>Do not Have Account <Link to="/Register"><span>Register</span></Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
