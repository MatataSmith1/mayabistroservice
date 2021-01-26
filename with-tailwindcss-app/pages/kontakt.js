import Image from "next/image";
import { NextSeo } from "next-seo";

function Kontakt() {
  <NextSeo
    title="Sabine Irauschek"
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
      site_name: "Kontakt",
    }}
  />;
  return (
    <main>
      <div className="flex container justify-center mx-auto text-center">
        <div className="grid grid-cols-1 divide-y divide-gray-400">
          <div className="text-xl p-10">
            <a
              className="text-4xl font-bold text-green-500"
              style={{ fontFamily: "Montserrat" }}
            >
              KONTAKT
            </a>
            <div className="mt-6">
              <a>Kontakieren Sie uns unter </a>
              <div className="mt-6">
                <img
                  className="m-auto"
                  src="phone.png"
                  alt="phone"
                  width="18"
                  height="18"
                ></img>
                <a
                  className="border-b-2  text-green-500"
                  href="tel: +43 0681 20 21 3831"
                >
                  +43 0681 20 21 3831
                </a>
              </div>

              <div className="mt-6 justify-center">
                <img
                  className="m-auto"
                  src="email.png"
                  alt="email"
                  width="18"
                  height="18"
                ></img>
              </div>
              <a
                className="border-b-2 text-green-500"
                href="mailto: testemail@email.com"
              >
                testemail@email.com
              </a>
            </div>
          </div>
          <a>
            <div className="p-10">
              <a
                className="text-4xl font-bold text-green-500 "
                style={{ fontFamily: "Montserrat" }}
              >
                STANDORT
              </a>
            </div>
            <div>
              <a href="https://www.google.de/maps/place/Mayburgerpl.+3,+5204+Stra%C3%9Fwalchen/@47.9803332,13.2532547,17z/data=!3m1!4b1!4m5!3m4!1s0x477420454ddff04d:0x44fd0802fffe885e!8m2!3d47.9803296!4d13.2554434?hl=de">
                <Image src="/map.PNG" alt="map" width={22} height={22}></Image>
              </a>
            </div>
            <div>
              <div>Mayburgerplatz 2</div>
              <div>5204 Strasswalchen</div>

              <div className="p-4">
                <div className="flex border-solid border-4 border-gray-500 rounded-md">
                  <Image
                    src="/maya_bistro_strasswalchen.PNG"
                    alt="maya bistro local"
                    width={750}
                    height={380}
                  ></Image>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}

export default Kontakt;
