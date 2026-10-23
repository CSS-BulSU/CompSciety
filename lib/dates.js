// Date helpers for the events calendar. Everything works in local calendar days.

export const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export const MONTHS_SHORT = MONTHS.map((m) => m.slice(0, 3));

export function parseDay(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function startOfToday() {
  const t = new Date();
  t.setHours(0, 0, 0, 0);
  return t;
}

export function sameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

export function withDates(event) {
  const start = parseDay(event.start);
  return { ...event, startDate: start, endDate: event.end ? parseDay(event.end) : start };
}

// The academic year starts in August, so June 2026 belongs to A.Y. 2025–26.
export function academicYear(date) {
  const y = date.getMonth() >= 7 ? date.getFullYear() : date.getFullYear() - 1;
  return `${y}–${String(y + 1).slice(2)}`;
}

export function relative(date, today) {
  const days = Math.round((date - today) / 864e5);
  const abs = Math.abs(days);
  if (abs < 1) return "today";
  const plural = (n, unit) => `${n} ${unit}${n > 1 ? "s" : ""}`;
  const span =
    abs < 7 ? plural(abs, "day") : abs < 45 ? plural(Math.round(abs / 7), "week") : abs < 365 ? plural(Math.round(abs / 30), "month") : `${(abs / 365).toFixed(1)} years`;
  return days > 0 ? `in ${span}` : `${span} ago`;
}

export function googleCalendarUrl(event) {
  const fmt = (d) => `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  const end = new Date(event.endDate);
  end.setDate(end.getDate() + 1);
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `CompSciety: ${event.title}`,
    dates: `${fmt(event.startDate)}/${fmt(end)}`,
    details: event.summary,
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}
