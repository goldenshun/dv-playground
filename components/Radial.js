/* eslint-disable react/no-array-index-key */
const RADIUS = 50;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const strokeWidth = 5;

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

const Radial = (props) => {
  const { text, ...rest } = props;

  return (
    <svg viewBox="0 0 100 100" width="100" height="100" {...rest}>
      <circle
        cx="50%"
        cy="50%"
        r={RADIUS}
        fill="#D8D8D8"
      />
      <circle
        cx="50%"
        cy="50%"
        r={RADIUS / 2}
      />
      {items.map((item, index) => (
        <circle
          key={index}
          cx="50%"
          cy="50%"
          r={RADIUS - ((index + 1) * 2.5)}
          stroke={item.stroke}
          strokeWidth={strokeWidth}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - item.percentage)}
          strokeLinecap="round"
          fill="none"
        />
      ))}
    </svg>
  );
};
export default Radial;
