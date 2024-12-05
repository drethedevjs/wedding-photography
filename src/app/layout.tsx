import useFont from "@/utils/fonts";
import type { Metadata } from "next";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Covenant LX Wedding Photography",
  description: "CSRA Wedding Photographer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { hoefler } = useFont();
  return (
    <html lang="en">
      <body
        className={`${hoefler.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
