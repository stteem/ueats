import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StoreProvider from './StoreProvider';
import "./globals.css";
import { ThemeProvider } from './ui/MaterialTailwindWrapper';
import NavbarDefault from "./ui/Navbar"
import DrawerWithNavigation from "./ui/DrawerWithNavigation";
import StickyNavbar from "./ui/NavbarSticky";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ueats food",
  description: "Number 1 online food vendor in Ghana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <ThemeProvider>
        <html lang="en">
          <body className={inter.className}>
            <NavbarDefault />
            {/* <StickyNavbar /> */}
            <DrawerWithNavigation />
            {children}
          </body>
        </html>
      </ThemeProvider>
    </StoreProvider>
  );
}
