import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [loading, setLoading] = useState(true); 
  const videoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoading(false); 
  };

  useEffect(() => {
    const video = videoRef.current;

    if (video) {

      // prevent pausing and entering fullscreen
      video.addEventListener('pause', (e) => {
        e.preventDefault();
        video.play();
      });

      video.addEventListener('fullscreenchange', (e) => {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        }
      });
    }

    gsap.set("#video-frame", {
      clipPath: "polygon(13% 22%, 87% 22%, 87% 88%, 13% 88%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []); 

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
{loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
         
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}      

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <video
          ref={videoRef}
          src="videos/hero-hehe.mp4" 
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 size-full object-cover object-center"
          onLoadedData={handleVideoLoad} 
          controls={false} // ensure controls are disabled
        />
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          Stu<b>d</b>io
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              Cod<b>e </b>Li<b>t</b>s
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular hover-effect text-blue-100">
           Innovating Digital Solutions:<br /> Software, Apps, Games, and Web
            </p>

            <Button
              id="get-in-touch"
              title="Get in touch"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-500 flex-center gap-1  hover-effect"
            />
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        Stu<b>d</b>io
      </h1>
    </div>
  );
};

export default Hero;
