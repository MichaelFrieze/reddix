import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "reddix",
  description: "A Reddit clone built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={cn(
          "light bg-white text-slate-900 antialiased",
          inter.className,
        )}
      >
        <body className="min-h-screen bg-slate-50 pt-12 antialiased">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
