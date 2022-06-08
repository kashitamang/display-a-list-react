import GenreItem from './GenreItem.js';
import './GenresList.css';

export default function GenresList({ genres }) {
  return <div className="genre-list">
    {
      genres.map((genre, i) => <GenreItem 
        genre={genre} 
        key={genre + i}/>)
    }
  </div>;
}