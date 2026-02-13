"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface TypingTextProps {
  text: string | string[];
  className?: string;
  cursorClassName?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
  loop?: boolean;
  showCursor?: boolean;
  fontSize?: string;
  textColor?: string;
}

export function TypingText({
  text,
  className,
  cursorClassName,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 2000,
  loop = true,
  showCursor = true,
  fontSize,
  textColor,
}: TypingTextProps) {
  const texts = Array.isArray(text) ? text : [text];
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex] ?? "";

    if (isWaiting) {
      const waitTimer = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delayBetweenTexts);
      return () => clearTimeout(waitTimer);
    }

    if (isDeleting) {
      if (displayedText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      } else {
        const deleteTimer = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(deleteTimer);
      }
    } else {
      if (displayedText === currentText) {
        if (loop || textIndex < texts.length - 1) {
          setIsWaiting(true);
        }
      } else {
        const typeTimer = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(typeTimer);
      }
    }
  }, [
    displayedText,
    isDeleting,
    isWaiting,
    textIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    delayBetweenTexts,
    loop,
  ]);

  return (
    <span 
      className={cn("inline-flex items-center text-foreground", className)}
      style={{ fontSize, color: textColor }}
    >
      <span>{displayedText}</span>
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={cn(
            "inline-block w-[2px] h-[1em] ml-1 bg-primary",
            cursorClassName
          )}
        />
      )}
    </span>
  );
}

interface TypewriterProps {
  words: string[];
  className?: string;
  cursorClassName?: string;
  fontSize?: string;
  textColor?: string;
}

export function Typewriter({
  words,
  className,
  cursorClassName,
  fontSize,
  textColor,
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < word.length) {
            setCurrentText(word.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span 
      className={cn("inline-flex items-center", className)}
      style={{ fontSize, color: textColor }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          className="text-foreground"
          style={{ color: textColor }}
        >
          {currentText}
        </motion.span>
      </AnimatePresence>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block w-[3px] h-[1.1em] ml-1 bg-primary rounded-sm",
          cursorClassName
        )}
      />
    </span>
  );
}
