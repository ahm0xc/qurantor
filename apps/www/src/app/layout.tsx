import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "~/lib/utils";

import "~/styles/globals.css";
import WebVitals from "./_components/web-vitals";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hello",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased", inter.className)}>
        <WebVitals />
        {children}
      </body>
    </html>
  );
}
