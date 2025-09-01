"use client";
import React, { useRef } from "react";
import "../styles/components.css";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
}

export default function Carousel({ children, className = "" }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth * 0.7;
      carouselRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`carousel-container ${className}`}>
      <button className="carousel-btn left" onClick={() => scroll("left")}>{"<"}</button>
      <div className="carousel-track" ref={carouselRef}>
        {children}
      </div>
      <button className="carousel-btn right" onClick={() => scroll("right")}>{">"}</button>
    </div>
  );
}
