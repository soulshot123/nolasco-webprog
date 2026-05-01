import { NavLink } from 'react-router-dom';

const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Articles', to: '/articles' },
];

const authLinks = [
    { label: 'Sign In', to: '/signin' },
    { label: 'Sign Up', to: '/signup' },
];

const navLinkClassName = ({ isActive }) =>
    [
        'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition gold-accent iron-border',
        isActive
        ? 'bg-knight-velvet border-knight-gold text-yellow-50 knight-glow'
        : 'border-transparent text-knight-iron hover:border-knight-gold hover:bg-yellow-50/80 hover:text-knight-ink',
    ] .join(' ');

    const NavBar = () => {
    return (
            <header className="fixed -inset-x-0 top-0 z-50 border-b-2 border-iron iron-border bg-gradient-to-r from-knight-parchment to-yellow-50/95 backdrop-blur knight-shadow">
                <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
                    <NavLink to="/" className="flex items-center gap-3 hover:scale-105 transition-transform">
                        <svg width="48" height="48" viewBox="0 0 48 48" className="rounded-full bg-gradient-to-br from-knight-gold to-yellow-600 p-3 drop-shadow-lg knight-glow">
                            <text x="24" y="34" fontSize="24" fontWeight="900" textAnchor="middle" fill="#1A0D00" dy=".3em" fontFamily="'MedievalSharp', cursive">N</text>
                            <circle cx="24" cy="24" r="20" fill="none" stroke="#C0C0C0" strokeWidth="2"/>
                        </svg>
                        <div className="space-y-0.5">
                            <p className="text-2xl font-black text-knight-ink tracking-tight">Nolasco</p>
                            <p className="text-sm font-bold uppercase tracking-[0.3em] gold-accent">Knight Forge</p>
                        </div>
                    </NavLink>

                    <nav className="hidden items-center gap-2 md:flex">
                        {links.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                end={link.to === '/'}
                                className={navLinkClassName}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <div className="mx-1 h-6 w-px bg-knight-iron/30" />
                        {authLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={navLinkClassName}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </header>
        );

    };

export default NavBar;