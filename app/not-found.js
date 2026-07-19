import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020806] via-[#0a2818] to-[#0d3320] flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 py-4 text-center">
        {/* TODO: swap for a real illustration — see instructions below */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gray-200 mb-4" />

        <h1 className="font-heading font-extrabold text-white text-3xl sm:text-4xl mb-2">404</h1>
        <p className="text-green-200/80 text-xs sm:text-sm max-w-sm mb-4">
          Looks like this page wandered off the grid. Let&apos;s get you back home.
        </p>

        <Link
          href="/"
          className="rounded-full bg-gradient-to-r from-blue-500 to-green-400 text-white font-heading font-bold text-sm px-6 py-2.5 shadow-lg hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Link>
      </main>

      <Footer />
    </div>
  );
}