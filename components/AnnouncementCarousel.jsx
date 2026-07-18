"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GradientPillButton from "./ui/GradientPillButton";

// TODO: replace with data fetched from the backend once the API is live
const CARDS = [
  {
    title: "Hackathon 2026",
    desc: "Sign-ups are now open for our annual 24-hour hackathon. Team up and build something great.",
  },
  {
    title: "General Assembly",
    desc: "Mark your calendars for the first GA of the semester. Attendance is required for members.",
  },
  {
    title: "Membership Drive",
    desc: "New members welcome! Applications close soon — secure your spot in CompSciety.",
  },
];

export default function AnnouncementCarousel() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + CARDS.length) % CARDS.length);
  const next = () => setIndex((i) => (i + 1) % CARDS.length);
  const current = CARDS[index];

  return (
    <section className="relative z-10 px-4 sm:px-8 -mt-16">
      <div className="mx-auto max-w-4xl bg-gray-200 rounded-3xl px-4 sm:px-10 py-14 sm:py-16 flex items-center justify-between gap-4 shadow-2xl">
        <button
          onClick={prev}
          className="shrink-0 text-gray-800 hover:text-green-700 transition-colors"
          aria-label="Previous announcement"
        >
          <ChevronLeft size={30} strokeWidth={3} />
        </button>
        <div className="text-center">
          <p className="font-heading font-bold text-lg sm:text-2xl text-gray-900">{current.title}</p>
          <p className="mt-2 text-sm text-gray-600 max-w-md mx-auto hidden sm:block">{current.desc}</p>
        </div>
        <button
          onClick={next}
          className="shrink-0 text-gray-800 hover:text-green-700 transition-colors"
          aria-label="Next announcement"
        >
          <ChevronRight size={30} strokeWidth={3} />
        </button>
      </div>

      <div className="flex justify-center mt-8">
        <GradientPillButton>See More Announcements and Events</GradientPillButton>
      </div>
    </section>
  );
}
