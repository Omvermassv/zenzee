import React from "react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sty from "./login.module.css";

const NAME_REGEX = /^[a-zA-Z ]{2,20}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,15}$/;
const REGISTER_URL = '/register';

function Register() {
	const userRef = useRef();
	const errRef = useRef();

	const [name, setName] = useState('');
	const [validName, setValidName] = useState(false);
	const [nameFocus, setNameFocus] = useState(false);

	const [pwd, setPwd] = useState('');
	const [validPwd, setValidPwd] = useState(false);
	const [pwdFocus, setPwdFocus] = useState(false);

	const [email, setEmail] = useState('');
	const [validEmail, setValidEmail] = useState(false);
	const [emailFocus, setEmailFocus] = useState(false);

	const [matchPwd, setMatchPwd] = useState('');
	const [validMatch, setValidMatch] = useState(false);
	const [matchFocus, setMatchFocus] = useState(false);

	const [errMsg, setErrMsg] = useState('');

	useEffect(() => {
		userRef.current.focus();
	}, [])

	useEffect(() => {
		setValidName(NAME_REGEX.test(name));
	}, [name])

	useEffect(() => {
		setValidEmail(EMAIL_REGEX.test(email));
	}, [email])

	useEffect(() => {
		setValidPwd(PWD_REGEX.test(pwd));
		setValidMatch(pwd === matchPwd);
	}, [pwd, matchPwd])

	useEffect(() => {
		setErrMsg('');
	}, [name, pwd, matchPwd])

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("register submitted");
	}

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
							<p
								ref={errRef}
								className={errMsg ? sty.errmsg : sty.offscreen}>
								{errMsg}
							</p>
							<p>Register</p>
						</div>
						<form onSubmit={handleSubmit}>
							<label
								className={sty.inputL, sty.input}
								htmlFor="fullname">
								Full Name
							</label>
							<input
								className={sty.inputL, sty.input, sty.in}
								type="text" id="fullname"
								ref={userRef}
								onChange={(e) => setName(e.target.value)}
								value={name}
								required
								onFocus={() => setNameFocus(true)}
								onBlur={() => setNameFocus(false)}
							/>
							<p
								id="uidnote"
								className={nameFocus && name && !validName ? sty.instructions : sty.offscreen}>
								<FontAwesomeIcon icon={faInfoCircle} />
								Only alphabets allowed between 2 to 20 characters.
							</p>
							<label
								className={sty.inputL, sty.input}
								htmlFor="useremail">
								Email
							</label>
							<input
								className={sty.inputL, sty.input, sty.in}
								type="email"
								id="useremail"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
								required
								onFocus={() => setEmailFocus(true)}
								onBlur={() => setEmailFocus(false)} />
							<p
								id="pwdnote"
								className={emailFocus && !validEmail ? sty.instructions : sty.offscreen}>
								<FontAwesomeIcon icon={faInfoCircle} />
								Enter a valid email syntax.
							</p>
							<label className={sty.inputL, sty.input}
								htmlFor="password">
								Password
							</label>
							<input
								className={sty.inputL, sty.input, sty.in}
								type="password"
								id="password"
								onChange={(e) => setPwd(e.target.value)}
								value={pwd}
								required
								onFocus={() => setPwdFocus(true)}
								onBlur={() => setPwdFocus(false)} />
							<p
								id="pwdnote"
								className={pwdFocus && !validPwd ? sty.instructions : sty.offscreen}>
								<FontAwesomeIcon icon={faInfoCircle} />
								8 to 15 characters. Must include uppercase and lowercase letters, a number and a special character.
							</p>
							<label
								className={sty.inputL, sty.input}
								htmlFor="confirm_password">
								Confirm Password
							</label>
							<input
								className={sty.inputL, sty.input, sty.in}
								type="password"
								id="confirm_password"
								onChange={(e) => setMatchPwd(e.target.value)}
								value={matchPwd}
								required
								onFocus={() => setMatchFocus(true)}
								onBlur={() => setMatchFocus(false)} />
							<p
								id="confirmnote"
								className={matchFocus && !validMatch ? sty.instructions : sty.offscreen}>
								<FontAwesomeIcon icon={faInfoCircle} />
								Must match the first password input field.
							</p>
							<button
								className={sty.btn}
								disabled={!validName || !validPwd || !validMatch ? true : false}>
								Register
							</button>
						</form>
					</div>
					<div className={sty.textlink}>
						<p>Already registered? <Link to="/"><span>Login</span></Link></p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
