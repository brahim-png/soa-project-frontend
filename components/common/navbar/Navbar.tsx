'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

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

export default Navbar;
