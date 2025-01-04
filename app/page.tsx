"use client";

import Image from "next/image";
import { ThemeProvider, useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { siInstagram, siTiktok, siYoutube } from "simple-icons";

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
}

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center p-4 transition-colors duration-200">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 space-y-6 relative">
          <div className="absolute top-4 right-4">
            <ThemeToggle />
          </div>
          <div className="flex flex-col items-center space-y-4">
            <Image
              src="/louie.jpg"
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
              href="https://www.instagram.com/louie.the.ig"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current"
              >
                <title>Instagram</title>
                <path d={siInstagram.path} />
              </svg>
              <span>Instagram</span>
            </a>
            <a
              href="https://www.tiktok.com/@louie.the.ig"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#00f2ea] to-[#ff0050] text-white py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current"
              >
                <title>TikTok</title>
                <path d={siTiktok.path} />
              </svg>
              <span>TikTok</span>
            </a>
            <a
              href="https://www.youtube.com/@louie.the.ig"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current"
              >
                <title>YouTube</title>
                <path d={siYoutube.path} />
              </svg>
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
