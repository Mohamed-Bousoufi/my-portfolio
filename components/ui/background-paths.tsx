"use client";

import { motion } from "framer-motion";

import { useMemo } from "react";

function FloatingPaths({ position }: { position: number }) {
  // Generate stable random durations for each path
  const pathData = useMemo(
    () =>
      Array.from({ length: 36 }, (_, i) => {
        // Calculate all values as numbers, let the sign be included naturally
        const mX = 0 - (380 - i * 5 * position);
        const mY = 0 - (189 + i * 6);
        const c1X = 0 - (380 - i * 5 * position);
        const c1Y = 0 - (189 + i * 6);
        const c2X = 0 - (312 - i * 5 * position);
        const c2Y = 216 - i * 6;
        const c3X = 152 - i * 5 * position;
        const c3Y = 343 - i * 6;
        const c4X = 616 - i * 5 * position;
        const c4Y = 470 - i * 6;
        const c5X = 684 - i * 5 * position;
        const c5Y = 875 - i * 6;
        return {
          id: i,
          d: `M${mX} ${mY}C${c1X} ${c1Y} ${c2X} ${c2Y} ${c3X} ${c3Y}C${c4X} ${c4Y} ${c5X} ${c5Y} ${c5X} ${c5Y}`,
          width: 0.5 + i * 0.03,
          duration: 20 + Math.random() * 10,
        };
      }),
    [position]
  );

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-primary"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {pathData.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.02}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: path.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen min-w-full flex flex-row items-start justify-center bg-transparent">
      <div className="absolute inset-0">
        <FloatingPaths position={0} />
        <FloatingPaths position={9} />
      </div>

      <div className="relative z-10 container text-center bg-transparent min-w-screen">
        {children ? (
          children
        ) : (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 md:mb-8 tracking-tighter">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/80">
              </span>
            </h1>
          </motion.div>
        )}
      </div>
    </div>
  );
}
