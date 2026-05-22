import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

import { loginUser } from '../services/UserService';

const SignInPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSubmitting(true);

        try {
            const res = await loginUser({ email, password });
            const { token, type, firstName } = res?.data ?? {};

            if (!token) {
                setError('Login failed: missing token.');
                return;
            }

            // Block viewers from logging in
            if (type === 'viewer') {
                setError('Viewer accounts are not allowed to sign in.');
                return;
            }

            localStorage.setItem('token', token);
            localStorage.setItem('userType', type);
            if (firstName) localStorage.setItem('firstName', firstName);

            navigate('/dashboard');
        } catch (err) {
            const message = err?.response?.data?.message || 'Failed to sign in.';
            setError(message);
        } finally {
            setSubmitting(false);
        }
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
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                    </svg>
                </div>

                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-black text-knight-ink drop-shadow-lg">
                        Enter the Forge
                    </h1>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] gold-accent">
                        Sign in to your account
                    </p>
                </div>

                {error ? (
                    <div className="mb-4 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800">
                        {error}
                    </div>
                ) : null}


                <form onSubmit={handleSubmit} className="space-y-5">
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

                    <div className="pt-2">
                        <Button type="submit" variant="primary" className="w-full" disabled={submitting}>
                            {submitting ? 'Signing in...' : 'Sign In'}
                        </Button>
                    </div>
                </form>

                <div className="mt-6 border-t border-zinc-200 pt-6 text-center">
                    <p className="text-sm text-zinc-600">
                        Not yet a member of the order?{' '}
                        <NavLink
                            to="/signup"
                            className="font-bold text-knight-gold hover:underline"
                        >
                            Sign Up
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;

