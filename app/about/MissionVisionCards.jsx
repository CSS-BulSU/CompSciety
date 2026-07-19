import { MISSION_VISION } from "@/lib/aboutContent";

export default function MissionVisionCards() {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {MISSION_VISION.map((card) => (
        <div key={card.title} className="rounded-2xl p-8 bg-[#1a4d2e]">
          <h4 className="font-heading font-bold text-white text-center text-xl mb-4">{card.title}</h4>
          <p className="text-green-100/80 text-sm text-center leading-relaxed">{card.text}</p>
        </div>
      ))}
    </div>
  );
}