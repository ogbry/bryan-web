import type { Metadata } from "next";
import "../app/globals.css";

const siteUrl = "https://bryan.dxlabs.dev";
const title = "Bryan Alfuente | Software Engineer | React, Node.js, AWS";
const description =
  "Bryan Alfuente - Software Engineer specializing in React, Node.js, TypeScript, and AWS. 6+ years experience in full-stack development and AI solutions. AWS Certified Cloud & AI Practitioner.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
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
  creator: "Bryan Alfuente",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Bryan Alfuente",
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@ogbry",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bryan Alfuente",
  jobTitle: "Software Engineer",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Legazpi City",
    addressRegion: "Albay",
    addressCountry: "Philippines",
  },
  sameAs: [
    "https://github.com/ogbry",
    "https://www.linkedin.com/in/bryan-alfuente-725a5b187/",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "AWS",
    "Full Stack Development",
    "AI Solutions",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
