import RealityTvShowItem from './RealityTvShowItem.js';

export default function RealityTvShowsList({ realityTvShows }) {
  return (
    <div>
      {
        realityTvShows.map((realityTvShow, i) => <RealityTvShowItem
          {...realityTvShow} 
          key={realityTvShow.name + i}/>)
      }
    </div>
  );
}
