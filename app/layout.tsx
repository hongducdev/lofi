import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Timer from "@/components/Timer";
import Player from "@/components/Player";
import Tomofocus from "@/components/Tomofocus";
import Mixer from "@/components/Mixer";
import Note from "@/components/Note";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Timer />
        {children}
        <Player />
        <Tomofocus />
        <div className="fixed top-1/2 -translate-y-1/2 right-14">
          <Mixer />
          <Note />
        </div>
      </body>
    </html>
  );
}
