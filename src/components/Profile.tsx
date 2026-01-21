import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Profile = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const el = containerRef.current;

        gsap.fromTo(
            '.profile-title',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                },
            }
        );

        gsap.fromTo(
            '.profile-content',
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: el,
                    start: 'top 70%',
                },
            }
        );
    }, []);

    return (
        <section
            id="profile"
            ref={containerRef}
            className="w-full min-h-screen bg-[var(--color-paper)] flex flex-col items-center justify-center py-32 px-10 md:p-20 relative overflow-hidden"
        >
            {/* Title */}
            <h2 className="profile-title font-bold text-[8vw] md:text-[6vw] leading-none text-[var(--color-coffee)] tracking-tighter mb-20 text-center select-none pt-20">
                Profile
            </h2>

            {/* Content Grid */}
            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 items-start">

                {/* Left Column */}
                <div className="flex flex-col gap-6 profile-content text-left md:text-right">
                    <div
                        className="font-cursive text-5xl md:text-6xl text-[var(--color-ink)] opacity-80"
                        style={{ fontFamily: 'Dancing Script, cursive' }}
                    >
                        Ahmad Subhan
                    </div>
                    <p className="text-[var(--color-ink)] opacity-70 leading-relaxed text-sm md:text-base">
                        Saya adalah Fresh Graduate Program Studi Fotografi dari Institut Seni Indonesia PadangPanjang dengan pengalaman profesional di bidang fotografi baik sebagai mahasiswa maupun freelance photographer. Selama menjalani praktik kerja, saya aktif mengembangkan keterampilan visual dan artistik melalui berbagai proyek dokumentasi, komersial, dan kreatif.
                    </p>
                </div>

                {/* Center Image */}
                <div className="profile-content flex justify-center items-center">
                    <div className="relative w-full aspect-[4/5] bg-gray-200 overflow-hidden shadow-lg transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
                        <img
                            src="/subhan2.png"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Right Column */}
                <div className="profile-content flex flex-col gap-6 text-left">
                    <div className="hidden md:block h-16"></div> {/* Spacer to align with text below signature if needed, or just let it float */}
                    <p className="text-[var(--color-ink)] opacity-70 leading-relaxed text-sm md:text-base">
                        Selain fotografi, saya juga memiliki pengalaman sebagai content creator, dengan kemampuan dalam mengedit foto menggunakan Adobe Photoshop dan Adobe Lightroom, serta mengedit video menggunakan Capcut.
                    </p>
                </div>

            </div>

            {/* Page Number / Decoration */}
            <div className="absolute bottom-10 right-10 text-[var(--color-paper)] mix-blend-difference font-bold text-2xl opacity-20">
                02
            </div>
        </section>
    );
};

export default Profile;
