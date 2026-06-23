import React from 'react';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

/**
 * Main App component acts as the layout container for the entire webpage.
 */
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* 1. Navbar Component */}
      <Navbar />

      {/* 2. Main Content Area (Placeholder for Hero, About, Events, etc.) */}
      <main className='flex-grow'>
        
        {/* Placeholder Section: Hero/Welcome Banner - Added a clearer container class */}
        <section id="home" className="py-32 flex items-center justify-center relative">
        {/* Add a subtle grid/matrix effect here later */}
        <div className="text-center px-6 max-w-4xl z-10">
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
            Welcome to <span className="text-green-400">CompSciety</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10">
            This is where a Computer Science Society lives and thrives. The future is ours to build.
            </p>
            <button className="bg-gradient-to-r from-green-500 to-emerald-700 hover:from-green-600 hover:to-emerald-800 text-white font-bold py-4 px-12 rounded-full transition-all shadow-lg shadow-green-900/20">
            Join Now
            </button>
        </div>
        </section>

        {/* Placeholder Section: Announcement Carousel - Using a more stable container */}
        <section id="events" className="container py-20 bg-white border-t border-b border-gray-100">
             <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 text-center">
                <h2 className="text-3xl font-bold mb-12 text-gray-800 border-b pb-4">Announcement Card Carousel</h2>
                {/* This container needs to manage the carousel logic */}
                <div className="flex items-center justify-between w-full relative py-4">
                  {/* Placeholder Arrows (Ensure they are positioned correctly) */}
                  <button className="absolute left-0 text-green-600 hover:text-green-700 z-10 p-2 transition duration-150">&lt;</button>

                  {/* Carousel Content Wrapper - Make this the central element */}
                  <div className='relative flex-grow'>
                    <div className="h-48 bg-gray-200 rounded flex items-center justify-center text-lg text-gray-600 shadow-inner">
                      [Announcement/Event Cards Go Here]
                    </div>
                  </div>

                  {/* Placeholder Arrows */}
                  <button className="absolute right-0 text-green-600 hover:text-green-700 z-10 p-2 transition duration-150">&gt;</button>
                </div>
            </div>
        </section>

        {/* Placeholder Section: About Us */}
        <section id="about" className="container mx-auto px-6 py-20 bg-gray-900/50 rounded-[3rem] border border-gray-800 backdrop-blur-md">
            <h2 className="text-5xl font-bold mb-12">About Compsciety</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <p className="text-gray-300 leading-relaxed">
                CompSciety exists to build a strong, united, and future-ready generation of Computer Science students...
                </p>
                <div className="bg-gray-800 h-64 rounded-2xl border border-gray-700"></div> {/* Placeholder for image */}
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="p-8 bg-green-900/20 border border-green-800/50 rounded-2xl">
                <h3 className="text-2xl font-bold text-green-400 mb-4">Mission</h3>
                <p className="text-gray-300">To cultivate a united community of socially responsible...</p>
                </div>
                <div className="p-8 bg-green-900/20 border border-green-800/50 rounded-2xl">
                <h3 className="text-2xl font-bold text-green-400 mb-4">Vision</h3>
                <p className="text-gray-300">To empower students through inclusive education...</p>
                </div>
            </div>
            </section>
      </main>

      {/* 3. Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
