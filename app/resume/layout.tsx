import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Aakash Pai",
  description:
    "View and download the resume of Aakash Pai — Full-Stack Engineer & CS Student at Sunway University.",
  openGraph: {
    title: "Resume — Aakash Pai",
    description: "Full-Stack Engineer & CS Student at Sunway University.",
    type: "website",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
