import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="border-t-2 border-zinc-200 bg-white/80 backdrop-blur-sm p-8 shadow-lg text-zinc-800">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
                    <div className="space-y-4">
                        <NavLink to="/" className="flex items-center gap-3 hover:scale-105 transition-transform">
                            <svg width="48" height="48" viewBox="0 0 48 48" className="rounded-full bg-gradient-to-br from-gray-200 to-gray-300 p-3 shadow-md">
                                <text x="24" y="34" fontSize="24" fontWeight="900" textAnchor="middle" fill="#1A0D00" dy=".3em" fontFamily="'Cinzel', serif">N</text>
                                <circle cx="24" cy="24" r="20" fill="none" stroke="#6B7280" strokeWidth="2"/>
                            </svg>
                            <div className="space-y-0.5">
                                <p className="text-xl font-black tracking-tight text-zinc-900">Nolasco</p>
                                <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-600">Knight Forge</p>
                            </div>
                        </NavLink>
                        <p className="text-sm leading-6 text-zinc-700">
                            Building modern web experiences with React and TailwindCSS.
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-4 text-lg font-bold text-zinc-900 uppercase tracking-wide">Quick Links</h4>
                        <nav className="space-y-2">
                            <NavLink to="/" className="block text-sm text-zinc-700 hover:text-zinc-900 hover:underline">Home</NavLink>
                            <NavLink to="/about" className="block text-sm text-zinc-700 hover:text-zinc-900 hover:underline">About</NavLink>
                            <NavLink to="/articles" className="block text-sm text-zinc-700 hover:text-zinc-900 hover:underline">Articles</NavLink>
                        </nav>
                    </div>
                    <div>
                        <h4 className="mb-4 text-lg font-bold text-zinc-900 uppercase tracking-wide">Social</h4>
                        <div className="space-y-2 text-sm text-zinc-700">
                            <a href="#" className="block hover:text-zinc-900 hover:underline">Twitter</a>
                            <a href="#" className="block hover:text-zinc-900 hover:underline">LinkedIn</a>
                            <a href="#" className="block hover:text-zinc-900 hover:underline">GitHub</a>
                        </div>
                    </div>
                    <div>
                        <h4 className="mb-4 text-lg font-bold text-zinc-900 uppercase tracking-wide">Contact</h4>
                        <p className="text-sm text-zinc-700 mb-2">nolasco@knightforge.com</p>
                        <p className="text-xs text-zinc-600">+1 (555) 123-KNIGHT</p>
                    </div>
                </div>
                <div className="mt-12 border-t border-zinc-200 pt-8 text-center text-xs text-zinc-600 md:flex md:justify-between">
                    <p>&copy; 2024 Nolasco Knight Forge. All rights reserved.</p>
                    <div className="mt-2 md:mt-0">
                        <span className="mx-1">Crafted with</span>
                        <span className="mx-1 text-red-500">&hearts;</span>
                        <span className="mx-1">and React</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
