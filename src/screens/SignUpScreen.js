import React, { useRef } from 'react'
import { auth } from "../firebase"
import "./SignUpScreen.css";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
    })
      .catch((error) => {
        alert(error.message);
    });
  }

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
    }).catch((error) => {
      alert(error.message);
    });
  }
  return (
    <div className='signUpScreen'>
      <form >
        <h1>S'identifier</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Mot de passe" />
        <button type="submit" onClick={signIn}>S'identifier</button>

        <h4>
          <span className='signUpScreen__gray'> Nouveau chez Netflix ? </span>
          <span className='signUpScreen__link' onClick={register}> S'inscrire maintenant</span></h4>
      </form>

    </div>
  )
}

export default SignUpScreen
