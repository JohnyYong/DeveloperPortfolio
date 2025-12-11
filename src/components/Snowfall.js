import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "@tsparticles/slim";
import { loadImageShape } from "@tsparticles/shape-image"; 
import snowflakeImg from "../Assets/snow.png"; // your custom flake

function Snowfall() {
  const particlesInit = useCallback(async (engine) => {
    // load the slim bundle
    await loadSlim(engine);

    await loadImageShape(engine);
  }, []);

  return (
    <Particles
      id="snowfall"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: {
            value: 30, // fewer flakes
            density: { enable: true, area: 800 },
          },
          shape: {
            type: "image",
            image: {
                src: snowflakeImg, // use imported image URL
                width: 64,
                height: 64,
              },
          },
          opacity: {
            value: 0.9,
            random: true,
          },
          size: {
            value: 14,
            random: {
              enable: true,
              minimumValue: 6,
            },
          },
          rotate: {
            value: { min: 0, max: 360 },
            direction: "random",
            animation: {
              enable: true,
              speed: 10, // spin speed
              sync: false,
            },
          },
          move: {
            enable: true,
            direction: "bottom",
            speed: 1.2,
            straight: false,
            outModes: { default: "out" },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Snowfall;
