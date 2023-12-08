import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { SocketProvider } from "@/context/socket";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clover | Image Generator with Stable Diffusion V1",
  description: "Project by Peter Nguyen (peternguyenforwork@gmail.com)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
