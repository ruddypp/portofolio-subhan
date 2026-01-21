import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    {
        id: 1,
        title: 'Hans Project',
        category: 'Commercial',
        cover: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop', // Placeholder
        images: Array(10).fill('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop'), // Placeholders
    },
    {
        id: 2,
        title: 'Triptophan',
        category: 'Creative',
        cover: 'https://images.unsplash.com/photo-1558470598-a5dda9640f6b?q=80&w=1000&auto=format&fit=crop', // Placeholder
        images: Array(10).fill('https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=800&auto=format&fit=crop'), // Placeholders
    },
    {
        id: 3,
        title: 'MVP Pictures',
        category: 'Documentation',
        cover: 'https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?q=80&w=1000&auto=format&fit=crop', // Placeholder
        images: Array(10).fill('https://images.unsplash.com/photo-1542206395277-415488467093?q=80&w=800&auto=format&fit=crop'), // Placeholders
    },
];

interface Project {
    id: number;
    title: string;
    category: string;
    cover: string;
    images: string[];
}

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const containerRef = useRef(null);
    const modalRef = useRef(null);

    useEffect(() => {
        const el = containerRef.current;

        // Animate Title
        gsap.fromTo('.project-title',
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1,
                scrollTrigger: { trigger: el, start: 'top 70%' }
            }
        );

        // Animate Bento Grid Items
        gsap.fromTo('.bento-item',
            { y: 100, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1, stagger: 0.2,
                scrollTrigger: { trigger: el, start: 'top 60%' }
            }
        );
    }, []);

    // Modal Animation logic
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
            gsap.fromTo(modalRef.current,
                { opacity: 0, scale: 0.9 },
                { opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out' }
            );
            gsap.fromTo('.modal-img',
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, delay: 0.3 }
            );
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [selectedProject]);

    const closeModal = () => {
        gsap.to(modalRef.current, {
            opacity: 0, scale: 0.9, duration: 0.3, onComplete: () => setSelectedProject(null)
        });
    };

    return (
        <section
            id="projects"
            ref={containerRef}
            className="w-full min-h-screen bg-[var(--color-paper)] py-32 px-10 md:p-20 relative"
        >
            {/* Title */}
            <h2 className="project-title font-bold text-[8vw] md:text-[6vw] leading-none text-[var(--color-coffee)] tracking-tighter mb-20 text-center select-none pt-20">
                Projects
            </h2>

            {/* Main Bento Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 grid-rows-2 md:grid-rows-2 gap-4 h-[100vh] md:h-[80vh]">

                {/* Item 1: Span 2 cols, 2 rows (Big Left) */}
                <div
                    onClick={() => setSelectedProject(projectsData[0])}
                    className="bento-item md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl cursor-pointer bg-black"
                >
                    <img src={projectsData[0].cover} alt={projectsData[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-60" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter">{projectsData[0].title}</h3>
                        <span className="text-white text-lg tracking-widest mt-2">{projectsData[0].category}</span>
                    </div>
                </div>

                {/* Item 2: Span 1 col, 1 row (Top Right) */}
                <div
                    onClick={() => setSelectedProject(projectsData[1])}
                    className="bento-item md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-3xl cursor-pointer bg-black"
                >
                    <img src={projectsData[1].cover} alt={projectsData[1].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-60" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tighter">{projectsData[1].title}</h3>
                    </div>
                </div>

                {/* Item 3: Span 1 col, 1 row (Bottom Right) */}
                <div
                    onClick={() => setSelectedProject(projectsData[2])}
                    className="bento-item md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-3xl cursor-pointer bg-black"
                >
                    <img src={projectsData[2].cover} alt={projectsData[2].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-60" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tighter">{projectsData[2].title}</h3>
                    </div>
                </div>

            </div>

            {/* Modal Overlay */}
            {selectedProject && (
                <div className="fixed inset-0 z-[100] bg-[var(--color-ink)] bg-opacity-95 flex items-center justify-center p-4 md:p-10 backdrop-blur-md">
                    <div ref={modalRef} className="w-full h-full max-w-7xl bg-[var(--color-paper)] rounded-3xl overflow-hidden flex flex-col relative">

                        {/* Modal Header */}
                        <div className="flex justify-between items-center p-6 md:p-10 border-b border-[var(--color-coffee)]/10">
                            <div>
                                <h3 className="text-4xl md:text-6xl font-bold text-[var(--color-coffee)] tracking-tighter uppercase">{selectedProject.title}</h3>
                                <p className="text-[var(--color-ink)] opacity-60 tracking-widest">{selectedProject.category}</p>
                            </div>
                            <button onClick={closeModal} className="p-4 hover:bg-black/5 rounded-full transition-colors">
                                <X size={32} className="text-[var(--color-ink)]" />
                            </button>
                        </div>

                        {/* Modal Content (Nested Bento) */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-10">
                            <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 gap-4 md:h-[120vh]">
                                {selectedProject.images.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className={`modal-img rounded-xl overflow-hidden bg-gray-200 relative group
                                ${idx === 0 ? 'col-span-2 row-span-2' : ''} 
                                ${idx === 4 ? 'col-span-2 row-span-1' : ''}
                                ${idx === 7 ? 'row-span-2' : ''}
                            `}
                                    >
                                        <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            )}

            {/* Page Number */}
            <div className="absolute bottom-10 left-10 text-[var(--color-paper)] mix-blend-difference font-bold text-2xl opacity-20">
                04
            </div>
        </section>
    );
};

export default Projects;
