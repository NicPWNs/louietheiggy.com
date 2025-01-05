import Image from "next/image";
import {
  siInstagram,
  siTiktok,
  siYoutube,
  siFacebook,
  siGmail,
} from "simple-icons";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center p-4 transition-colors duration-200">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 space-y-6">
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
          <p className="text-lg text-gray-600 dark:text-gray-400">
            @louie.the.ig
          </p>
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
          <a
            href="https://www.instagram.com/louie.the.ig"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 fill-current"
            >
              <title>Facebook</title>
              <path d={siFacebook.path} />
            </svg>
            <span>Facebook</span>
          </a>
          <a
            href="https://www.instagram.com/louie.the.ig"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-700 to-green-600 text-white py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 fill-current"
            >
              <title>Email</title>
              <path d={siGmail.path} />
            </svg>
            <span>Email</span>
          </a>
        </div>
      </div>
      <div className="mt-8">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <use href="/louie-logo.svg#logo" />
        </svg>
      </div>
    </div>
  );
}
