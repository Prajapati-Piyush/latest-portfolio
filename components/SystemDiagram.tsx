/**
 * A quiet, literal drawing of the request path I work on: client hits an API,
 * the API writes to Postgres and enqueues work, a worker drains the queue on a
 * schedule. Server-rendered SVG — no runtime cost, no canvas, no particles.
 * The single travelling dash is CSS-only and stops under reduced motion.
 */
export function SystemDiagram() {
  const nodes = [
    { x: 24, cy: 40, label: "client" },
    { x: 24, cy: 110, label: "api" },
    { x: 24, cy: 180, label: "queue" },
  ];

  return (
    <svg
      viewBox="0 0 300 220"
      role="img"
      aria-label="Diagram: a client calls an API, which writes to PostgreSQL and enqueues jobs for a scheduled worker."
      className="w-full max-w-[22rem] text-line"
    >
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        </pattern>
      </defs>

      <rect width="300" height="220" fill="url(#grid)" opacity="0.55" />

      {/* Rails */}
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <path d="M96 40 H150 V110 H96" />
        <path d="M96 110 H204" />
        <path d="M96 180 H150 V110" />
        <path d="M204 110 V40 H150" />
      </g>

      {/* Travelling pulse along the request path */}
      <path
        d="M96 40 H150 V110 H204"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.25"
        strokeDasharray="4 210"
        strokeLinecap="round"
        opacity="0.9"
        className="request-pulse"
      />

      {nodes.map((n) => (
        <g key={n.label}>
          <rect
            x={n.x}
            y={n.cy - 13}
            width="72"
            height="26"
            rx="4"
            fill="var(--canvas)"
            stroke="currentColor"
          />
          <text
            x={n.x + 36}
            y={n.cy + 4}
            textAnchor="middle"
            className="font-mono"
            fontSize="9.5"
            letterSpacing="0.08em"
            fill="var(--faint)"
          >
            {n.label}
          </text>
        </g>
      ))}

      <g>
        <rect
          x="204"
          y="97"
          width="72"
          height="26"
          rx="4"
          fill="var(--canvas)"
          stroke="currentColor"
        />
        <text
          x="240"
          y="114"
          textAnchor="middle"
          className="font-mono"
          fontSize="9.5"
          letterSpacing="0.08em"
          fill="var(--faint)"
        >
          postgres
        </text>
      </g>

      <g>
        <rect
          x="204"
          y="167"
          width="72"
          height="26"
          rx="4"
          fill="var(--canvas)"
          stroke="currentColor"
        />
        <path d="M150 180 H204" stroke="currentColor" strokeWidth="1" fill="none" />
        <text
          x="240"
          y="184"
          textAnchor="middle"
          className="font-mono"
          fontSize="9.5"
          letterSpacing="0.08em"
          fill="var(--faint)"
        >
          worker
        </text>
      </g>
    </svg>
  );
}
