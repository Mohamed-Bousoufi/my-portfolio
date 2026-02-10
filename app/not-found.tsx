'use client';

import animationData from "../public/Astronaut.json";
import Lottie from "lottie-react";

function NotFound() {
  return (
    <div className="relative flex items-center justify-center h-screen w-full">
      <h1 className="absolute md:top-80 md:left-100 md:-right-40 inset-0 text-9xl font-bold mb-4 -z-20 bg-gradient-to-r from-destructive via-primary to-secondary bg-clip-text text-transparent h-fit max-w-lg">
        Not Found 404
      </h1>
      <Lottie animationData={animationData} loop={true} className="inset-0 w-full h-full" />
    </div>
  );
}

export default NotFound;
