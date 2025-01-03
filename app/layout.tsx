import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Louie the Iggy",
  description: "Louie the Italian Greyhound!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
