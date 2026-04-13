"use client";
import React, { useEffect, useRef, useState } from "react";
import { useLoading } from "@/context/LoadingContext";

interface Hero3DProps {
  onLoaded?: () => void;
}

export const Hero3D: React.FC<Hero3DProps> = ({ onLoaded }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [ready, setReady] = useState(false);
  const { setIsLoading, resetLoading } = useLoading();

  useEffect(() => {
    // Every time Hero mounts, we ensure loading is true
    resetLoading();
    
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === '3D_READY') {
        setReady(true);
        setIsLoading(false);
        if (onLoaded) onLoaded();
      }
    };

    window.addEventListener('message', handleMessage);

    // Safety fallback: if 3D doesn't load in 8 seconds, force hide preloader
    const timeout = setTimeout(() => {
      if (!ready) {
        setReady(true);
        setIsLoading(false);
        if (onLoaded) onLoaded();
      }
    }, 8000);

    return () => {
      window.removeEventListener('message', handleMessage);
      clearTimeout(timeout);
    };
  }, [onLoaded, ready, setIsLoading, resetLoading]);

  useEffect(() => {
    let frameId: number;
    let lastX = window.innerWidth / 2;
    let lastY = window.innerHeight / 2;

    const postToIframe = (data: Record<string, unknown>) => {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(data, "*");
      }
    };

    const handleInteraction = (x: number, y: number) => {
      lastX = x;
      lastY = y;
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        postToIframe({ type: "MOUSE_MOVE", x, y });
      });
    };

    const handleScroll = () => {
      // Map scroll progress to a vertical "exception" eye-tracking effect
      // This makes the character look up/down as you scroll, creating a deep parallax
      const scrollProgress = window.scrollY / (window.innerHeight * 0.5);
      const virtualY = lastY + (scrollProgress * 200); // Shift tracking based on scroll
      
      postToIframe({ 
        type: "SCROLL_SYNC", 
        scrollY: window.scrollY 
      });
      
      // Also send a virtual mouse move to keep the character "following" the scroll
      postToIframe({ type: "MOUSE_MOVE", x: lastX, y: virtualY });
    };

    const onMouseMove = (e: MouseEvent) => handleInteraction(e.clientX, e.clientY);
    
    // On mobile, we keep interaction proxy but allow native scrolling via CSS touch-action
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        handleInteraction(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#0F1414]">
      <iframe
        ref={iframeRef}
        src="/hero3d/index.html?v=11"
        className={`w-full h-full border-none pointer-events-auto transition-opacity duration-1000 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
        style={{ touchAction: 'pan-y' }}
        title="Ahmed Ikrami - 3D Hero"
        loading="lazy"
      />
    </div>
  );
};
