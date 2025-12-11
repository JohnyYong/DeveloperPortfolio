import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "@tsparticles/slim";
import snowflakeImg from "../Assets/snow.png"; 

function Snowfall() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
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
            value: 40,
            density: { enable: true, area: 800 },
          },
          shape: {
            type: "image",
            image: {
              src: snowflakeImg, 
              width: 64,
              height: 64,
            },
          },
          opacity: {
            value: 0.9,
            random: true,
          },
          size: {
            value: 14, // base size
            random: { enable: true, minimumValue: 6 }, // some variation
          },
          rotate: {
            // spinning flakes
            value: { min: 0, max: 360 },
            direction: "random",
            animation: {
              enable: true,
              speed: 10, // higher = faster spin
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
