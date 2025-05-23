import { Inter } from "next/font/google";
import "./globals.css";

import SearchBox from "@/components/SearchBox";
import Header from "@/components/Header";
import Providers from "./Providers";
import Footer from "@/components/Footer";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"]
});

export const metadata = {
  title: "Imdb Clone",
  description: "Search for your best Series movies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className=''>
        <Providers>
          <Suspense>
            <Header />
            <SearchBox />
            {children}
            <Footer />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
