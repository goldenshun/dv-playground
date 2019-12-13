const RADIUS = 40;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const PercentCircle = (props) => {
  const { percentage, ...rest } = props;

  const text = percentage ? new Intl.NumberFormat('en-US', { style: 'percent' }).format(percentage) : null;
  return (
    <svg viewBox="0 0 100 100" width="120" height="120" {...rest}>
      <circle
        cx="50%"
        cy="50%"
        r="40"
        stroke="#CBC7C6"
        strokeWidth="10px"
        fill="none"
      />
      <circle
        cx="50%"
        cy="50%"
        r={RADIUS}
        stroke="#BD6661"
        strokeWidth="10px"
        strokeDasharray={CIRCUMFERENCE}
        strokeDashoffset={CIRCUMFERENCE * (1 - percentage)}
        strokeLinecap="round"
        fill="none"
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        alignmentBaseline="middle"
        fill="#BD6661"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="1.8rem"
      >
        { text }
      </text>
    </svg>
  );
};
export default PercentCircle;
