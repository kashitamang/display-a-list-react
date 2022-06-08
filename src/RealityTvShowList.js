import RealityTvShowItem from './RealityTvShowItem.js';
import './RealityTvShowList.css';

export default function RealityTvShowsList({ realityTvShows }) {
  return (
    <div className="reality-tv-show-list">
      {
        realityTvShows.map((realityTvShow, i) => <RealityTvShowItem
          {...realityTvShow} 
          key={realityTvShow.name + i}/>)
      }
    </div>
  );
}
