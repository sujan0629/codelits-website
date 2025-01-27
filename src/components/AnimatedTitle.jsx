import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: '100 bottom',
          end: 'center bottom',
          toggleActions: 'play none none reverse',
        }
      });

      titleAnimation.to('.animated-word', {
        opacity: 1,
        transform: 'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
        ease: 'power2.inOut',
        stagger: 0.02,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Use a regular expression to split text while preserving HTML tags.
  const parseTitle = (text) => {
    const regex = /(<b.*?>.*?<\/b>)|([^<]+)/g;
    const result = [];
    let match;
    
    while ((match = regex.exec(text)) !== null) {
      if (match[1]) {
        result.push(`<span class="animated-word">${match[1]}</span>`);
      } else if (match[2]) {
        result.push(`<span class="animated-word">${match[2]}</span>`);
      }
    }
    return result.join('');
  };

  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
      <div
        className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        dangerouslySetInnerHTML={{ __html: parseTitle(title) }}
      />
    </div>
  );
};

export default AnimatedTitle;
