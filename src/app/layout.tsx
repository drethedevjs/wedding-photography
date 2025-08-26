import type { Metadata } from "next";
import { Head } from "next/document";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Covenant LX Wedding Photography",
  description: "CSRA Wedding Photographer",
  keywords: [
    "wedding photography",
    "Augusta, GA wedding photographer",
    "csra wedding photographer"
  ],
  openGraph: {
    title: "Covenant LX Wedding Photography",
    description: "Browse and explore high-quality photography.",
    url: "https://covenantlx.com",
    images: [
      {
        url: "https://cdn.covenantlx.com/feat%3Aaugusta-ga-wedding-photographer-hacker-feat-img.jpg",
        width: 1200,
        height: 630
      }
    ],
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          property="og:logo"
          content="https://cdn.covenantlx.com/logo%3Aaugusta-ga-wedding-photographer-main-logo.jpg"
        />
      </Head>
      <body>
        <script
          async
          src="https://cdn.jsdelivr.net/npm/flowbite@3.0.0/dist/flowbite.min.js"
        ></script>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
