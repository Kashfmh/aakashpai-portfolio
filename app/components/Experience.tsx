import SectionMarker from "./ui/SectionMarker";
import { EXPERIENCE, EDUCATION } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section section-divider">
      <div className="container">
        <SectionMarker index="04" label="EXPERIENCE" />

        {/* experience entries */}
        <div style={{ marginBottom: "64px" }}>
          {EXPERIENCE.map((entry, i) => (
            <div
              key={i}
              className="grid md:grid-cols-[220px_1fr] gap-8"
              style={{
                padding: "32px",
                border: "1px solid var(--border)",
                background: "var(--surface)",
                marginBottom: "24px",
              }}
            >
              {/* left — meta */}
              <div>
                <p
                  className="text-xs tracking-wide uppercase"
                  style={{ color: "var(--text)", marginBottom: "8px" }}
                >
                  {entry.company}
                </p>
                <p
                  className="text-xs"
                  style={{ color: "var(--muted)" }}
                >
                  {entry.role}
                </p>
                <p
                  className="text-xs tracking-wide"
                  style={{ color: "var(--dim)", marginTop: "12px" }}
                >
                  {entry.dates}
                </p>
              </div>

              {/* right — bullets */}
              <ul className="space-y-3">
                {entry.points.map((point, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-xs leading-6"
                    style={{ color: "var(--muted)" }}
                  >
                    <span style={{ color: "var(--dim)" }}>—</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* education */}
        <SectionMarker index="05" label="EDUCATION" />
        <div>
          {EDUCATION.map((entry, i) => (
            <div
              key={i}
              className="grid md:grid-cols-[220px_1fr] gap-8"
              style={{
                padding: "32px",
                border: "1px solid var(--border)",
                background: "var(--surface)",
                marginBottom: "24px",
              }}
            >
              <div>
                <p
                  className="text-xs tracking-wide uppercase"
                  style={{ color: "var(--text)", marginBottom: "8px" }}
                >
                  {entry.institution}
                </p>
                <p
                  className="text-xs tracking-wide"
                  style={{ color: "var(--dim)", marginTop: "12px" }}
                >
                  {entry.period}
                </p>
              </div>

              <div className="flex flex-col justify-center">
                <p className="text-xs" style={{ color: "var(--muted)" }}>
                  {entry.qualification}
                  {entry.cgpa && (
                    <span style={{ color: "var(--text)" }}>
                      {" — CGPA: "}{entry.cgpa}
                    </span>
                  )}
                </p>
                <span
                  className="inline-block text-xs tracking-widest uppercase"
                  style={{
                    marginTop: "12px",
                    color:
                      entry.status === "In Progress"
                        ? "var(--t-ok)"
                        : "var(--dim)",
                  }}
                >
                  {entry.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
