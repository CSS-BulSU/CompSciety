// TODO: replace the placeholder circles with real partner logos from the backend
const PARTNER_COUNT = 4;

export default function PartnersSection() {
  return (
    <section className="px-4 sm:px-8 mt-16">
      <div className="mx-auto max-w-5xl rounded-3xl px-6 sm:px-10 py-10 bg-[#1f6b3c]">
        <h3 className="font-heading font-bold text-white text-xl mb-6">Our Partners</h3>
        <div className="flex flex-wrap items-center gap-8 sm:gap-12">
          {Array.from({ length: PARTNER_COUNT }).map((_, i) => (
            <div key={i} className="w-16 h-16 rounded-full bg-gray-200" />
          ))}
        </div>
      </div>
    </section>
  );
}
