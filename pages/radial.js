import PercentCircle from '../components/PercentCircle';
import Radial from '../components/Radial';

const items = [{
  percentage: 0.16,
  stroke: '#4A707D',
}, {
  percentage: 0.23,
  stroke: '#95A393',
}, {
  percentage: 0.28,
  stroke: '#A6A06D',
}, {
  percentage: 0.36,
  stroke: '#DCC06B',
}];

const RadialPage = () => (
  <div style={{ display: 'flex' }}>
    <div><Radial items={items} /></div>
    <div style={{ marginLeft: '16px' }}>
      {items.map((i, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
          <PercentCircle percentage={i.percentage} fill={i.stroke} />
        </div>
      ))}
    </div>
  </div>
);

export default RadialPage;
