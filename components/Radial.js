/* eslint-disable react/no-array-index-key */
const RADIUS = 50;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const Radial = (props) => {
  const { items, ...rest } = props;

  const strokeWidth = RADIUS / 2 / items.length;

  return (
    <svg viewBox="0 0 100 100" width="300" height="300" {...rest}>
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
          r={(RADIUS + (strokeWidth / 2)) - ((index + 1) * strokeWidth)}
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
