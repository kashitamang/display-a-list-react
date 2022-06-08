import GenreItem from './GenreItem.js';
import './GenresList.css';

export default function GenresList({ genres }) {
  return <div className="genre-list">
    <h2>Genres</h2>
    {
      genres.map((genre, i) => <GenreItem 
        genre={genre} 
        key={genre + i}/>)
    }
  </div>;
}