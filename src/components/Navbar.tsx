import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Initial animation
        gsap.fromTo(
            '.nav-item',
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.5 }
        );
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Profile', href: '#profile' },
        { name: 'Education', href: '#education' },
        { name: 'Project', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed w-full top-0 z-50">
            {/* Header Content with Mix Blend */}
            <div className="w-full px-6 py-6 md:px-10 md:py-6 flex justify-between items-center mix-blend-difference text-[var(--color-paper)]">
                <div className="flex flex-col items-start leading-none nav-item">
                    <span className="text-lg font-bold tracking-widest uppercase mb-0.5">Ahmad Subhan</span>
                    <span className="text-[0.6rem] tracking-[0.2em] uppercase opacity-80">Fotografer</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="nav-item hover:text-[var(--color-coffee-light)] transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--color-coffee-light)] transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden nav-item z-50 text-[var(--color-paper)]" onClick={toggleMenu}>
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu Overlay - OUTSIDE the mix-blend container */}
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-screen bg-[var(--color-paper)] z-40 flex flex-col items-center justify-center gap-8 md:hidden">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-3xl font-bold text-[var(--color-coffee)] hover:text-[var(--color-coffee-light)] tracking-tighter uppercase"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
