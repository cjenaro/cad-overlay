import React, { useRef } from "react";
import { useSpring, useChain, animated } from "react-spring"

export default function App() {
  const divAnim = useRef()
  const props = useSpring({
    config: {
      tension: 500
    },
    opacity: 1,
    transform: "scale(1.5)",
    from: {
      opacity: 0,
      transform: "scale(1)"
    },
    ref: divAnim
  });

  const forAnim = useRef()
  const forStyles = useSpring({
    config: {
      tension: 500
    },
    backgroundSize: "100% 15%",
    opacity: 0.5,
    from: {
      backgroundSize: "0% 15%",
      opacity: 1,
    },
    ref: forAnim
  });

  const andAnim = useRef();
  const andStyles = useSpring({
    config: {
      tension: 500
    },
    opacity: 1,
    transform: "scale(1.1) rotate(-5deg)",
    from: {
      opacity: 0,
      transform: "scale(1.5) rotate(0deg)",
    },
    ref: andAnim
  });

  const fadeOutAnim = useRef();
  const fadeOutStyles = useSpring({
    config: {
      tension: 200
    },
    opacity: 0,
    from: {
      opacity: 1
    },
    ref: fadeOutAnim
  });
  
  useChain([divAnim, forAnim, andAnim, fadeOutAnim])

  return (
    <animated.div style={{...props, ...fadeOutStyles}}>
      <h1>
        <p id="coding">Coding</p>
        <span id="container">
        <animated.span style={forStyles} id="for">
          for
        </animated.span>
        <animated.span id="and" style={andStyles}>
          and
        </animated.span>
        </span>
        <p id="dummies">Dummies</p>
      </h1>
    </animated.div>
  );
}
