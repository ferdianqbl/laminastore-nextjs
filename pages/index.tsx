import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../src/components/organism/Navbar";
import MainBanner from "../src/components/organism/MainBanner";
import TransactionStep from "../src/components/organism/TransactionStep";
import FeaturedGames from "../src/components/organism/FeaturedGames";
import Reached from "../src/components/organism/Reached";
import Story from "../src/components/organism/Story";
import Footer from "../src/components/organism/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
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
