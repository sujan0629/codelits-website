import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import AnimatedTitle from './AnimatedTitle';
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#clip',
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to('.mask-clip-path', {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-full">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5 px-4 sm:px-8">
        <h2 className="font-general text-xs hover-effect uppercase text-center sm:text-sm lg:text-lg">
          Welcome to CodeLits Studio
        </h2>

        <AnimatedTitle
          title="Techno<b class='hover-effect'>l</b>ogy drives <b class='hover-effect'>- i</b>nnovative solu<b class='hover-effect'>t</b>ions & Leaders shape <b class='hover-effect'>~ s</b>uccess."
          containerClass="mt-5 text-xs !text-black text-center"
        />

        <div className="about-subtext flex justify-center items-center h-full">
          <Button
            id="product-button"
            title="BOD"
            rightIcon={<TiLocationArrow />}
            containerClass="bg-yellow-500 md:flex hidden hover-effect mt-20 items-center justify-center gap-1 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
          />
        </div>
      </div>

      <div className="relative h-dvh w-full" id="clip">
        <div className="mask-clip-path about-image relative w-full sm:w-2/3 lg:w-1/2">
          <img
            src="img/about1.gif"
            alt="Background"
            className="absolute left-0 top-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
