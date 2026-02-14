"use client";

import { ArrowLeft, ArrowRight, Github } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  href:string
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  // Store random rotations in state, generate on client only
  const [randomRotations, setRandomRotations] = useState<number[]>([]);
  useEffect(() => {
    setRandomRotations(testimonials.map(() => Math.floor(Math.random() * 21) - 10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testimonials.length]);
  return (
      <div className="flex flex-col gap-20 sm:gap-6 md:gap-8 lg:gap-8 w-full items-center border-foreground max-h-[80vh] overflow-auto p-2 sm:p-6 md:p-10">
        <div className="w-full flex flex-col md:flex-row items-center gap-4 sm:gap-8 md:gap-16">
          <div className="relative h-32 sm:h-64 md:h-96 lg:h-[28rem] w-full  rounded-3xl">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotations[index] ?? 0,
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : (randomRotations[index] ?? 0),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotations[index] ?? 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom flex items-center justify-center"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={350}
                    height={350}
                    draggable={false}
                    className="w-full max-w-[120px] sm:max-w-[180px] md:max-w-[250px] lg:max-w-[350px] h-auto max-h-[120px] sm:max-h-[180px] md:max-h-[250px] lg:max-h-[350px] rounded-3xl object-cover object-center border-2 md:border-4 border-foreground"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="flex flex-col justify-between py-2 sm:py-4 gap-2 sm:gap-4 border-t-2 md:border-t-0 md:border-r-2 border-foreground w-full max-h-[60vh] overflow-y-auto">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <h3 className="text-lg sm:text-2xl md:text-5xl lg:text-6xl font-bold text-foreground dark:text-white break-words">
                {testimonials[active].name}
              </h3>
              <p className="text-[10px] sm:text-xs md:text-base text-gray-500 dark:text-neutral-500">
                {testimonials[active].designation}
              </p>
              <motion.p className="mt-2 sm:mt-4 md:mt-8 text-xs sm:text-sm md:text-xl text-foreground dark:text-neutral-300 font-bold">
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 sm:gap-8 w-full rounded-3xl">
          <button
            onClick={handlePrev}
            className="group/button flex w-16 sm:w-12 md:w-12 lg:w-16 items-center justify-center rounded-full bg-transparent border-foreground border-1 md:border-4"
          >
            <ArrowLeft className="h-8 w-8 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-foreground transition-transform duration-300 group-hover/button:rotate-12 " />
          </button>
          <button
            onClick={handleNext}
            className="group/button flex w-16 sm:w-12 md:w-12 lg:w-16 items-center justify-center rounded-full bg-transparent border-foreground border-1 md:border-4"
          >
            <ArrowRight className="h-8 w-8 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-foreground transition-transform duration-300 group-hover/button:-rotate-12 " />
          </button>
          <button
            onClick={()=> window.open(testimonials[active].href, "_blank")}
            className="border rounded-3xl border-1 md:border-4 border-foreground flex items-center justify-center px-2 md:px-4 w-auto min-w-[80px] sm:min-w-[120px] text-[10px] sm:text-xs md:text-lg self-center text-foreground font-bold gap-1 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            See In Github
            <Github className="h-8 w-8 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-foreground" />
          </button>
        </div>
      </div>
  );
};
