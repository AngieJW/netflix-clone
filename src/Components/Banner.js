import React from 'react'
import './Banner.css'

function Banner() {

    function truncate(string, n) {
      return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

  return (
    <header className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://as2.ftcdn.net/v2/jpg/03/71/56/17/1000_F_371561715_LVI4qVJ2hyWMDXdqJNGdktggEzjQuC15.jpg')`,
        backgroundPosition: "center center"
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h2 className="banner__description">{truncate(`This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description`, 150)}</h2>
      </div>
      <div className="banner--fadeBottom"/>
      <img src="" alt="" />
    </header>
  )
}

export default Banner
