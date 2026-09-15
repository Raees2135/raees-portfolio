import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { useReducedMotion } from "framer-motion";

const HOME = [10.5276, 76.2144] as [number, number]; // Thrissur, Kerala
const REACH_MARKERS: [number, number][] = [
  [37.7749, -122.4194], // San Francisco
  [51.5074, -0.1278], // London
  [35.6762, 139.6503], // Tokyo
  [-33.8688, 151.2093], // Sydney
  [6.5244, 3.3792], // Lagos, Nigeria
];

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let phi = 0;
    let width = canvas.offsetWidth;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const globe = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width,
      height: width,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      scale: 1,
      mapSamples: 16000,
      mapBrightness: 9,
      baseColor: [0.04, 0.07, 0.02],
      markerColor: [0.72, 1, 0.27],
      glowColor: [0.35, 0.55, 0.15],
      offset: [0, 0],
      markers: [
        { location: HOME, size: 0.09 },
        ...REACH_MARKERS.map((location) => ({ location, size: 0.045 })),
      ],
      arcs: REACH_MARKERS.map((to) => ({ from: HOME, to })),
      arcColor: [0.72, 1, 0.27],
      arcWidth: 0.6,
      arcHeight: 0.35,
    });

    const onResize = () => {
      width = canvas.offsetWidth;
      globe.update({ width, height: width });
    };
    window.addEventListener("resize", onResize);

    let animationId = 0;
    let destroyed = false;

    function animate() {
      if (destroyed) return;
      if (!prefersReducedMotion) {
        phi += 0.0032;
      }
      globe.update({ phi });
      animationId = requestAnimationFrame(animate);
    }

    setTimeout(() => {
      if (!destroyed && canvas) canvas.style.opacity = "1";
      animate();
    });

    return () => {
      destroyed = true;
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
      globe.destroy();
    };
  }, [prefersReducedMotion]);

  return (
    <div className="flex aspect-square w-full max-w-100 items-center justify-center">
      <canvas
        ref={canvasRef}
        className="size-full opacity-0 transition-opacity duration-700"
      />
    </div>
  );
}
