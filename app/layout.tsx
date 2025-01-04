import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Louie the Iggy",
  description:
    "Follow the adventures of Louie, the adorable Italian Greyhound!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#dbeafe" />
      </head>
      <body className={inter.className}>
        {children}
        <Script id="theme-color-script" strategy="afterInteractive">
          {`
            function updateThemeColor() {
              const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
              const metaThemeColor = document.querySelector('meta[name="theme-color"]');

              if (darkModeMediaQuery.matches) {
                metaThemeColor.setAttribute('content', '#111827');
              } else {
                metaThemeColor.setAttribute('content', '#dbeafe');
              }
            }

            updateThemeColor();
            window.matchMedia('(prefers-color-scheme: dark)').addListener(updateThemeColor);
          `}
        </Script>
      </body>
    </html>
  );
}
