import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Piengee — Visual boards for your ideas",
  description: "Arrange photos, PNGs, and ideas on a calm visual board. Private by design and stored on your device.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
