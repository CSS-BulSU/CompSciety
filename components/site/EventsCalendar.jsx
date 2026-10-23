"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import EventCard from "./EventCard";
import { EVENTS, FOUNDING_YEAR } from "@/lib/content/events";
import { MONTHS, MONTHS_SHORT, academicYear, googleCalendarUrl, parseDay, sameDay, withDates } from "@/lib/dates";
import { useSearch, useToday } from "@/lib/useToday";

const ALL = EVENTS.map(withDates).sort((a, b) => a.startDate - b.startDate);
const LEARNING = ["workshop", "series"];
const SERVE = ["competition", "outreach"];
const eventsOn = (d) => ALL.filter((e) => d >= e.startDate && d <= e.endDate);
const key = (d) => `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

// Opens on today, or on ?date=YYYY-MM-DD when linked from an event card.
function initialDay(today, search) {
  if (!today) return ALL[ALL.length - 1].startDate;
  const param = new URLSearchParams(search ?? "").get("date");
  return param && /^\d{4}-\d{2}-\d{2}$/.test(param) ? parseDay(param) : today;
}

export default function EventsCalendar() {
  const today = useToday();
  const search = useSearch();
  // Remount once the browser knows today's date so the initial state can use it.
  return <Calendar key={today ? "client" : "prerender"} today={today} search={search} />;
}

function Calendar({ today, search }) {
  const [view, setView] = useState(() => {
    const d = initialDay(today, search);
    return { y: d.getFullYear(), m: d.getMonth() };
  });
  const [selected, setSelected] = useState(() => (today ? initialDay(today, search) : null));
  const [ayPick, setAyPick] = useState("all");
  const calRef = useRef(null);
  const gridRef = useRef(null);
  const focusNext = useRef(false);

  useEffect(() => {
    if (today && new URLSearchParams(search ?? "").get("date")) calRef.current?.scrollIntoView({ block: "start" });
  }, [today, search]);

  useEffect(() => {
    if (focusNext.current && selected) {
      gridRef.current?.querySelector(`[data-d="${key(selected)}"]`)?.focus();
      focusNext.current = false;
    }
  });

  const maxYear = (today ?? new Date()).getFullYear() + 1;
  const go = (y, m) => {
    const t = new Date(y, m, 1);
    if (t.getFullYear() < FOUNDING_YEAR || t.getFullYear() > maxYear) return;
    setView({ y: t.getFullYear(), m: t.getMonth() });
  };
  const pick = (d) => {
    setSelected(d);
    if (d.getMonth() !== view.m || d.getFullYear() !== view.y) go(d.getFullYear(), d.getMonth());
  };
  const showOnCalendar = (event) => {
    pick(event.startDate);
    calRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const cells = useMemo(() => {
    const first = new Date(view.y, view.m, 1);
    const start = new Date(view.y, view.m, 1 - first.getDay());
    return Array.from({ length: 42 }, (_, i) => new Date(start.getFullYear(), start.getMonth(), start.getDate() + i));
  }, [view]);

  const ay = academicYear(new Date(view.y, view.m, 1));
  const inAy = ALL.filter((e) => academicYear(e.startDate) === ay);
  const inMonth = ALL.filter((e) => e.startDate.getFullYear() === view.y && e.startDate.getMonth() === view.m);
  const dayEvents = selected ? eventsOn(selected) : [];

  const upcoming = today ? ALL.filter((e) => e.endDate >= today) : [];
  const past = today ? ALL.filter((e) => e.endDate < today).reverse() : [];
  const years = [...new Set(past.map((e) => academicYear(e.startDate)))];
  const pastShown = past.filter((e) => ayPick === "all" || academicYear(e.startDate) === ayPick);

  const onGridKey = (e) => {
    const step = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }[e.key];
    if (!step || !selected) return;
    e.preventDefault();
    focusNext.current = true;
    pick(new Date(selected.getFullYear(), selected.getMonth(), selected.getDate() + step));
  };

  return (
    <>
      <section className="cal-wrap" ref={calRef} style={{ scrollMarginTop: 100 }}>
        <div className="cal glass">
          <div className="cal-head">
            <button type="button" className="icon-btn" aria-label="Previous month" disabled={view.y === FOUNDING_YEAR && view.m === 0} onClick={() => go(view.y, view.m - 1)}>
              <ChevronLeft size={16} strokeWidth={2.4} />
            </button>
            <h2 aria-live="polite">
              {MONTHS[view.m]} {view.y}
            </h2>
            <button type="button" className="icon-btn" aria-label="Next month" disabled={view.y === maxYear && view.m === 11} onClick={() => go(view.y, view.m + 1)}>
              <ChevronRight size={16} strokeWidth={2.4} />
            </button>
            <div className="cal-jump">
              <select aria-label="Month" value={view.m} onChange={(e) => go(view.y, +e.target.value)}>
                {MONTHS.map((m, i) => (
                  <option key={m} value={i}>
                    {m}
                  </option>
                ))}
              </select>
              <select aria-label="Year" value={view.y} onChange={(e) => go(+e.target.value, view.m)}>
                {Array.from({ length: maxYear - FOUNDING_YEAR + 1 }, (_, i) => FOUNDING_YEAR + i).map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
              <button type="button" className="btn btn-glass btn-sm" onClick={() => today && pick(today)}>
                Today
              </button>
            </div>
          </div>
          <div className="cal-dow" aria-hidden="true">
            {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
          <div className="cal-grid" ref={gridRef} onKeyDown={onGridKey}>
            {cells.map((d) => {
              const evs = eventsOn(d);
              const cls = ["day", d.getMonth() !== view.m && "out", today && sameDay(d, today) && "today"].filter(Boolean).join(" ");
              return (
                <button
                  key={key(d)}
                  type="button"
                  className={cls}
                  data-d={key(d)}
                  aria-pressed={!!selected && sameDay(d, selected)}
                  aria-label={`${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}${evs.length ? ", " + evs.map((e) => e.title).join(", ") : ""}`}
                  onClick={() => pick(d)}
                >
                  <span className="n">{d.getDate()}</span>
                  {evs.map((e) => (
                    <span key={e.id} className={`bar k-${e.kind}`}>
                      {e.title}
                    </span>
                  ))}
                </button>
              );
            })}
          </div>
          <div className="cal-legend">
            <span>
              <i style={{ background: "rgba(59,130,246,.5)" }} />
              Workshop / series
            </span>
            <span>
              <i style={{ background: "rgba(34,197,94,.5)" }} />
              Competition / outreach
            </span>
          </div>
        </div>

        <aside className="cal-side">
          <div className="panel glass">
            <span className="mono">
              {selected ? selected.toLocaleDateString("en-PH", { weekday: "long", day: "numeric", month: "long", year: "numeric" }) : "Pick a day"}
            </span>
            {dayEvents.length ? (
              dayEvents.map((e) => (
                <div key={e.id} style={{ display: "grid", gap: 8 }}>
                  <div className="mini">
                    {e.post ? (
                      <Link href={`/blog/${e.post}`}>
                        <b>{e.title}</b>
                        <span>
                          {e.kind}
                          {e.confirmed ? "" : " · date to confirm"}
                        </span>
                      </Link>
                    ) : (
                      <div className="mini-static">
                        <b>{e.title}</b>
                        <span>{e.kind}</span>
                      </div>
                    )}
                  </div>
                  <p className="none">{e.summary}</p>
                  {today && e.startDate > today && (
                    <a className="btn btn-glass btn-sm" style={{ justifySelf: "start" }} href={googleCalendarUrl(e)} target="_blank" rel="noopener noreferrer">
                      Add to Google Calendar
                    </a>
                  )}
                </div>
              ))
            ) : (
              <p className="none">Nothing on this day. Pick a highlighted day to see an event.</p>
            )}
          </div>
          <div className="panel glass">
            <span className="mono">A.Y. {ay} at a glance</span>
            <div className="stats">
              <div>
                <b>{inAy.length}</b>
                <span>events</span>
              </div>
              <div>
                <b>{inAy.filter((e) => LEARNING.includes(e.kind)).length}</b>
                <span>learning</span>
              </div>
              <div>
                <b>{inAy.filter((e) => SERVE.includes(e.kind)).length}</b>
                <span>compete &amp; serve</span>
              </div>
            </div>
            <div className="mini">
              {inMonth.length ? (
                inMonth.map((e) => (
                  <button key={e.id} type="button" onClick={() => pick(e.startDate)}>
                    <b>{e.title}</b>
                    <span>
                      {e.startDate.getDate()} {MONTHS_SHORT[e.startDate.getMonth()]}
                    </span>
                  </button>
                ))
              ) : (
                <p className="none">No events in {MONTHS[view.m]}.</p>
              )}
            </div>
          </div>
        </aside>
      </section>

      <section>
        <div className="sub-head">
          <div>
            <p className="kicker">upcoming</p>
            <h2>Coming up</h2>
          </div>
        </div>
        {upcoming.length ? (
          <div className="evs two">
            {upcoming.map((e) => (
              <EventCard key={e.id} event={e} today={today} onShowOnCalendar={showOnCalendar} />
            ))}
          </div>
        ) : (
          <div className="empty glass">
            <b>Nothing announced yet</b>
            <span>The next event drops soon. Follow our Facebook page to hear first.</span>
          </div>
        )}
      </section>

      <section>
        <div className="sub-head">
          <div>
            <p className="kicker">archive</p>
            <h2>Past events</h2>
            <p>Everything we&apos;ve held since {FOUNDING_YEAR}, grouped by academic year.</p>
          </div>
          <div className="filters" role="group" aria-label="Academic year">
            {["all", ...years].map((a) => (
              <button key={a} type="button" className="chip-filter" aria-pressed={a === ayPick} onClick={() => setAyPick(a)}>
                {a === "all" ? "All years" : `A.Y. ${a}`}
                <span>{a === "all" ? past.length : past.filter((e) => academicYear(e.startDate) === a).length}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="evs two">
          {pastShown.map((e) => (
            <EventCard key={e.id} event={e} today={today} onShowOnCalendar={showOnCalendar} />
          ))}
        </div>
      </section>
    </>
  );
}
