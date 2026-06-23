import React from 'react';
import assetsLogo from '../../assets/compscietypfp.png'; // Assuming path relative to src/layout/Footer.jsx

/**
 * Footer component, redesigned based on the provided visual reference.
 * Displays a three-column layout with Branding, Navigation, and Contact info.
 */
const Footer = () => {
    return (
        <footer className="bg-[#001a33] text-white mt-16 pt-12 pb-8 p-30">
            {/* Main content grid: 3 columns on medium screens and up */}
            <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-[#001a33] pb-8 mb-6">

                {/* Column 1: Branding (Logo, Copyright Year, Socials) */}
                <div>
                    <div className="mb-4 flex items-center gap-3">
                        <img src={assetsLogo} alt="ComSciety Logo" className="h-auto max-h-12"/>
                        <div className='flex flex-col'>
                            <span className='text-2xl font-bold text-white'>CompSciety</span>
                            <span className='text-sm text-gray-500'>EST 2025</span>
                        </div>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-6 mt-4 text-xl ml-2">
                        {/* Placeholder social icons using standard emojis for representation. In a real app, these would be proper SVG components. */}
                        <i class="fi fi-brands-youtube text-2xl"></i>
                        <i class="fi fi-brands-instagram text-2xl"></i>
                        <i class="fi fi-brands-linkedin text-2xl"></i>
                        <i class="fi fi-brands-facebook text-2xl"></i>
                    </div>
                </div>

                {/* Column 2: Navigation */}
                <div>
                    <h4 className="text-xl font-semibold mb-6 text-white border-b border-[#001a33] pb-2">Navigation</h4>
                    <ul className="space-y-3 text-base text-gray-400">
                        <li><a href="#home" className="hover:text-green-400 transition duration-150 cursor-pointer">Home</a></li>
                        <li><a href="#about" className="hover:text-green-400 transition duration-150 cursor-pointer">About</a></li>
                        <li><a href="#events" className="hover:text-green-400 transition duration-150 cursor-pointer">Events</a></li>
                        <li><a href="#announcements" className="hover:text-green-400 transition duration-150 cursor-pointer">Announcements</a></li>
                        <li><a href="#blog" className="hover:text-green-400 transition duration-150 cursor-pointer">Blog</a></li>
                    </ul>
                </div>

                {/* Column 3: Contact Us */}
                <div>
                    <h4 className="text-xl font-semibold mb-6 text-white border-b border-[#001a33] pb-2">Contact Us</h4>
                    <div className='flex flex-row  items-center '>
                        <span class="material-symbols-outlined">mail</span>
                        <p className="m-2 items-center text-lg text-green-400 break-all cursor-pointer hover:underline transition duration-150">compscietybulsu2025@gmail.com</p>
                    </div>
                </div>
            </div>

            {/* Bottom copyright line */}
            <div className="text-center text-gray-600 pt-4">
                &copy; {new Date().getFullYear()} CompSciety. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;