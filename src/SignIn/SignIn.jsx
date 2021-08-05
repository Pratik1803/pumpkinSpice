import React from 'react';
import './SignIn.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function SignIn(props) {


    const { email, setEmail, emailErrMsg, password, setPassword, passwordErrMsg, handleSignIn, handleSignUp, hasAccount, setHasAccount, clearErrMsgs, clearInputs, userName, setUserName } = props;
    return (
        <>
            {/* <img id="background" src={img} alt="" /> */}
            <div id="signIn">
                {
                    hasAccount ? (
                        <h1>Welcome Back!  {userName} </h1>
                    ) : (
                        <h1>Hello, {userName}</h1>
                    )
                }
                <div id="inputs">
                    <TextField variant="standard" label="Username" required value={userName} style={{ background: "transparent", padding: "10px", color: "grey", width: "400px" }} onChange={(e) => { setUserName(e.target.value) }} />

                    <TextField variant="standard" label="Enter your email" autoFill="false" autoComplete="false" required type="email" value={email} style={{ background: "transparent", padding: "10px", color: "grey", width: "400px" }} onChange={(e) => { setEmail(e.target.value) }} />
                    <p id="errors" >{emailErrMsg}</p>

                    <TextField variant="standard" label="Password" required type="password" value={password} style={{ background: "transparent", padding: "10px", color: "grey", width: "400px" }} onChange={(e) => { setPassword(e.target.value) }} />
                    <p id="errors" >{passwordErrMsg}</p>
                </div>
                {hasAccount ? (
                    <>
                        <Button id="button" onClick={handleSignIn} >Sign In</Button>
                        <p id="bottomLine" >Don't have an Account?  <span style={{ marginLeft: '5px', color: 'red', fontWeight: "bold", textDecoration: "underline", cursor: "pointer" }} onClick={() => { setHasAccount(!hasAccount); clearErrMsgs(); clearInputs() }}>Sign Up</span></p>
                    </>
                ) : (
                    <>
                        <Button id="button" onClick={handleSignUp} >Sign Up</Button>
                        <p id="bottomLine" >Already have an Account?  <span style={{ marginLeft: '5px', color: 'red', fontWeight: "bold", textDecoration: "underline", cursor: "pointer" }} onClick={() => { setHasAccount(!hasAccount); clearErrMsgs(); clearInputs() }}>Sign In</span></p>
                    </>
                )}
            </div>
        </>
    )
}

export default SignIn
