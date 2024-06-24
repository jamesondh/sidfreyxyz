import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DuckDuckPerplexity",
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
            Made by{" "}
            <Link href="https://jamesonhodge.com" className="underline">
              Jameson Hodge
            </Link>
            . View source code on{" "}
            <Link
              href="https://github.com/jamesondh/duckduckperplexity"
              className="underline"
            >
              GitHub
            </Link>
            .
          </p>
        </footer>
      </body>
    </html>
  );
}
