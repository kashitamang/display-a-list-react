import './RealityStarItem.css';

export default function RealityStarItem({ 
  name, 
  zodiac,
  knownfor,
}) {
  return (
    <div className="reality-star-item">
      <h2>⭐ {name} ⭐</h2>
      <h4>{zodiac}</h4>
      <p>Best known for {knownfor.name} filmed in {knownfor.location} first airing in {knownfor.year}.</p>
    </div>
  );
}
