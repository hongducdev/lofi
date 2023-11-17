import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Timer from "@/components/Timer";
import Player from "@/components/Player";
import Tomofocus from "@/components/Tomofocus";
import Mixer from "@/components/Mixer";
import Note from "@/components/Note";
import YoutubeVideo from "@/components/YoutubeVideo";
import Setting from "@/components/Setting";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chill with me",
  description:
    "Discover a world of serene sounds on our website! Immerse yourself in soothing lofi music, explore a variety of ambient sounds, enhance focus with tomo focus, and stay organized with our todo list feature. Experience a creative and productive space, all while enjoying the convenience of seamlessly opening your favorite YouTube videos. Dive in now for a unique blend of relaxation and productivity!",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://chillwithme.hongduccodedao.io.vn/",
    images: [
      {
        url: "https://chillwithme.hongduccodedao.io.vn/thumbnail.png",
        width: 1920,
        height: 1080,
        alt: "Chill with me",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {children}
          <div className="hidden sm:block">
            <Header />
            <Timer />
            <YoutubeVideo />
            <Player />
            <Tomofocus />
            <div className="fixed top-1/2 -translate-y-1/2 right-5">
              <Mixer />
              <Note />
              <Setting />
          </div>
          </div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
