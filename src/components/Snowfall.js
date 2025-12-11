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
            value: 55, 
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
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
            value: 20,              // bigger flakes
            random: true,           
          },
          rotate: {
            value: 0,
            random: true,
            direction: "random",
            animation: {
              enable: true,
              speed: 5,             
              sync: false,
            },
          },
          move: {
            enable: true,
            direction: "bottom",    
            speed: 1.2,
            straight: false,
            out_mode: "out",        
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
