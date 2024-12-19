'use client'

import React, { useState } from 'react';
import Link from "next/link";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";

const Login = () => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');

        try {
            const response = await axios.post('http://localhost:8081/api/login', {
                username: emailOrPhone,
                password
            });

            if (response.status === 200) {
                toast.success('Login successful!');
                setTimeout(() => {
                    router.push('/');
                }, 1000);
            }
        } catch (error: any) {
            if (error.response) {
                setErrorMessage(error.response.data);
            } else {
                setErrorMessage('An error occurred. Please try again later.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">LOGIN</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-8">
                        <input
                            type="text"
                            placeholder="Email or Phone Number"
                            value={emailOrPhone}
                            onChange={(e) => setEmailOrPhone(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-2 text-right">
                        <Link href="/auth/forgot-password" className="text-sm text-blue-600 hover:underline">
                            Forgot password?
                        </Link>
                    </div>
                    <div className="mb-10">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {errorMessage && <div className="text-red-500 text-center mb-4">{errorMessage}</div>}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-60 py-3 text-xl font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition disabled:bg-gray-300"
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </div>
                </form>
                <p className="mt-8 text-center text-gray-800">
                    Don’t have an account?{" "}
                    <Link href="/auth/register" className="text-blue-600 hover:underline">
                        Register
                    </Link>
                </p>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Login;
