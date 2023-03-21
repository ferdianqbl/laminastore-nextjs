import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../src/components/organism/Navbar";
import MainBanner from "../src/components/organism/MainBanner";
import TransactionStep from "../src/components/organism/TransactionStep";
import FeaturedGames from "../src/components/organism/FeaturedGames";
import Reached from "../src/components/organism/Reached";
import Story from "../src/components/organism/Story";
import Footer from "../src/components/organism/Footer";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>Lamina - Topup & Get a New Experience in Gaming</title>
        <meta
          name="description"
          content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati"
        />
        <meta
          property="og:title"
          content="Lamina - Topup & Get a New Experience in Gaming"
        />
        <meta
          property="og:description"
          content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati"
        />
        {/* <meta
          property="og:image"
          content="https://res.cloudinary.com"
        /> */}
        {/* <meta
          property="og:url"
          content="https://lamina.vercel.app/"
        /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon/logo.png" />
      </Head>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGames />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
