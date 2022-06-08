export default function RealityTvShowItem({
  name, 
  pilot, 
  network,
  location,
}) {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{pilot}</h3>
      <p>filmed in {location} and aired on {network}</p>
    </div>
  );
}
