import RealityHostItem from './RealityHostItem.js';

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
