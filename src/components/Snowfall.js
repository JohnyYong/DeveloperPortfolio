import React from "react";
import Particles from "react-tsparticles";
import snowflakeImg from "../Assets/snow.png"; // <-- make sure this exists

function Snowfall() {
  return (
    <Particles
      id="snowfall"
      params={{
        particles: {
          number: {
            value: 35, // fewer flakes than before (was 80)
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "image",          // was "circle"
            image: {
              src: snowflakeImg,    // use imported image URL
              width: 64,
              height: 64,
            },
          },
          opacity: {
            value: 0.9,
            random: true,
          },
          size: {
            value: 12,              // bigger flakes
            random: true,           // still some variation
          },
          rotate: {
            value: 0,
            random: true,
            direction: "random",
            animation: {
              enable: true,
              speed: 5,             // spin speed
              sync: false,
            },
          },
          move: {
            enable: true,
            direction: "bottom",    // fall down
            speed: 1.2,
            straight: false,
            out_mode: "out",        // disappear when leaving screen
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: false,
            },
            onclick: {
              enable: false,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Snowfall;
