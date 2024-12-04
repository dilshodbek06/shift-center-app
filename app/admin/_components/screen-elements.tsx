"use client";

import { BellPlus, Maximize, Minimize } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

interface ScreenElementsProps {
  elementRef: React.RefObject<HTMLDivElement>;
}

const ScreenElements = ({ elementRef }: ScreenElementsProps) => {
  const [isFull, setIsFull] = useState(false);

  // Update fullscreen state when it changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFull(document.fullscreenElement !== null);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && document.fullscreenElement) {
        document
          .exitFullscreen()
          .catch((err) =>
            console.error("Failed to exit fullscreen mode:", err)
          );
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Enable fullscreen
  const handleFullscreen = useCallback(async () => {
    if (elementRef.current) {
      try {
        await elementRef.current.requestFullscreen();
      } catch (err) {
        console.error("Failed to enable fullscreen mode:", err);
      }
    }
  }, [elementRef]);

  // Exit fullscreen
  const exitFullscreen = useCallback(async () => {
    try {
      await document.exitFullscreen();
    } catch (err) {
      console.error("Failed to exit fullscreen mode:", err);
    }
  }, []);

  return (
    <div className="flex items-center gap-x-3">
      {/* Fullscreen Button */}
      <div
        onClick={isFull ? exitFullscreen : handleFullscreen}
        role="button"
        aria-label="Toggle fullscreen mode"
        className="cursor-pointer"
      >
        {isFull ? (
          <Minimize className="w-6 h-6 text-white hover:text-blue-500" />
        ) : (
          <Maximize className="w-6 h-6 text-white hover:text-blue-500" />
        )}
      </div>

      {/* Notification Icon */}
      <BellPlus
        role="button"
        aria-label="Add notification"
        className="w-6 h-6 text-white cursor-pointer hover:text-blue-500"
      />
    </div>
  );
};

export default ScreenElements;
