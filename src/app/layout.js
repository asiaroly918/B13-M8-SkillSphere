import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./app/component/sheard/Footer";
import Navbar from "./app/component/sheard/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SkillSphere",
  description: "Online Learning Platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body >        
      <Navbar/>
      {children} 
      <Footer />  

  </body>
    </html>
  );
}
