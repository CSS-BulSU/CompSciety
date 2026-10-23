import SiteShell from "@/components/site/SiteShell";
import PageHero from "@/components/site/PageHero";
import EventsCalendar from "@/components/site/EventsCalendar";

export const metadata = {
  title: "Events",
  description: "Every CompSciety event since 2025, and what's coming next.",
};

export default function EventsPage() {
  return (
    <SiteShell>
      <PageHero crumb="events" title="Events">
        Every CompSciety event since we started in 2025, and what&apos;s coming next. Pick a day to see what happened, or jump to any month.
      </PageHero>
      <div className="wrap page-body">
        <EventsCalendar />
      </div>
    </SiteShell>
  );
}
