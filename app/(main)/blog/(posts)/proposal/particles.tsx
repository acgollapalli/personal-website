'use client'

import React, { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes"

// This is bad. You should write YOUR OWN animations, so you can learn and stuff. But NOOOO, you want to sleep. So you pull in a library, without even trying.
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim, } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

interface ParticleEffectProps {
  children: React.ReactNode;
}


export const ParticleEffect: React.FC<ParticleEffectProps> = ({children}) => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container: any) =>  {
	console.log(container);
  };


  const { theme } = useTheme()

  const options = useMemo(
    () => ({
      //background: {
      //  color: {
      //    value: "#0d47a1",
      //  },
      //},
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: theme == "dark" ? "#616060" : "#c9c9c9",
        },
        links: {
          color: theme == "dark" ? "#575757" : "#7a7979",
          distance: 150,
          enable: true,
          opacity: 0.1,
          width: 1,
        },
        move: {
          direction: "none" as any,
          enable: true,
          outModes: {
            default: "bounce",
          } as any,
          random: false,
          speed: 4,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 300,
        },
        opacity: {
          value: 0.1,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [theme],
  );

    return (
	  <div>
		{ init && (
		<Particles
          id="tsparticles"
		  className="z-0"
        particlesLoaded={particlesLoaded}
        options={options}
      >
		</Particles>) }

		 {children}
	  </div>
    );
};
