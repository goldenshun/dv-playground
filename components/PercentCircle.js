const PercentCircle = (props) => {
  const { text, ...rest } = props;

  return (
    <svg viewBox="0 0 100 100" width="100" height="100" {...rest}>
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
