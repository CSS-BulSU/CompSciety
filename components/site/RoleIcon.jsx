import { Award, CalendarDays, Code, Gift, GraduationCap, PenTool, Users, Vote } from "lucide-react";

const ICONS = { code: Code, pen: PenTool, people: Users, vote: Vote, badge: Award, calendar: CalendarDays, cap: GraduationCap, gift: Gift };

export default function RoleIcon({ name, size = 22 }) {
  const Icon = ICONS[name];
  return <Icon size={size} strokeWidth={2} aria-hidden="true" />;
}
