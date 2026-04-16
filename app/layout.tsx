import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyCTA from "@/components/layout/StickyCTA";

export const metadata: Metadata = {
  title: {
    default: "Dr. Sandeep Kumar Sahu – Endocrinologist in Cuttack | SAI SHREE POLYCLINIC",
    template: "%s | Dr. Sandeep Kumar Sahu – Endocrinologist"
  },
  description: "Expert Endocrinologist in Cuttack specializing in Diabetes, Thyroid Disorders, PCOS, Obesity & Hormonal conditions. Book an appointment at SAI SHREE POLYCLINIC.",
  keywords: ["Endocrinologist in Cuttack", "Diabetes specialist Cuttack", "Thyroid doctor Cuttack", "Hormone specialist Odisha", "PCOS treatment Cuttack", "Dr Sadeep Sahu"],
  authors: [{ name: "Dr. Sandeep Kumar Sahu" }],
  creator: "SAI SHREE POLYCLINIC",
  metadataBase: new URL("https://drsadeepsahu.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://drsadeepsahu.com",
    siteName: "Dr. Sandeep Kumar Sahu",
    title: "Dr. Sandeep Kumar Sahu – Endocrinologist in Cuttack",
    description: "Expert care for Diabetes, Thyroid, PCOS & all Hormonal Disorders in Cuttack, Odisha.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="h2mpatjYzqpE0JlsU7JJQelPqQgVz7TkMWw17nQSV54" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <StickyCTA />
        <Footer />
      </body>
    </html>
  );
}
