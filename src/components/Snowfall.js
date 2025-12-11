
import React from "react";
import Particles from "react-tsparticles";

function Snowfall() {
  return (
    <Particles
      id="snowfall"
      params={{
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.8,
            random: true,
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true,
            direction: "bottom",      // fall down
            speed: 1.2,
            straight: false,
            out_mode: "out",          // disappear when leaving screen
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
