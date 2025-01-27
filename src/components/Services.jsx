import React, { useState, useRef, useEffect } from 'react';
import { TiLocationArrow } from 'react-icons/ti';
import LoopingWords from './LoopingWords'; 

const BentoTilt = ({ children, className = ""}) => {
    const [transformStyle, setTransformStyle] = useState("");
    const itemRef = useRef (null);

    const handleMouseMove = (e) => {
        if(!itemRef.current) return;

        const { left, top, width, height } = itemRef.current.getBoundingClientRect();
        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;

        const newTransform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
        setTransformStyle(newTransform);
    };

    const handleMouseLeave = () => {
        setTransformStyle("");
    };

    return (
        <div
            className={className}
            ref={itemRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: transformStyle,
                transition: "transform 0.4s ease-out", // add transition
            }}
        >
            {children}
        </div>
    );
};

const BentoCard = ({ src, title, description }) => {
    const videoRef = useRef(null);

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
    }, []);

    return(
        <div className="relative size-full">
            <video 
                ref={videoRef}
                src={src}
                loop
                muted
                autoPlay
                className="absolute left-0 top-0 size-full object-cover object-center" 
                controls={false} // controls are disabled
            />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-white">
                <div>
                    <h1 className="bento-title special-font">{title}</h1>
                    {description && (
                        <p className="mt-3 max-w-64 text-xs md:text-base">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

const Services = () => {
    return (
        <section className="bg-black pb-52">
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-5 py-32">
                    <LoopingWords />
                </div>
           
                <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
                    <BentoCard 
                        src="videos/feature-1.mp4"
                        title={<>Web d<b>e</b>velopment</>}
                        description=""
                    />
                </BentoTilt>

                <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
                    <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row:span-2">
                        <BentoCard 
                            src="videos/feature-2.mp4"
                            title={<>App D<b>E</b>velopment</>}
                            description=""
                        />
                    </BentoTilt>

                    <BentoTilt className="bento_tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                        <BentoCard 
                            src="videos/feature-3.mp4"
                            title={<>Digi<b>t</b>al Ma<b>R</b>keting</>}
                            description=""
                        />
                    </BentoTilt>

                    <BentoTilt className="bento_tilt_1 me-14 md:col-span-1 md:me-0 w-full sm:w-auto">
                        <BentoCard 
                            src="videos/feature-4.mp4"
                            title={<>G<b>a</b>me d<b>e</b>velopment</>}
                            description=""
                        />
                    </BentoTilt>

                    <BentoTilt className="bento-tilt_2">
                        <video 
                            src="videos/feature-5.mp4"
                            loop
                            muted
                            autoPlay
                            className="size-full object-cover object-center"
                            controls={false} // controls are disabled !
                        />
                    </BentoTilt>

                    <BentoTilt className="bento-tilt_2">
                        <div className="flex size-full flex-col justify-between bg-red-800 p-5">
                            <h1 className="bento-title special-font max-w-64 text-black">M<b>o</b>re ser<b>v</b>ices c<b>o</b>mming</h1>
                            <TiLocationArrow className=" m-5 scale-[5] self-end" />
                        </div>
                    </BentoTilt>
                </div>
            </div>
        </section>
    );
}

export default Services;
