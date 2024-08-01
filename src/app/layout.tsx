import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { RootLayoutProps } from "@/@types/root-layout";
import { generateSEO } from "@/utils/generate-seo";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = generateSEO();

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;

  return (
    <html lang="pt-BR">
      <body className={`bg-white text-placeholder ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
