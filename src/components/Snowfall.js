import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "@tsparticles/slim";

function Snowfall() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // ✔ Correct for new tsparticles
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
            value: 140,
            density: { enable: true, area: 800 },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: 0.8,
            random: true,
          },
          size: {
            value: { min: 1, max: 3 },
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
