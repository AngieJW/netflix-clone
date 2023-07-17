import React from 'react';
import "./ProfileScreen.css";
import Nav from '../Components/Nav';
import { selectUser } from '../features/counter/userSlice';
import { useSelector } from 'react-redux';
import { auth } from '../firebase';

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
      <Nav />
      <div className="profileScreen__body">
        <h1>Editer mon Profil</h1>
        <div className="profileScreen__info">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
          <div className="profileScreen__details">

            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <button
                onClick={() => auth.signOut()}
                className='profileScreen__signOut'>Se déconnecter</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
