import React from 'react';
import Button from '../components/Button';
import { NavLink } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div className="min-h-screen parchment-bg text-knight-ink flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="max-w-md w-full text-center space-y-8">
                {/* Hero Image Placeholder */}
                <div className="mx-auto w-48 h-48 rounded-3xl bg-gradient-to-br from-knight-iron to-knight-steel flex items-center justify-center knight-glow knight-shadow">
                    <svg className="w-24 h-24 text-yellow-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>
                
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-knight-gold via-yellow-500 to-orange-500 bg-clip-text text-transparent drop-shadow-lg leading-none">
                        Lost in the Dungeon?
                    </h1>
                    <p className="max-w-sm mx-auto text-xl md:text-2xl text-zinc-700 font-medium leading-tight">
                        The ancient scroll you seek has crumbled to dust, or the path was guarded by an invisible dragon.
                    </p>
                </div>

                <div className="space-y-4 pt-8 border-t border-zinc-300">
                    <p className="text-sm text-zinc-600 uppercase tracking-[0.2em] font-bold">
                        Escape Routes
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <NavLink to="/">
                            <Button variant="primary" size="lg">Return to Forge</Button>
                        </NavLink>
                        <NavLink to="/about">
                            <Button variant="secondary" size="lg">View Quest Log</Button>
                        </NavLink>
                        <NavLink to="/articles">
                            <Button variant="secondary" size="lg">Read Scrolls</Button>
                        </NavLink>
                    </div>
                </div>

                <p className="text-xs text-zinc-500 pt-8 border-t border-zinc-200">
                    Error 404 • No dragons were harmed in this navigation failure
                </p>
            </div>
        </div>
    );
}

export default NotFoundPage;
