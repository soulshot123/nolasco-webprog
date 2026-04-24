import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../components/Button';

const SignUpPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: wire up auth logic
        console.log({ name, email, password, confirmPassword });
    };

    return (
        <div className="w-full max-w-md">
            <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-50 p-8 knight-shadow">
                {/* Decorative icon */}
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-knight-gold to-yellow-600 knight-glow shadow-lg">
                    <svg
                        className="h-10 w-10 text-knight-velvet"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                        />
                    </svg>
                </div>

                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-black text-knight-ink drop-shadow-lg">
                        Join the Order
                    </h1>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] gold-accent">
                        Create your knight forge account
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label
                            htmlFor="name"
                            className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-600"
                        >
                            Full Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full rounded-full border-2 border-zinc-900 bg-white px-5 py-3 text-sm text-knight-ink outline-none transition focus:border-knight-gold focus:ring-2 focus:ring-knight-gold/40"
                            placeholder="Sir Galahad"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-600"
                        >
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full rounded-full border-2 border-zinc-900 bg-white px-5 py-3 text-sm text-knight-ink outline-none transition focus:border-knight-gold focus:ring-2 focus:ring-knight-gold/40"
                            placeholder="knight@forge.com"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-600"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full rounded-full border-2 border-zinc-900 bg-white px-5 py-3 text-sm text-knight-ink outline-none transition focus:border-knight-gold focus:ring-2 focus:ring-knight-gold/40"
                            placeholder="••••••••"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="confirmPassword"
                            className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-600"
                        >
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="w-full rounded-full border-2 border-zinc-900 bg-white px-5 py-3 text-sm text-knight-ink outline-none transition focus:border-knight-gold focus:ring-2 focus:ring-knight-gold/40"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="pt-2">
                        <Button type="submit" variant="primary" className="w-full">
                            Sign Up
                        </Button>
                    </div>
                </form>

                <div className="mt-6 border-t border-zinc-200 pt-6 text-center">
                    <p className="text-sm text-zinc-600">
                        Already a member of the order?{' '}
                        <NavLink
                            to="/signin"
                            className="font-bold text-knight-gold hover:underline"
                        >
                            Sign In
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;

