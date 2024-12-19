'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import "../globals.css"; // Import the global CSS

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const isAuthPage = pathname === '/auth/login' || pathname === '/auth/register';

    return (
        <nav className='bg-gray-900 text-white shadow-lg'>
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo */}
                <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image src="/images/Quiz4.jpg" alt="TechVendo Logo" width={48} height={48} className="object-cover" />
                    </div>
                    <span className="text-3xl font-bold ml-3 cursor-pointer">TECHVENDO:TUNISIA</span>
                </div>

                {/* Hamburger Icon */}
                <button
                    className="block lg:hidden text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} fixed top-16 left-0 w-full bg-gray-900 z-10`}
                >
                    <div className="flex flex-col items-center py-4">
                        <Link href="/" className="text-xl text-white py-2 hover:bg-gray-700 w-full text-center">
                            HOME
                        </Link>
                        <Link href="/shop" className="text-xl text-white py-2 hover:bg-gray-700 w-full text-center">
                            SHOP
                        </Link>
                        <Link href="/about" className="text-xl text-white py-2 hover:bg-gray-700 w-full text-center">
                            ABOUT
                        </Link>
                        {!isAuthPage && (
                            <Link href="/auth/login" className="text-xl text-white py-2 hover:bg-gray-700 w-full text-center">
                                LOGIN
                            </Link>
                        )}
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-6">
                    <Link href="/" className="text-xl px-4 py-2 rounded hover:bg-gray-700 transition">
                        HOME
                    </Link>
                    <Link href="/shop" className="text-xl px-4 py-2 rounded hover:bg-gray-700 transition">
                        SHOP
                    </Link>
                    <Link href="/about" className="text-xl px-4 py-2 rounded hover:bg-gray-700 transition">
                        ABOUT
                    </Link>
                    {!isAuthPage && (
                        <Link href="/auth/login" className="bg-blue-600 text-white text-xl px-4 py-2 rounded hover:bg-blue-700 transition">
                            LOGIN
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

const About: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-10 px-4 bg-gradient-to-r from-green-400 to-blue-500">
            <nav className="w-full py-4">
                <div className="container mx-auto flex justify-center space-x-4">
                    <Link href="/" legacyBehavior>
                        <a className="hover:underline text-white">Home</a>
                    </Link>
                    <Link href="/shop" legacyBehavior>
                        <a className="hover:underline text-white">Shop</a>
                    </Link>
                    <Link href="/about" legacyBehavior>
                        <a className="hover:underline text-white">About</a>
                    </Link>
                    <Link href="/login" legacyBehavior>
                        <a className="hover:underline text-white">Login</a>
                    </Link>
                </div>
            </nav>
            <div className="container mx-auto text-center bg-white bg-opacity-80 p-8 rounded-lg shadow-lg mt-8">
                <h1 className="text-4xl font-bold mb-6 text-gray-900">About TechVendo</h1>
                <p className="text-lg mb-4 text-gray-700">
                    Welcome to TechVendo, your number one source for all things tech. We&apos;re dedicated to giving you the very best of technology products, with a focus on quality, customer service, and uniqueness.
                </p>
                <p className="text-lg mb-4 text-gray-700">
                    Founded in 2021, TechVendo has come a long way from its beginnings. When we first started out, our passion for providing the best tech products drove us to do intense research, and gave us the impetus to turn hard work and inspiration into a booming online store. We now serve customers all over the world, and are thrilled to be a part of the tech industry.
                </p>
                <p className="text-lg mb-4 text-gray-700">
                    We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don&apos;t hesitate to contact us.
                </p>
                <p className="text-lg mb-4 text-gray-700">
                    Sincerely,
                    <br />
                    The TechVendo Team
                </p>
            </div>
        </div>
    );
};

export default About;
export default Navbar;
