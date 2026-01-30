"use client";

import { IconArrowLeft, IconArrowRight,IconBrandGithub } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
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
    <div className="max-w-screen  py-20 font-sans antialiased md:max-w-4xl ">
      <div className="relative grid grid-cols-1 gap-40 md:grid-cols-2">
        <div>
          <div className="relative h-128 w-full">
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
                  className="absolute inset-0 origin-bottom"
                >
                
                  <img
                    onClick={()=>{console.log("Image Name",testimonial.name)}}
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={150}
                    height={150}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-fit object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4 gap-4">
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
            <h3 className="text-2xl font-bold text-black dark:text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
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
          <div className="flex items-center justify-center gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button flex  w-25 items-center justify-center rounded-full bg-transparent border-foreground border-4"
            >
              <IconArrowLeft className="h-10 w-10 text-foreground transition-transform duration-300 group-hover/button:rotate-12 " />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex  w-25 items-center justify-center rounded-full bg-transparent border-foreground border-4"
            >
              <IconArrowRight className="h-10 w-10 text-foreground transition-transform duration-300 group-hover/button:-rotate-12 " />
            </button>
          </div>
          <button className="border rounded-3xl border-4 border-primary flex items-center justify-center w-50 self-center text-primary font-bold gap-1">See In Github<IconBrandGithub className="w-10 h-10 text-foreground transition-transform duration-300 group-hover/button:rotate-12" /></button>
        </div>
      </div>
    </div>
  );
};
