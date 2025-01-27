import React, { useEffect, useRef } from "react";
import "../Slider.css";

const Slider = () => {
  const logos = [
    "/img/react.png",
    "/img/nextjs.png",
    "/img/node.png",
    "/img/express.avif",
    "/img/mongo-db.png",
    "/img/mysql-logo.png",
    "/img/firebase.png",
    "/img/github.png",
    "/img/git.png",
    "/img/docker.png",
    "/img/google-cloud.png",
    "/img/auth0.png",
    "/img/python.webp",
    "/img/django.png",
    "/img/tailwind.png",
    "/img/flutter.png",
    "/img/apple.png",
    "/img/unity.png",
    "/img/blender.png",
    "/img/3js.png",
    "/img/R.png",
    "/img/android.png",
    "/img/headless.png",
    "/img/socket.png",
    "/img/ts.png",
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 2; // Speed of scrolling

    const scrollLogos = () => {
      scrollAmount += scrollSpeed;

      if (scrollAmount >= slider.scrollWidth) {
        // Reset the scroll amount for seamless looping
        scrollAmount = 0;
      }

      slider.scrollLeft = scrollAmount;
      requestAnimationFrame(scrollLogos); 
    };

    scrollLogos(); // Start the scroll loop

    return () => {
      cancelAnimationFrame(scrollLogos); 
    };
  }, [logos]);

  return (
    <div className="logo-slider" ref={sliderRef}>
      <div className="logos-slide">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`logo-${index}`} />
        ))}
        {logos.map((logo, index) => (
          <img key={`duplicate-${index}`} src={logo} alt={`logo-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
