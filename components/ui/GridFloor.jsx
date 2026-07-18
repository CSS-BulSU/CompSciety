export default function GridFloor() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(74,222,128,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.55) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          transform: "perspective(400px) rotateX(65deg)",
          transformOrigin: "bottom",
          maskImage: "linear-gradient(to top, black 15%, transparent 90%)",
          WebkitMaskImage: "linear-gradient(to top, black 15%, transparent 90%)",
        }}
      />
    </div>
  );
}
