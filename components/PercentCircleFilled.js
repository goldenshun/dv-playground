/* eslint-disable no-return-assign */
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const RADIUS = 50;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const PercentCircleFilled = (props) => {
  const { percentage, ...rest } = props;
  let pathCircle = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.out ' } });
    tl.from(pathCircle, { strokeDasharray: `0 ${CIRCUMFERENCE}` });
  }, []);

  return (
    <svg height="100" width="100" viewBox="0 0 100 100">
      <circle r={RADIUS} cx="50%" cy="50%" fill="#D8D8D8" />
      <circle
        ref={el => pathCircle = el}
        r={RADIUS / 2}
        cx="50%"
        cy="50%"
        fill="none"
        stroke="#BD6661"
        strokeWidth="50"
        strokeDasharray={`${percentage * 100} ${CIRCUMFERENCE}`}
      />
    </svg>
  );
};
export default PercentCircleFilled;
