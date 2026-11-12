import { useEffect, useRef, useState } from "react";
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
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let broken = false;

    const onContextLost = (event: Event) => {
      event.preventDefault();
      broken = true;
      setHasError(true);
    };
    canvas.addEventListener("webglcontextlost", onContextLost);

    let phi = 0;
    let width = canvas.offsetWidth;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // cobe requests "webgl2" then falls back to "webgl"; grabbing the same
    // type here returns the identical cached context so we can verify it
    // actually drew something (cobe swallows shader compile failures
    // silently and returns a working-looking no-op instead of throwing).
    const gl = (canvas.getContext("webgl2") ||
      canvas.getContext("webgl")) as WebGLRenderingContext | null;

    let globe: ReturnType<typeof createGlobe> | null = null;
    try {
      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width,
        height: width,
        phi: 0,
        theta: 0.3,
        dark: 1,
        diffuse: 1.2,
        scale: 1,
        mapSamples: 10000,
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
    } catch {
      setTimeout(() => setHasError(true), 0);
    }

    if (!globe) {
      return () => {
        canvas.removeEventListener("webglcontextlost", onContextLost);
      };
    }

    const activeGlobe = globe;

    const onResize = () => {
      width = canvas.offsetWidth;
      activeGlobe.update({ width, height: width });
    };
    window.addEventListener("resize", onResize);

    let animationId = 0;
    let destroyed = false;
    let frame = 0;
    const safeCanvas = canvas;

    function animate() {
      if (destroyed || broken) return;
      if (!prefersReducedMotion) {
        phi += 0.0032;
      }
      activeGlobe.update({ phi });
      frame += 1;

      // Reveal only after a few frames have already drawn. The very first
      // WebGL draw calls on a fresh context can render incorrectly for a
      // frame or two while the GPU driver JIT-compiles shaders — keeping
      // the canvas hidden through that warm-up avoids a visible flash.
      if (frame === 3 && !destroyed) {
        safeCanvas.style.opacity = "1";
      }

      // A few frames in, verify the draw actually painted something.
      // Must read back in this same synchronous task, right after
      // update() draws — cobe's context uses preserveDrawingBuffer:false,
      // so the buffer can be cleared once the browser presents the frame.
      if (frame === 6 && gl && !gl.isContextLost()) {
        try {
          const backingSize = Math.floor(width * dpr);
          const pixel = new Uint8Array(4);
          gl.readPixels(
            Math.floor(backingSize / 2),
            Math.floor(backingSize / 2),
            1,
            1,
            gl.RGBA,
            gl.UNSIGNED_BYTE,
            pixel,
          );
          const r = pixel[0] ?? 0;
          const g = pixel[1] ?? 0;
          const b = pixel[2] ?? 0;
          const a = pixel[3] ?? 0;
          const looksLikeFlatGray =
            a > 200 &&
            Math.abs(r - g) < 12 &&
            Math.abs(g - b) < 12 &&
            r > 90 &&
            r < 230;
          if (looksLikeFlatGray) {
            broken = true;
            setHasError(true);
          }
        } catch {
          // readPixels can throw depending on context config; ignore.
        }
      }

      animationId = requestAnimationFrame(animate);
    }

    setTimeout(() => {
      animate();
    });

    return () => {
      destroyed = true;
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      activeGlobe.destroy();
    };
  }, [prefersReducedMotion]);

  if (hasError) {
    return (
      <div className="flex aspect-square w-full max-w-100 items-center justify-center">
        <div className="relative size-full rounded-full border border-accent/30">
          <div
            className="absolute inset-4 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(184,255,69,0.12),transparent_60%)]"
            aria-hidden
          />
          <div
            className="absolute inset-0 rounded-full opacity-50"
            style={{
              backgroundImage:
                "radial-gradient(circle, #3a3f47 1px, transparent 1px)",
              backgroundSize: "14px 14px",
              maskImage:
                "radial-gradient(circle, black 60%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(circle, black 60%, transparent 100%)",
            }}
            aria-hidden
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex aspect-square w-full max-w-100 items-center justify-center">
      <canvas
        ref={canvasRef}
        className="size-full opacity-0 transition-opacity duration-700"
      />
    </div>
  );
}
