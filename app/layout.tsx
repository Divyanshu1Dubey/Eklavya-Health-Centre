import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyCTA from "@/components/layout/StickyCTA";

export const metadata: Metadata = {
  title: {
    default: "Dr. Sandeep K. Sahu – Endocrinologist in Cuttack | SAI SHREE HEALTH CARE",
    template: "%s | Dr. Sandeep K. Sahu – Endocrinologist"
  },
  description: "Expert Endocrinologist in Cuttack specializing in Diabetes, Thyroid Disorders, PCOS, Obesity & Hormonal conditions. Book an appointment at SAI SHREE HEALTH CARE.",
  keywords: ["Endocrinologist in Cuttack", "Diabetes specialist Cuttack", "Thyroid doctor Cuttack", "Hormone specialist Odisha", "PCOS treatment Cuttack", "Dr Sadeep Sahu"],
  authors: [{ name: "Dr. Sandeep K. Sahu" }],
  creator: "SAI SHREE HEALTH CARE",
  metadataBase: new URL("https://drsadeepsahu.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://drsadeepsahu.com",
    siteName: "Dr. Sandeep K. Sahu",
    title: "Dr. Sandeep K. Sahu – Endocrinologist in Cuttack",
    description: "Expert care for Diabetes, Thyroid, PCOS & all Hormonal Disorders in Cuttack, Odisha.",
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
