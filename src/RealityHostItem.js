import './RealityHostItem.css';

export default function RealityHostItem({
  name, 
  from,
  shows,
}) {
  return (
    <div className="reality-host-item">
      <h2>🎤 {name} 🎤</h2>
      <h4>From {from}, {name} is best known for the shows: {shows}.</h4>
    </div>
  );
}
