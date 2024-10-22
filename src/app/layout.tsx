import type { Metadata } from "next";
import { Be_Vietnam_Pro, Inter } from "next/font/google";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Pikup", 
  description: "Your trusted platform for on-demand delivery services.", 
  keywords: "delivery, logistics, on-demand services, Pikup", 
  robots: "index, follow", 
  openGraph: {
    title: "Pikup - On-Demand Delivery Services",
    description: "Fast, reliable delivery services at your fingertips.",
    url: "https://pikup.com", 
    siteName: "Pikup",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pikup Delivery Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@pikup", 
    title: "Pikup - On-Demand Delivery Services",
    description: "Fast, reliable delivery services at your fingertips.",
    images: "/images/twitter-card.jpg", 
  },
  alternates: {
    canonical: "https://pikup.com", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      
      </head>
      <body className={beVietnam.className}>{children}</body>
    </html>
  );
}
