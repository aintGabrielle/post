import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";

const bhineka = localFont({
  src: [
    {
      path: "../../public/fonts/Bhineka.ttf",
    },
  ],
});

const raleway = Raleway({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={raleway.className}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
