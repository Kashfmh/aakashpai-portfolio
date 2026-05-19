import SectionMarker from "./ui/SectionMarker";
import { TECH } from "../data/portfolio";
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiPython,
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiStreamlit,
  SiNodedotjs, SiSupabase, SiPostgresql, SiMysql, SiRedis,
  SiGit, SiDocker, SiGooglecloud, SiN8N,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import type { IconType } from "react-icons";

// map tech name -> icon
const ICON_MAP: Record<string, IconType> = {
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,
  Java: FaJava,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Framer Motion": SiFramer,
  Streamlit: SiStreamlit,
  "Node.js": SiNodedotjs,
  Supabase: SiSupabase,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Redis: SiRedis,
  Git: SiGit,
  Docker: SiDocker,
  "Google Cloud Run": SiGooglecloud,
  n8n: SiN8N,
};

export default function TechStack() {
  return (
    <section id="stack" className="section section-divider">
      <div className="container">
        <SectionMarker index="02" label="STACK" />

        <div
          className="font-mono text-sm leading-relaxed overflow-x-auto"
          style={{
            padding: "40px",
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          {/* prompt line */}
          <div style={{ marginBottom: "24px" }}>
            <span style={{ color: "var(--t-prompt)" }}>guest@aakash:~/skills$</span>
            <span style={{ color: "var(--text)", marginLeft: "8px" }}>tree .</span>
          </div>

          <div style={{ color: "var(--text)" }}>.</div>

          {TECH.map((cat, i) => {
            const isLastCat = i === TECH.length - 1;
            return (
              <div key={cat.label}>
                {/* Category Node */}
                <div className="flex items-center mt-2">
                  <span style={{ color: "var(--dim)", whiteSpace: "pre" }}>
                    {isLastCat ? "└── " : "├── "}
                  </span>
                  <span
                    style={{
                      color: "var(--text)",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {cat.label}
                  </span>
                </div>

                {/* Tech Items */}
                {cat.items.map((tech, j) => {
                  const isLastItem = j === cat.items.length - 1;
                  const prefix = isLastCat ? "    " : "│   ";
                  const pointer = isLastItem ? "└── " : "├── ";
                  const Icon = ICON_MAP[tech];

                  return (
                    <div key={tech} className="flex items-center">
                      <span style={{ color: "var(--dim)", whiteSpace: "pre" }}>
                        {prefix}{pointer}
                      </span>
                      <div className="flex items-center gap-3 px-2 py-1 transition-colors hover:bg-[var(--surface-2)] rounded-sm cursor-default">
                        {Icon && <Icon size={14} style={{ color: "var(--muted)" }} />}
                        <span style={{ color: "var(--muted)" }}>{tech}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
