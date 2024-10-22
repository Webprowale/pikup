import type { Metadata } from "next";
import { Be_Vietnam_Pro, Inter } from "next/font/google";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Pikup - Revolutionizing Food Delivery", 
  description: "Your trusted platform for on-demand delivery services.", 
  keywords: "delivery, logistics, on-demand services, Pikup, food, food Delivery, chowdeck, chop, hungry, campus",
  robots: "index, follow", 
  // openGraph: {
  //   title: "Pikup - On-Demand Delivery Services",
  //   description: "Fast, reliable delivery services at your fingertips.",
  //   url: "https://pikup.ng", 
  //   siteName: "Pikup",
  //   images: [
  //     {
  //       url: "/asserts/Frame 2.svg",
  //       width: 1200,
  //       height: 630,
  //       alt: "Pikup Delivery Services",
  //     },
  //   ],
  // },
  twitter: {
    card: "summary_large_image",
    site: "@pikuphq", 
    title: "Pikup - Revolutionizing Food Delivery",
    description: "Fast, reliable delivery services at your fingertips.",
    images: "/font/favicon.png", 
  },
  alternates: {
    canonical: "https://pikup.ng", 
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
