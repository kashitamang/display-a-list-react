import logo from './logo.svg';
import './App.css';
// import your arrays here
import { genres } from './genres.js';
import { realityTvShows } from './reality-tv-shows';

//import your lists here
import GenresList from './GenresList';
import RealityTvShowList from './RealityTvShowList';

function App() {
  return (
    <div className="App">
      <GenresList genres={genres}/>
      <RealityTvShowList realityTvShows={realityTvShows}/>
    </div>
  );
}

export default App;
