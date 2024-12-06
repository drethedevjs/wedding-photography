import localFont from "next/font/local";

const geistSans = localFont({
  src: "../app/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../app/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const hoefler = localFont({
  src: "../app/fonts/Hoefler.woff",
  variable: "--font-hoefler-mono",
  weight: "100 900",
});

const helvetica = localFont({
  src: "../app/fonts/Helvetica.woff",
  variable: "--font-helvetica",
  weight: "100 900",
});

export default function useFont() {
  return {
    hoefler,
    helvetica,
    geistSans,
    geistMono
  }
}
