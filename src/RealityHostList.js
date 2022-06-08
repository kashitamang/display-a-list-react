import RealityHostItem from './RealityHostItem.js';
import './RealityHostList.css';

export default function RealityHostList({ realityhosts }) {
  return (
    <div className="reality-host-list">
      {
        realityhosts.map((realityhost, i) => <RealityHostItem
          {...realityhost}
          key={realityhost + i}/>)
      }
    </div>
  );
}
