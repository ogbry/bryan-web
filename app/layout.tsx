import type { Metadata } from "next";
import "../app/globals.css";

export const metadata: Metadata = {
  title: "Bryan Alfuente | Software Engineer | React, Node.js, AWS",
  description:
    "Bryan Alfuente - Software Engineer specializing in React, Node.js, TypeScript, and AWS. 5+ years experience in full-stack development and AI solutions. AWS Certified Cloud & AI Practitioner.",
  keywords: [
    "Bryan Alfuente",
    "Software Engineer",
    "React Developer",
    "Node.js",
    "TypeScript",
    "AWS",
    "Full Stack Developer",
    "AI Solutions",
    "Web Developer",
  ],
  authors: [{ name: "Bryan Alfuente" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
