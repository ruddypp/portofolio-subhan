import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const el = containerRef.current;

        gsap.fromTo(
            '.edu-content',
            { x: 50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: el,
                    start: 'top 60%',
                },
            }
        );

        gsap.fromTo(
            '.edu-image',
            { x: -50, opacity: 0, scale: 0.9 },
            {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 60%',
                },
            }
        );

    }, []);

    return (
        <section
            id="education"
            ref={containerRef}
            className="w-full min-h-screen bg-[var(--color-paper)] flex flex-col items-center justify-center py-32 px-10 md:p-20 relative overflow-hidden"
        >
            {/* Title */}
            <h2 className="font-bold text-[8vw] md:text-[6vw] leading-none text-[var(--color-coffee)] tracking-tighter mb-20 text-center select-none pt-20">
                Education
            </h2>

            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

                {/* Left: Sticker Image */}
                <div className="edu-image flex justify-center md:justify-end relative">
                    {/* Blob/Shape Background optional, but let's stick to the sticker effect */}
                    <img
                        src="/subhan3.png"
                        alt="Education"
                        className="w-full max-w-md object-contain grayscale hover:grayscale-0 transition-all duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                        style={{ filter: 'drop-shadow(0px 0px 20px rgba(255, 255, 255, 0.9))' }} // Manual white glow/sticker attempt
                    />
                </div>

                {/* Right: Info */}
                <div className="flex flex-col gap-4 text-left edu-content">

                    {/* Script Text */}
                    <div
                        className="font-cursive text-4xl md:text-5xl text-[var(--color-ink)] opacity-80"
                        style={{ fontFamily: 'Dancing Script, cursive' }}
                    >
                        Sarjana Seni
                    </div>

                    {/* Description */}
                    <p className="text-[var(--color-ink)] opacity-70 leading-relaxed text-sm md:text-base max-w-lg text-justify">
                        Lulusan Institut Seni Indonesia PadangPanjang jurusan Fotografi tahun 2021.
                        <br /><br />
                        Selama masa studi, saya fokus mendalami teori dan praktik fotografi kontemporer, teknik pencahayaan studio, serta manajemen produksi visual. Pengalaman akademis ini membentuk landasan kuat dalam pemahaman estetika dan teknis yang saya terapkan dalam setiap karya profesional saya saat ini.
                    </p>

                </div>

            </div>

            {/* Page Number */}
            <div className="absolute bottom-10 left-10 text-[var(--color-paper)] mix-blend-difference font-bold text-2xl opacity-20">
                03
            </div>
        </section>
    );
};

export default Education;
