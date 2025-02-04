import type { Metadata } from "next";
import "../globals.css";
import {Roboto} from "next/font/google";
import Header from "@/components/admin/layout/header";

export const metadata: Metadata = {
    title: "Dashboard"
};
const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400","500", "700"],
    style: ["normal"],
    display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      suppressHydrationWarning={true}
        className={`${roboto.className}`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
