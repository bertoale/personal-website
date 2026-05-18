import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bertoale Portfolio",
  description: "Portfolio of Bertoale, showcasing projects, skills, and career journey.",
  icons: {
    icon: "https://files.cults3d.com/uploaders/21392236/illustration-file/74a7685f-50a6-4bae-b3b7-6b957df38e4a/METALLICA.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}