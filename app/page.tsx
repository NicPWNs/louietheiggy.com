import Image from "next/image";
import { Instagram, Youtube, TwitterIcon as TikTok } from "lucide-react";
import { ThemeToggle } from "./components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center p-4 transition-colors duration-200">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 space-y-6 relative">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/louie-profile.jpg"
            alt="Louie the Italian Greyhound"
            width={150}
            height={150}
            className="rounded-full border-4 border-blue-300 dark:border-blue-600"
          />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Louie the Iggy
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-center">
            Zoomies enthusiast, professional napper, and treat connoisseur.
            Follow my adventures!
          </p>
        </div>

        <div className="space-y-4">
          <a
            href="https://www.instagram.com/louietheiggy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            <Instagram size={24} />
            <span>Instagram</span>
          </a>
          <a
            href="https://www.tiktok.com/@louietheiggy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#00f2ea] to-[#ff0050] text-white py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            <TikTok size={24} />
            <span>TikTok</span>
          </a>
          <a
            href="https://www.youtube.com/@louietheiggy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            <Youtube size={24} />
            <span>YouTube</span>
          </a>
        </div>
      </div>
    </div>
  );
}
