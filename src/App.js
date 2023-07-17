import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispath = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //  LOGGED IN
        console.log(userAuth);
        dispath(login({
          uid: userAuth.uid,
          email:userAuth.email,
        }))
      } else {
        // LOGGED OUT
        dispath(logout);
      }
    });

    return unsubscribe;
  }, [])

  return (
    <div className="app">

      <Router>
        {!user ? ( <LoginScreen />) : (<Routes>
          <Route exact path="/" element={<HomeScreen />} >
          </Route>
        </Routes>)}

      </Router>
    </div>
  );
}

export default App;
