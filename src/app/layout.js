import { Inter } from "next/font/google";
import "./globals.css";
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
    <html lang="en">
      <body className=''>
        <Providers>
          <Suspense>
            <Header />
            {children}
            <Footer />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
