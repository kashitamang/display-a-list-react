import logo from './logo.svg';
import './App.css';
// import your arrays here
import { genres } from './genres.js';

//import your lists here
import GenresList from './GenresList';


function App() {
  return (
    <div className="App">
      <GenresList genres={genres}/>
    </div>
  );
}

export default App;
