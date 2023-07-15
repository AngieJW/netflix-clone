import React from 'react'
import "./HomeScreen.css";
import Nav from "./Components/Nav"
import Banner from "./Components/Banner";
import requests from './Request';
import Row from './Components/Row'

function HomeScreen() {
  return (
    <div className='homeScreen'>
      <Nav />
      <Banner />

      <Row
      title='TENDANCES'
      fetchUrl= {requests.fetchTrending}
      isLargeRow
      />
      <Row
      title='MIEUX NOTES'
      fetchUrl= {requests.fetchTopRated}/>
      <Row
      title='MYSTERES'
      fetchUrl= {requests.fetchMysteryMovies}/>
      <Row
      title='ACTION'
      fetchUrl= {requests.fetchActionMovies}/>
      <Row
      title='DOCUMENTAIRES'
      fetchUrl= {requests.fetchDocumentaries}/>
      <Row
      title='ROMANCE'
      fetchUrl= {requests.fetchRomanceMovies}/>
      <Row
      title='COMEDIES'
      fetchUrl= {requests.fetchComedyMovies}/>

    </div>
  )
}

export default HomeScreen
