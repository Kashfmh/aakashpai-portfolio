import { Mail } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import SectionMarker from "./ui/SectionMarker";
import { SOCIALS } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section section-divider">
      <div className="container">
        <SectionMarker index="06" label="CONTACT" />

        <div className="grid md:grid-cols-2 gap-12" style={{ marginBottom: "64px" }}>
          <div>
            <h2
              className="text-2xl font-semibold tracking-tight leading-snug"
              style={{ color: "var(--text)", marginBottom: "24px" }}
            >
              INITIATE_CONTACT
            </h2>
            <p className="text-sm leading-7" style={{ color: "var(--muted)" }}>
              Whether it&apos;s for collaboration, an internship, or just to
              talk shop — the channel is open. Fastest response via WhatsApp.
            </p>
          </div>

          {/* status indicator */}
          <div
            className="flex items-center gap-3 self-start"
            style={{ padding: "20px 24px", border: "1px solid var(--border)" }}
          >
            <span
              className="block w-2 h-2 rounded-full"
              style={{ background: "var(--t-ok)" }}
            />
            <span
              className="text-xs tracking-[0.15em] uppercase"
              style={{ color: "var(--muted)" }}
            >
              comm_link.service — active (running)
            </span>
          </div>
        </div>

        {/* contact options */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* whatsapp */}
          <a
            href={SOCIALS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between hover-card"
            style={{ padding: "32px", background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <div>
              <p
                className="text-xs tracking-[0.15em] uppercase"
                style={{ color: "var(--muted)", marginBottom: "12px" }}
              >
                PREFERRED
              </p>
              <p
                className="text-sm font-medium tracking-wide"
                style={{ color: "var(--text)" }}
              >
                WhatsApp
              </p>
              <p className="text-xs" style={{ color: "var(--dim)", marginTop: "8px" }}>
                +60 11-2377 6040
              </p>
            </div>
            <SiWhatsapp
              size={20}
              className="transition-colors duration-150 group-hover:text-[color:var(--text)]"
              style={{ color: "var(--muted)" }}
            />
          </a>

          {/* email */}
          <a
            href={`mailto:${SOCIALS.email}`}
            className="flex items-center justify-between hover-card"
            style={{ padding: "32px", background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <div>
              <p
                className="text-xs tracking-[0.15em] uppercase"
                style={{ color: "var(--muted)", marginBottom: "12px" }}
              >
                EMAIL
              </p>
              <p
                className="text-sm font-medium tracking-wide"
                style={{ color: "var(--text)" }}
              >
                Email
              </p>
              <p className="text-xs" style={{ color: "var(--dim)", marginTop: "8px" }}>
                {SOCIALS.email}
              </p>
            </div>
            <Mail
              size={20}
              className="transition-colors duration-150 group-hover:text-[color:var(--text)]"
              style={{ color: "var(--muted)" }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
