// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <div className="text-2xl mb-4">
                    &copy; {new Date().getFullYear()} EDGE COLLECTIVE
                </div>
                <div className="flex justify-center space-x-4">
                    <a href="#" className="hover:text-gray-400 transition duration-300">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-400 transition duration-300">Terms of Service</a>
                    <a href="#" className="hover:text-gray-400 transition duration-300">Contact Us</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
