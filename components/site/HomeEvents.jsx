"use client";

import EventCard from "./EventCard";
import { EVENTS } from "@/lib/content/events";
import { withDates } from "@/lib/dates";
import { useToday } from "@/lib/useToday";

const ALL = EVENTS.map(withDates).sort((a, b) => b.startDate - a.startDate);

// Next upcoming event (if any) followed by the most recent ones.
export default function HomeEvents({ count = 4 }) {
  const today = useToday();
  const upcoming = today ? ALL.filter((e) => e.endDate >= today).reverse() : [];
  const past = today ? ALL.filter((e) => e.endDate < today) : ALL;
  const list = [...upcoming.slice(0, 1), ...past].slice(0, count);
  return (
    <div className="evs two">
      {list.map((e) => (
        <EventCard key={e.id} event={e} today={today} />
      ))}
    </div>
  );
}
