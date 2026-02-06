import { Nunito_Sans, Varela_Round } from "next/font/google";
import "./globals.css";

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const varela = Varela_Round({
  weight: "400",
  variable: "--font-varela",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MindAcuity - Your Safe Space for Mental Wellness",
  description:
    "AI-powered mental wellness support — built for real humans. Manage stress, anxiety, and emotional overload privately, safely, and without judgment.",
  keywords: ["mental health", "wellness", "AI support", "stress management", "anxiety help"],
  openGraph: {
    title: "MindAcuity - Your Safe Space for Mental Wellness",
    description: "AI-powered mental wellness support — built for real humans.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${varela.variable}`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
