import { Geist, Geist_Mono } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";

const Navbar = dynamic(() => import("./components/Navbar")); // remove ssr: false
const Footer = dynamic(() => import("./components/Footer"));
const TopProgressBar = dynamic(() => import("./components/TopProgressBar"));

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Parth Londhe",
  description: "Portfolio of Parth Londhe - Web Developer and Tech Enthusiast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <TopProgressBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
