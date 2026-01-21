

const Footer = () => {
    return (
        <footer className="w-full py-4 px-6 md:px-10 bg-white opacity-60 flex flex-col md:flex-row justify-between items-center border-t border-[var(--color-coffee)]/10 text-xs sticky bottom-0 z-20">
            <div>
                &copy; {new Date().getFullYear()} Ahmad Subhan. All rights reserved.
            </div>
            <div className="flex gap-6 mt-2 md:mt-0 font-medium tracking-widest uppercase text-[0.7rem]">
                <span>Fotografer</span>
                <span>•</span>
                <span>Content Creator</span>
            </div>
        </footer>
    );
};

export default Footer;
