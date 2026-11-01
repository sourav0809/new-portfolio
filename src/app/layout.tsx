import { BootLoader } from "@/components/boot-loader";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SoundProvider } from "@/hooks/use-sound-effects";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { Space_Grotesk as FontSans, JetBrains_Mono as FontMono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const SITE_TITLE = `${DATA.name} · Software Engineer`;
const SITE_DESCRIPTION =
  "Sourav Pathak is a Software Engineer at Ocean Friends, building AI features for clinical documentation. Full-stack developer working with Next.js, React, Node.js and Generative AI, and the creator of TakeMyNote and OpenChat.";

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: SITE_TITLE,
    template: `%s | ${DATA.name}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: DATA.name,
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  keywords: [
    "Sourav Pathak",
    "Software Engineer",
    "Full-stack developer",
    "Next.js developer",
    "React developer",
    "Generative AI",
    "Portfolio",
    "West Bengal",
    "India",
  ],
  alternates: { canonical: "/" },
  // Images come from app/opengraph-image.png and app/twitter-image.png.
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: DATA.name,
    locale: "en_US",
    type: "profile",
    firstName: "Sourav",
    lastName: "Pathak",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f9fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0e14" },
  ],
};

/** Tells search engines who this site is about (schema.org Person). */
const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: DATA.name,
  url: DATA.url,
  image: new URL(DATA.avatarUrl, DATA.url).toString(),
  jobTitle: "Software Engineer",
  description: DATA.description,
  worksFor: { "@type": "Organization", name: DATA.work[0].company, url: DATA.work[0].href },
  address: { "@type": "PostalAddress", addressRegion: "West Bengal", addressCountry: "IN" },
  email: `mailto:${DATA.contact.email}`,
  sameAs: [DATA.contact.social.GitHub.url, DATA.contact.social.LinkedIn.url],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased mx-auto",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <script
          type="application/ld+json"
          // Static data from DATA; "<" is escaped so it can't close the script tag.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD).replace(/</g, "\\u003c") }}
        />
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <SoundProvider>
              <BootLoader>
                {children}
                <Navbar />
              </BootLoader>
              <Analytics />
            </SoundProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
