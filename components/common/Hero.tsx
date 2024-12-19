'use client'

import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold">
                LEAD THE FUTURE - EXPERIENCE THE INNOVATION
            </h1>
            <p className="text-lg md:text-2xl mt-4">
                Explore TechVendo's Latest Collection of Innovative Tech and Designs
            </p>
            <Link href="/shop">
                <button
                    className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg py-2 px-8 rounded-full mt-6 transition duration-300">
                    SHOP NOW
                </button>
            </Link>
        </section>
    );
};

export default HeroSection;
