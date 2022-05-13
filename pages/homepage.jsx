import Head from "next/head";
import Image from "next/image";
import Benefit from "./benefit/Benefit";
import ForEveryOne from "./components/ForEveryOne/ForEveryOne";
import HeroPage from "./components/HeroPage";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>The Malaka</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="overflow-hidden scroll-smooth">
        <HeroPage />
        <ForEveryOne />
        <Benefit />
      </div>
    </>
  );
};

export default HomePage;
