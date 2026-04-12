"use client";
import React, { useState, useEffect } from "react";

interface TypeWriterProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export const TypeWriter: React.FC<TypeWriterProps> = ({
  phrases,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2500,
  className = "",
}) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = phrases[currentPhraseIndex];

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        timer = setTimeout(() => {}, pauseDuration / 4);
      } else {
        timer = setTimeout(
          () => setCurrentText(currentFullText.substring(0, currentText.length - 1)),
          deletingSpeed
        );
      }
    } else {
      if (currentText === currentFullText) {
        timer = setTimeout(() => setIsDeleting(true), pauseDuration);
      } else {
        timer = setTimeout(
          () => setCurrentText(currentFullText.substring(0, currentText.length + 1)),
          typingSpeed
        );
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {currentText}
      <span className="text-signal animate-pulse">_</span>
    </span>
  );
};
