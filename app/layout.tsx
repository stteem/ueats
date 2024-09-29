import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StoreProvider from './StoreProvider';
import "./globals.css";
import { ThemeProvider } from './ui/MaterialTailwindWrapper';
import NavbarDefault from "./ui/Navbar"
import DrawerWithNavigation from "./ui/DrawerWithNavigation";
import NavBarBottom from "./ui/NavbarBottom";
import Template from './template';
import DrawerPlacement from "./ui/CartDrawer";

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
            <Template>
              <NavbarDefault />
              <DrawerWithNavigation />
              <DrawerPlacement />
              <NavBarBottom />
              {children}
            </Template>
          </body>
        </html>
      </ThemeProvider>
    </StoreProvider>
  );
}
