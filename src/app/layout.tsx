import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Sidfrey",
  description: "Use DuckDuckGo for !bangs and Perplexity for everything else.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow flex flex-col items-center justify-center bg-background">
          {children}
        </main>
        <footer className="w-full bg-background text-foreground p-4 text-center">
          <p className="opacity-50 text-sm">
            <Link href="/" className="underline">
              Home
            </Link>{" "}
            &middot;{" "}
            <Link href="/about" className="underline">
              About
            </Link>
          </p>
          <div className="flex items-center justify-center mt-1 opacity-50 text-sm gap-x-2">
            <p>
              Made by{" "}
              <Link href="https://jamesonhodge.com" className="underline">
                Jameson Hodge
              </Link>
              .
            </p>
            <Link
              href="https://github.com/jamesondh/sidfreyxyz"
              className="inline-flex items-center"
            >
              <FaGithub className="w-4 h-4" />
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
