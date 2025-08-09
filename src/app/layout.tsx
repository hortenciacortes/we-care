import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@styles/globals.scss";

const montserrat = Montserrat({
  variable: "--font-family",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Renata Côrtes",
  description: "Dra. Renata Cortes – Medicina e Saúde. Atendimento humanizado, escuta atenta e cuidado integral para promover sua qualidade de vida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
