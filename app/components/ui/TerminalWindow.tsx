// terminal chrome — reusable for hero + contact

type Props = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export default function TerminalWindow({
  title = "bash — aakash@system",
  children,
  className = "",
}: Props) {
  return (
    <div
      className={className}
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
      }}
    >
      {/* titlebar */}
      <div
        className="flex items-center px-4 py-3"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="flex items-center gap-[6px]">
          <span style={{ width: 12, height: 12, borderRadius: "50%", background: "var(--t-dot-red)", display: "block" }} />
          <span style={{ width: 12, height: 12, borderRadius: "50%", background: "var(--t-dot-yellow)", display: "block" }} />
          <span style={{ width: 12, height: 12, borderRadius: "50%", background: "var(--t-dot-green)", display: "block" }} />
        </div>
        <span
          className="absolute left-1/2 -translate-x-1/2 text-xs tracking-widest uppercase"
          style={{ color: "var(--muted)" }}
        >
          {title}
        </span>
      </div>

      {/* body */}
      <div className="p-6 text-sm leading-7">{children}</div>
    </div>
  );
}
