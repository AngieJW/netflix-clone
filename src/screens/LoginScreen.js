import React, { useState } from 'react'
import SignUpScreen from './SignUpScreen'
import './LoginScreen.css'

function LoginScreen() {
  const [signIn, setSignIn] = useState(false)

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img className="loginScreen__logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix logo" />

      <button onClick={() => setSignIn(true)}
      className='loginScreen__button'>S'identifier</button>

      <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen__body">
        {signIn ? (<SignUpScreen />) : <>
          <h1>Films et séries en illimité, et bien plus</h1>
          <h2>Où que vous soyez. Annulez à tout moment.</h2>
          <h3>Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</h3>

          <div className="loginScreen__input">
            <form>
              <input type="email" placeholder="Adresse email"/>
              <button onClick={() => setSignIn(true)}
              className='loginScreen__getStarted'>Commencer</button>
            </form>
          </div>
        </>
        }

      </div>
    </div>
  )
}

export default LoginScreen
