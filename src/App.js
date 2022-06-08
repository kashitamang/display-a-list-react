import logo from './logo.svg';
import './App.css';
// import your arrays here
import { genres } from './genres.js';
import { realityTvShows } from './reality-tv-shows';
import { realitystars } from './realitystars.js';

//import your lists here
import GenresList from './GenresList';
import RealityTvShowList from './RealityTvShowList';
import RealityStarList from './RealityStarsList';

function App() {
  return (
    <div className="App">
      <h1>TV Info</h1>
      <GenresList genres={genres}/>
      <h2>Reality TV Shows</h2>
      <RealityTvShowList realityTvShows={realityTvShows}/>
      <h2>Reality Stars</h2>
      <RealityStarList realitystars={realitystars}/>
    </div>
  );
}

export default App;
