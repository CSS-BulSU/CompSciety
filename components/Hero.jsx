import MatrixRain from "./ui/MatrixRain";
import GridFloor from "./ui/GridFloor";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[620px] sm:min-h-[680px] flex flex-col justify-center px-4 sm:px-8">
      <MatrixRain />
      <GridFloor />
      <div className="relative z-10 mx-auto max-w-6xl w-full pt-14 pb-28">
        <h1 className="font-heading font-extrabold text-white text-5xl sm:text-6xl md:text-7xl leading-[1.05]">
          Welcome to
          <br />
          CompSciety
        </h1>
        <p className="mt-4 max-w-md text-green-300/80 text-sm sm:text-base">
          This is the official Computer Science Society webpage. This text box is solely for
          placeholder description or information about stuff.
        </p>
        <div className="mt-8 sm:mt-0 sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2">
          <button className="rounded-full bg-gradient-to-r from-blue-500 to-green-400 text-white font-heading font-bold px-8 py-4 shadow-xl shadow-green-950/40 hover:opacity-90 transition-opacity">
            Sync Up!
          </button>
        </div>
      </div>
    </section>
  );
}
