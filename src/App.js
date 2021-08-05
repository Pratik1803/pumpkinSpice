import { useEffect, useState } from 'react';
import './App.css';
import app from './firebase';
import SignIn from './SignIn/SignIn';
import LandingPage from './LandingPage/LandingPage';


function App() {
  const [user, setUser] = useState("");
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrMsg, setEmailErrMsg] = useState("");
  const [passwordErrMsg, setPasswordErrMsg] = useState("");
  const [hasAccount, setHasAccount] = useState(false);


  function clearInputs() {
    setEmail("");
    setPassword("");
  };

  function clearErrMsgs() {
    setEmailErrMsg("");
    setPasswordErrMsg("");
  };

  function handleSignUp() {
    clearInputs();
    clearErrMsgs();
    app.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailErrMsg(err.message);
            break;
          case "auth/weak-password":
            setPasswordErrMsg(err.message)
            break;
        };
      });
  };


  function handleSignIn() {
    clearInputs();
    clearErrMsgs();
    app.auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-no-found":
            setEmailErrMsg(err.message);
            break;
          case "auth/wrong-password":
            setPasswordErrMsg(err.message)
            break;
          default: setPasswordErrMsg("Incorrect Email or password")
        };
      });
  };

  function handleLogOut() {
    app.auth().signOut();
  };


  useEffect(() => {
    clearInputs();
    clearErrMsgs();
    app.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user)
      } else {
        setUser("")
      }
    })
  }, [])





  return (
    <div className="App">
      {user ? (
        <LandingPage userName={userName} email={email} handleLogOut={handleLogOut} />
      ) : (
        <SignIn
          email={email}
          setEmail={setEmail}
          emailErrMsg={emailErrMsg}
          password={password}
          setPassword={setPassword}
          passwordErrMsg={passwordErrMsg}
          handleSignIn={handleSignIn}
          handleSignUp={handleSignUp}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          clearErrMsgs={clearErrMsgs}
          clearInputs={clearInputs}
          userName={userName}
          setUserName={setUserName}
        />
      )}

    </div>
  );
}

export default App;
