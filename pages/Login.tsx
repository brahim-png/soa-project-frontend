'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import "../app/globals.css"; // Import the global CSS

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Mock API call
        const response = await mockLogin(email, password);

        if (response.success) {
            // Redirect to the home page or dashboard
            router.push('/');
        } else {
            setError(response.message);
        }
    };

    // Mock login function
    const mockLogin = async (email: string, password: string) => {
        return new Promise<{ success: boolean; message: string }>((resolve) => {
            setTimeout(() => {
                if (email === 'user@example.com' && password === 'password') {
                    resolve({ success: true, message: 'Login successful' });
                } else {
                    resolve({ success: false, message: 'Invalid email or password' });
                }
            }, 1000);
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <nav className="w-full bg-gray-900 text-white py-4">
                <div className="container mx-auto flex justify-center space-x-4">
                    <Link href="/" legacyBehavior>
                        <a className="hover:underline">Home</a>
                    </Link>
                    <Link href="/shop" legacyBehavior>
                        <a className="hover:underline">Shop</a>
                    </Link>
                    <Link href="/about" legacyBehavior>
                        <a className="hover:underline">About</a>
                    </Link>
                    <Link href="/login" legacyBehavior>
                        <a className="hover:underline">Login</a>
                    </Link>
                </div>
            </nav>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mt-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-600">
                    Don't have an account?{' '}
                    <Link href="/register" legacyBehavior>
                        <a className="text-blue-600 hover:underline">Register</a>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;