/** @jsx jsx */
import { css, jsx } from "@filbert-js/core";
import { useState } from "react";
import { useSpring, config, animated } from "react-spring";
import Entrance from "./Entrance";
import image from "./bg-image.png";

export default function App() {
  const [entering, setEntering] = useState(true);
  const fadeIn = useSpring({
    opacity: 1,
    from: {
      opacity: 0,
    },
    config: config.molasses,
  });
  return entering ? (
    <Entrance onFinish={() => setEntering(false)} />
  ) : (
    <animated.div
      style={fadeIn}
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${image});
      `}
    >
      <header
        css={css`
          background-color: var(--yellow);
          color: var(--black);
          padding: 1rem 2rem;
          margin-bottom: 1rem;
        `}
      >
        <h1
          css={css`
            margin: 0;
          `}
        >
          Coding and Dummies
        </h1>
      </header>
      <main
        css={css`
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-template-rows: repeat(2, 1fr);
          grid-gap: 60px;
          height: calc(100% - 5rem);
          padding: 3rem;
        `}
      >
        <div
          css={css`
            grid-column: 1/5;
            grid-row: 1/2;
            border: 2px solid var(--yellow);
          `}
        ></div>
        <div
          css={css`
            grid-column: 1/5;
            grid-row: 2/3;
            border: 2px solid var(--yellow);
          `}
        ></div>
        <div
          css={css`
            grid-column: 5/13;
            grid-row: 1/3;
            border: 2px solid var(--yellow);
          `}
        ></div>
      </main>
    </animated.div>
  );
}
