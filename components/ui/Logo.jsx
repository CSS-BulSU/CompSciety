export default function Logo({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
      </defs>
      <path
        d="M24 2 L44 8 V22 C44 34 36 42 24 46 C12 42 4 34 4 22 V8 Z"
        fill="url(#logoGrad)"
        stroke="#bbf7d0"
        strokeWidth="1.5"
      />
      <text
        x="24"
        y="30"
        textAnchor="middle"
        fontSize="19"
        fontWeight="800"
        fill="#052e16"
        fontFamily="Poppins, sans-serif"
      >
        S
      </text>
    </svg>
  );
}
