// React
import { useState } from "react";

// Libs
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";

const FadeRight = ({ children }) => {
  const [inView, setInview] = useState(false);

  const transition = useSpring({
    delay: 250,
    to: {
      x: !inView ? 25 : 0,
      opacity: !inView ? 0 : 1,
    },
  });
  return (
    <Waypoint onEnter={() => setInview(true)} bottomOffset='100px'>
      <animated.div style={transition}>{children}</animated.div>
    </Waypoint>
  );
};

export default FadeRight;
