import React from "react";
import { Link } from "react-router-dom";
import sty from "./login.module.css";

function Register() {
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
              <p>Register</p>
            </div>
            <label className={sty.inputL, sty.input} htmlFor="fName">Full Name</label>
            <input className={sty.inputL, sty.input, sty.in} type="text" id="fName" />
            <label className={sty.inputL, sty.input} htmlFor="useremail">Email</label>
            <input className={sty.inputL, sty.input, sty.in} type="email" id="useremail" />
            <label className={sty.inputL, sty.input} htmlFor="userpassword">Password</label>
            <input className={sty.inputL, sty.input, sty.in} type="password" id="userpassword" />
            <label className={sty.inputL, sty.input} htmlFor="userconfirmpassword">Confirm Password</label>
            <input className={sty.inputL, sty.input, sty.in} type="password" id="userconfirmpassword" />
            <button className={sty.btn}>Register</button>
          </div>
          <div className={sty.textlink}>
            <p>Already have an Account <Link to="/"><span>Login</span></Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
