import React from 'react';

/**
 * Navbar component structure based on the provided image.
 * Uses simple divs and basic CSS classes since Tailwind is disabled for now.
 */
const Navbar = () => {
    return (
        <header className="bg-white shadow sticky top-0 z-50">
            <div className="container flex justify-between items-center py-4 px-4 sm:px-8 lg:px-16">
                {/* Logo Placeholder */}
                <div className="text-2xl font-bold text-green-700 cursor-pointer">
                    CompSciety
                </div>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex space-x-8 items-center">
                    <a href="#home" className="text-gray-600 hover:text-green-700 transition duration-150">Home</a>
                    <a href="#about" className="text-gray-600 hover:text-green-700 transition duration-150">About</a>
                    <a href="#events" className="text-gray-600 hover:text-green-700 transition duration-150">Events</a>
                    <a href="#blog" className="text-gray-600 hover:text-green-700 transition duration-150">Blog</a>
                    <a href="#contact" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-150">Contact</a>
                </nav>

                {/* Mobile Menu Button Placeholder */}
                <button
                    className="md:hidden text-gray-600 focus:outline-none"
                    aria-label="Menu toggle"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
        </header>
    );
};

export default Navbar;