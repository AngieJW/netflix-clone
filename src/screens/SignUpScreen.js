import React from 'react'
import "./SignUpScreen.css";

function SignUpScreen() {
  const register = (e) => {
    e.preventDefault();
  }

  const signIn = (e) => {
    e.preventDefault();
  }
  return (
    <div className='signUpScreen'>
      <form >
        <h1>S'identifier</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Mot de passe" />
        <button type="submit" onClick={signIn}>S'identifier</button>

        <h4>
          <span className='signUpScreen__gray'> Nouveau chez Netflix ? </span>
          <span className='signUpScreen__link' onClick={register}> S'inscrire maintenant</span></h4>
      </form>

    </div>
  )
}

export default SignUpScreen
