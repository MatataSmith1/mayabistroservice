import Nav from "../components/nav";
import "../styles/index.css";
import Image from "next/image";
import Swiper from "react-id-swiper";
import "swiper/swiper-bundle.min.css";
import GoogleFonts from "next-google-fonts";
import { NextSeo } from "next-seo";

/*
    TODO: Canonical bei Release von localhost auf Domain
    ! achtung
    ? fragen
*/
function MyApp({ Component, pageProps }) {
  <NextSeo
    title="Hundetraining | Sabine Irauschek - Hundetrainerin"
    description="Professionelles Hundetraining ☎ +43 664 13 55 620"
    canonical="https://www.localhost/"
    openGraph={{
      url: "https://www.url.ie/a",
      title: "Sabine Irauschek",
      description: "Professionelles Hundetraining ☎ +43 664 13 55 620",
      images: [
        {
          url: "https://www.example.ie/og-image-01.jpg",
          width: 800,
          height: 600,
          alt: "Og Image Alt",
        },
      ],
      site_name: "Hundetrainer",
    }}
  />;
  return (
    <React.Fragment>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" />
      <Nav />
      <div className="w-screen"></div>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
