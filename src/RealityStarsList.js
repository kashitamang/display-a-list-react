import RealityStarItem from './RealityStarItem.js';
import './RealityStarsList.css';

export default function RealityStarsList({ realitystars }) {
  return (
    <div className="reality-stars-list">
      {
        realitystars.map((realitystar, i) => <RealityStarItem
          {...realitystar}
          key={realitystar + i}/>)
      }
    </div>
  );
}
