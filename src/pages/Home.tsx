import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ReactLenis from 'lenis/react';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Reveal Text
        tl.fromTo(
            '.hero-text',
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, stagger: 0.1, ease: 'power4.out' }
        );

        // Reveal Image
        tl.fromTo(
            imageRef.current,
            { y: 50, opacity: 0, scale: 0.9 },
            { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: 'power3.out' },
            "-=1"
        );

        // Parallax Effect
        gsap.to(imageRef.current, {
            y: 50,
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        });

    }, []);

    return (
        <ReactLenis root>
            <div
                id="home"
                ref={containerRef}
                className="relative z-10 w-full min-h-screen bg-[var(--color-paper)] flex flex-col justify-center items-center pt-20"
            >

                {/* Main Content */}
                <div className="relative z-10 w-full flex justify-center items-center">

                    {/* Massive Text */}
                    <h1
                        ref={textRef}
                        className="font-bold text-[15vw] leading-none text-[var(--color-coffee)] tracking-tighter select-none z-10 mix-blend-multiply hero-text text-center mt-10"
                    >
                        PORTOFOLIO
                    </h1>

                    {/* Image */}
                    <div className="absolute -bottom-40 z-60 w-fit h-[80vh] flex items-end justify-center pointer-events-none">
                        <img
                            ref={imageRef}
                            src="/subhan.png"
                            alt="Ahmad Subhan"
                            className="h-full object-contain drop-shadow-2xl"
                        />
                    </div>

                </div>

            </div>
        </ReactLenis>
    );
};

export default Home;
