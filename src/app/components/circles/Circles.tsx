import useMediaQuery from "@/app/hooks/useMediaQuery";
import React, { useEffect, useRef } from "react";

const palette = ["#DB8B5E", "#F6F0E9", "#8A9E91", "#D6E0D6", "#3F5C56"];

// Biased random generator
function biasedRandom(
  min: number,
  max: number,
  bias: number,
  influence: number
) {
  const rnd = Math.random() * (max - min) + min;
  const mix = Math.random() * influence;
  return rnd * (1 - mix) + bias * mix;
}

const Circles = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isVertical = useMediaQuery("(max-width: 1024px)");

  const circleCount = isVertical ? 39 : 99;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";
    const circles: HTMLDivElement[] = [];

    for (let i = 0; i < circleCount; i++) {
      const circle = document.createElement("div");
      const size = Math.random() * 90 + 10;
      const color = palette[Math.floor(Math.random() * palette.length)];

      // Decide vertical placement
      const top = biasedRandom(0, 100, 50, 0.6);

      let left: number;

      if (top < 33) {
        // Top: place only on right
        left = biasedRandom(60, 100, 80, 0.9);
      } else if (top > 50) {
        // Bottom: full width
        left = Math.random() * 100;
      } else {
        // Middle: bias toward right
        left = biasedRandom(40, 100, 70, 0.8);
      }

      Object.assign(circle.style, {
        position: "absolute",
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        borderRadius: "50%",
        top: `${top}%`,
        left: `${left}%`,
        transform: "translate(-50%, -50%) scale(0)",
        opacity: "0",
        transition: "transform 0.4s ease, opacity 0.4s ease",
        pointerEvents: "none",
      });

      container.appendChild(circle);
      circles.push(circle);

      setTimeout(() => {
        circle.style.transform = "translate(-50%, -50%) scale(1)";
        circle.style.opacity = "1";
      }, i * 50);
    }

    let pointerPosition: { x: number; y: number } | null = null;
    let rafId: number | null = null;

    const resetTransforms = () => {
      circles.forEach((circle) => {
        circle.style.transform = "translate(-50%, -50%) scale(1)";
      });
    };

    const updateCirclePositions = () => {
      rafId = null;

      if (!pointerPosition) {
        resetTransforms();
        return;
      }

      const rect = container.getBoundingClientRect();

      circles.forEach((circle) => {
        const circleLeft = (parseFloat(circle.style.left) / 100) * rect.width;
        const circleTop = (parseFloat(circle.style.top) / 100) * rect.height;
        const dx = circleLeft - pointerPosition.x;
        const dy = circleTop - pointerPosition.y;
        const distance = Math.max(Math.hypot(dx, dy), 1);
        const moveX = (dx / distance) * 20;
        const moveY = (dy / distance) * 20;

        circle.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px)) scale(1)`;
      });
    };

    const queueUpdate = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(updateCirclePositions);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const withinBounds =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (!withinBounds) {
        pointerPosition = null;
        queueUpdate();
        return;
      }

      pointerPosition = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };

      queueUpdate();
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      pointerPosition = null;
      container.innerHTML = "";
    };
  }, [circleCount]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: isVertical ? "100%" : "400px",
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
};

export default Circles;
