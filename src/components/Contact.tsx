import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, MessageCircle, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const el = containerRef.current;

        // Animate Title
        gsap.fromTo(
            '.contact-title',
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1,
                scrollTrigger: { trigger: el, start: 'top 70%' }
            }
        );

        // Animate Links
        gsap.fromTo(
            '.contact-link',
            { y: 30, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 0.8, stagger: 0.1,
                scrollTrigger: { trigger: el, start: 'top 75%' }
            }
        );

    }, []);

    return (
        <section
            id="contact"
            ref={containerRef}
            className="w-full min-h-[80vh] bg-[var(--color-paper)] flex flex-col justify-center items-center py-32 px-10 md:p-20 relative z-10"
        >
            <div className="flex flex-col justify-center items-center text-center z-10 w-full max-w-4xl">
                {/* Script Text */}
                <div
                    className="font-cursive text-xl md:text-2xl mb-4 text-[var(--color-coffee)] opacity-60"
                    style={{ fontFamily: 'Dancing Script, cursive' }}
                >
                    Have a project in mind?
                </div>

                {/* Main Heading */}
                <h2 className="contact-title font-bold text-[5vw] md:text-[4rem] leading-[0.9] text-[var(--color-coffee)] tracking-tighter uppercase mb-12">
                    Let's Work<br />Together
                </h2>

                {/* Links */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center w-full">
                    <a href="mailto:ahmasubhan1999@gmail.com" className="contact-link group flex items-center gap-3 text-lg md:text-xl text-[var(--color-ink)] hover:text-[var(--color-coffee)] transition-colors">
                        <Mail size={20} />
                        <span>Gmail</span>
                    </a>
                    <a
                        href="https://wa.me/6285762755162?text=Halo%20Ahmad%20Subhan%2C%20saya%20tertarik%20untuk%20bekerja%20sama"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link group flex items-center gap-3 text-lg md:text-xl text-[var(--color-ink)] hover:text-[var(--color-coffee)] transition-colors"
                    >
                        <MessageCircle size={20} />
                        <span>WhatsApp</span>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-link group flex items-center gap-3 text-lg md:text-xl text-[var(--color-ink)] hover:text-[var(--color-coffee)] transition-colors">
                        <Instagram size={20} />
                        <span>Instagram</span>
                    </a>
                </div>
            </div>

        </section>
    );
};

export default Contact;
