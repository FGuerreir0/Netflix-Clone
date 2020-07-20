import React from 'react';
import './App.css';
import Row from './components/Row';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import requests from './services/apiRequest';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Jumbotron />
      <div className='row_position'>
        <Row
          title='NETFLIX ORIGINALS'
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow={true}
        />
        <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
        <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
        <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
        <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
        <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
        <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
        <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
      </div>
    </div>
  );
}

export default App;
