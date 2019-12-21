const PercentCircle = (props) => {
  const { percentage, ...rest } = props;
  const text = percentage ? new Intl.NumberFormat('en-US', { style: 'percent' }).format(percentage) : null;
  return (
    <svg viewBox="0 0 100 100" width="75" height="80" {...rest}>
      <circle
        cx="50%"
        cy="50%"
        r="50"
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        alignmentBaseline="middle"
        fill="#fff"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="1.8rem"
      >
        { text }
      </text>
    </svg>
  );
};
export default PercentCircle;
