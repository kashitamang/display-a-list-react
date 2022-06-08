import './RealityTvShowItem.css';

export default function RealityTvShowItem({
  name, 
  pilot, 
  network,
  location,
}) {
  return (
    <div className="reality-tv-show-item">
      <h2>💋 {name} 💋</h2>
      <h3>{pilot}</h3>
      <p>Filmed in {location} and aired on {network}.</p>
    </div>
  );
}
