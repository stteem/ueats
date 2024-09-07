import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StoreProvider from './StoreProvider';
import "./globals.css";
import { ThemeProvider } from './components/MaterialTailwindWrapper';
import NavbarDefault from "./components/Navbar"
import DrawerWithNavigation from "./components/DrawerWithNavigation";

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
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
      <ThemeProvider>
        <StoreProvider>
          <DrawerWithNavigation />
          <NavbarDefault />
            {children}
        </StoreProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}
