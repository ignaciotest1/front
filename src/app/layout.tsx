import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Providers } from "./providers";
import RoutesProtect from "./routeprotect";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Providers>
        <body className="max-w-[1200px] mx-auto">
          <Header />
          <main>{children}</main>
        </body>
      </Providers>
    </html>
  );
}
