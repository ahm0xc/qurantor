import { Metadata } from "next";

import "~/styles/globals.css";

export const metadata: Metadata = {
  title: "Qurantor",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
