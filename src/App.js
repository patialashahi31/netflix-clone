import './App.css';
import Row from './Row'
import requests  from './requests'
import Banner from './Banner'
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      {/* <Row title="Upcoming" fetchUrl={requests.fetchDocumentaries}/> */}
      {/* <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Romantic" fetchUrl={requests.fetchRomanceMovies}/>
      
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/> */}
    </div>
  );
}

export default App;
