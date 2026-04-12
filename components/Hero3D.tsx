"use client";
import React, { useEffect, useRef } from "react";

export const Hero3D = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    let frameId: number;
    let lastX = window.innerWidth / 2;
    let lastY = window.innerHeight / 2;

    const postToIframe = (data: any) => {
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
        src="/hero3d/index.html?v=10"
        className="w-full h-full border-none pointer-events-auto"
        style={{ touchAction: 'pan-y' }}
        title="Ahmed Ikrami - 3D Hero"
        loading="lazy"
      />
    </div>
  );
};
