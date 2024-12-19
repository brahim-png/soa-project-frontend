'use client'

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match!");
            setLoading(false);
            return;
        }

        try {
            console.log('Sending registration request...');
            const response = await axios.post('http://localhost:8081/api/users/register', {
                username,
                password,
                role: 'user',
            });

            console.log('Response:', response);

            if (response.status === 200) {
                toast.success('Registration successful!');
                setTimeout(() => {
                    window.location.href = '/';
                }, 1000);
            }
        } catch (error: any) {
            console.error('Registration error:', error);
            if (error.response) {
                if (error.response.data === "Username is already taken") {
                    toast.error("This username is already taken. Please choose another.");
                } else {
                    toast.error("Registration failed. Please try again.");
                }
                setErrorMessage(error.response.data);
            } else {
                toast.error("Registration failed. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-6">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">REGISTRATION</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-8">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-8">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-10">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
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
                            {loading ? 'Registering...' : 'Register'}
                        </button>
                    </div>
                </form>
                <p className="mt-8 text-center text-gray-800">
                    Already have an account?{" "}
                    <Link href="/auth/login" className="text-blue-600 hover:underline">
                        Login
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

export default Register;
