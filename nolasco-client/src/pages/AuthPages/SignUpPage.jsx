import { useState } from 'react';

import { NavLink } from 'react-router-dom';
import Button from '../../components/Button';
import { createUser } from '../services/UserService';

const SignUpPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('viewer');

    const [address, setAddress] = useState('');

    const [password, setPassword] = useState('');


    const [confirmPassword, setConfirmPassword] = useState('');

    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const validate = () => {
        const nextErrors = [];

        if (!firstName.trim()) nextErrors.push('First name is required.');
        if (!lastName.trim()) nextErrors.push('Last name is required.');
        if (!age || Number.isNaN(Number(age)) || Number(age) <= 0) nextErrors.push('Age must be a positive number.');
        if (!gender) nextErrors.push('Gender is required.');
        if (!email.trim()) nextErrors.push('Email is required.');
        if (!username.trim()) nextErrors.push('Username is required.');
        if (!role) nextErrors.push('Role is required.');
        if (!address.trim()) nextErrors.push('Address is required.');

        if (!password) nextErrors.push('Password is required.');
        if (password && password.length < 8) nextErrors.push('Password must be at least 8 characters.');
        if (confirmPassword !== password) nextErrors.push('Passwords do not match.');

        return nextErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        const errors = validate();
        if (errors.length) {
            setError(errors[0]);
            return;
        }

        setSubmitting(true);
        try {
            const payload = {
                firstName: firstName.trim(),
                lastName: lastName.trim(),
                age: String(age),
                gender,
                email: email.trim(),
                username: username.trim(),
                password,
                address: address.trim(),
                type: role,
                isActive: true,
            };



            await createUser(payload);
            setSuccess('Account created successfully. You can sign in now.');

            // Optionally: keep the form values; UX choice.
            setPassword('');
            setConfirmPassword('');
        } catch (err) {
            const message = err?.response?.data?.message || 'Failed to create account.';
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
                            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                        />
                    </svg>
                </div>

                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-black text-knight-ink drop-shadow-lg">Join the Order</h1>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] gold-accent">
                        Create your knight forge account
                    </p>
                </div>

                {error ? (
                    <div className="mb-4 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800">
                        {error}
                    </div>
                ) : null}
                {success ? (
                    <div className="mb-4 rounded-xl border border-green-300 bg-green-50 px-4 py-3 text-sm text-green-800">
                        {success}
                    </div>
                ) : null}

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Name Row */}

                    <div>
                        <label
                            htmlFor="firstName"
                            className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-600"
                        >
                            First Name
                        </label>
                        <input
                            id="firstName"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            className="w-full rounded-full border-2 border-zinc-900 bg-white px-5 py-3 text-sm text-knight-ink outline-none transition focus:border-knight-gold focus:ring-2 focus:ring-knight-gold/40"
                            placeholder="Sir Galahad"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="lastName"
                            className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-600"
                        >
                            Last Name
                        </label>
                        <input
                            id="lastName"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            className="w-full rounded-full border-2 border-zinc-900 bg-white px-5 py-3 text-sm text-knight-ink outline-none transition focus:border-knight-gold focus:ring-2 focus:ring-knight-gold/40"
                            placeholder="of Camelot"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="age"
                            className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-600"
                        >
                            Age
                        </label>
                        <input
                            id="age"
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                            min={1}
                            className="w-full rounded-full border-2 border-zinc-900 bg-white px-5 py-3 text-sm text-knight-ink outline-none transition focus:border-knight-gold focus:ring-2 focus:ring-knight-gold/40"
                            placeholder="25"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="gender"
                            className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-600"
                        >
                            Gender
                        </label>
                        <select
                            id="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required
                            className="w-full rounded-full border-2 border-zinc-900 bg-white px-5 py-3 text-sm text-knight-ink outline-none transition focus:border-knight-gold focus:ring-2 focus:ring-knight-gold/40"
                        >
                            <option value="" disabled>
                                Select...
                            </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
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
                            htmlFor="username"
                            className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-600"
                        >
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full rounded-full border-2 border-zinc-900 bg-white px-5 py-3 text-sm text-knight-ink outline-none transition focus:border-knight-gold focus:ring-2 focus:ring-knight-gold/40"
                            placeholder="knight123"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="address"
                            className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-600"
                        >
                            Address
                        </label>
                        <input
                            id="address"
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                            className="w-full rounded-full border-2 border-zinc-900 bg-white px-5 py-3 text-sm text-knight-ink outline-none transition focus:border-knight-gold focus:ring-2 focus:ring-knight-gold/40"
                            placeholder="Royal District, Block A"
                        />
                    </div>





                    <div>
                        <label
                            htmlFor="role"
                            className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-600"
                        >
                            Role
                        </label>
                        <select
                            id="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                            className="w-full rounded-full border-2 border-zinc-900 bg-white px-5 py-3 text-sm text-knight-ink outline-none transition focus:border-knight-gold focus:ring-2 focus:ring-knight-gold/40"
                        >
                            <option value="viewer">Viewer</option>
                            <option value="editor">Editor</option>
                            <option value="admin">Admin</option>
                        </select>
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
                        <Button type="submit" variant="primary" className="w-full" disabled={submitting}>
                            {submitting ? 'Creating...' : 'Sign Up'}
                        </Button>
                    </div>
                </form>

                <div className="mt-6 border-t border-zinc-200 pt-6 text-center">
                    <p className="text-sm text-zinc-600">
                        Already a member of the order?{' '}
                        <NavLink to="/signin" className="font-bold text-knight-gold hover:underline">
                            Sign In
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;



