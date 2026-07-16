interface IconProps {
  name: string;
  className?: string;
}

const paths: Record<string, string[]> = {
  api: ["M4 12h4l2-7 4 14 2-7h4", "M3 5h4", "M17 19h4"],
  database: ["M5 6c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3Z", "M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6", "M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"],
  email: ["M4 6h16v12H4z", "m4 7 8 6 8-6"],
  external: ["M7 17 17 7", "M9 7h8v8", "M5 5h6", "M5 5v14h14v-6"],
  github: ["M12 2a10 10 0 0 0-3.2 19c.5.1.7-.2.7-.5v-2c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-5A3.9 3.9 0 0 1 8.6 8c-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.7 9.7 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.8 1 .8 2v2.8c0 .3.2.6.8.5A10 10 0 0 0 12 2Z"],
  layers: ["m12 3 9 5-9 5-9-5 9-5Z", "m3 12 9 5 9-5", "m3 16 9 5 9-5"],
  linkedin: ["M6 9h3v10H6z", "M7.5 5.5v.1", "M13 9h3v1.5a3 3 0 0 1 5 2.2V19h-3v-5.5a1.5 1.5 0 0 0-3 0V19h-3z"],
  monitor: ["M4 5h16v11H4z", "M8 21h8", "M12 16v5"],
  plug: ["M9 7V3", "M15 7V3", "M7 7h10v4a5 5 0 0 1-10 0V7Z", "M12 16v5"],
  refresh: ["M20 12a8 8 0 0 1-14.9 4", "M4 12A8 8 0 0 1 18.9 8", "M18 3v5h-5", "M6 21v-5h5"],
  rocket: ["M5 15c-1 1.4-1.5 3-1.5 5 2 0 3.6-.5 5-1.5", "M9 15 5 11c2-5 6-8 13-8 0 7-3 11-8 13l-4-4Z", "M15 9h.1", "M10 16l-2 4"],
  server: ["M4 5h16v6H4z", "M4 13h16v6H4z", "M8 8h.1", "M8 16h.1"],
  shield: ["M12 3 20 7v5c0 5-3.4 8-8 9-4.6-1-8-4-8-9V7l8-4Z", "m9 12 2 2 4-5"],
  tool: ["M14.7 6.3a4 4 0 0 0-5 5L4 17l3 3 5.7-5.7a4 4 0 0 0 5-5l-3 3-3-3 3-3Z"],
  workflow: ["M6 6h.1", "M18 6h.1", "M6 18h.1", "M8 6h8", "M18 8v3a3 3 0 0 1-3 3H9a3 3 0 0 0-3 3v1"],
};

export function Icon({ name, className = "h-5 w-5" }: IconProps) {
  const iconPaths = paths[name] ?? paths.external;

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {iconPaths.map((path) => (
        <path key={path} d={path} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      ))}
    </svg>
  );
}
