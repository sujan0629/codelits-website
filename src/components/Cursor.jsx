import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../Cursor.css"; 

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const point = document.querySelector(".point"); 
    const hoverElements = document.querySelectorAll(".hover-effect");

    // Move the small point with mouse
    const movePoint = (e) => {
      point.style.left = `${e.clientX}px`;
      point.style.top = `${e.clientY}px`;
    };

    const moveCursor = () => {
      const offsetX = 15; 
      const offsetY = 15; 

      gsap.to(cursor, {
        x: point.offsetLeft + offsetX,
        y: point.offsetTop + offsetY, 
        duration: 0.8, 
        ease: "power2.out", 
      });
    };

    window.addEventListener("mousemove", (e) => {
      movePoint(e); 
      moveCursor(); 
    });

    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        cursor.classList.add("link-grow");
        gsap.to(cursor, { scale: 2 });
      });
      element.addEventListener("mouseleave", () => {
        cursor.classList.remove("link-grow");
        gsap.to(cursor, { scale: 1 });
      });
    });

    return () => {
      window.removeEventListener("mousemove", movePoint);
      hoverElements.forEach((element) => {
        element.removeEventListener("mouseenter", () => {
          cursor.classList.add("link-grow");
          gsap.to(cursor, { scale: 2 });
        });
        element.removeEventListener("mouseleave", () => {
          cursor.classList.remove("link-grow");
          gsap.to(cursor, { scale: 1 });
        });
      });
    };
  }, []);

  return (
    <>
      <div className="point"></div> {/* This is the small point replacing the original mouse */}
      <div className="cursor"></div> {/* This is the circle following the point */}
    </>
  );
};

export default Cursor;
