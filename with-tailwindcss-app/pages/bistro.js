import { NextSeo } from "next-seo";
function Termine() {
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
      site_name: "Termine",
    }}
  />;
  return (
    <main>
      <div className="flex container justify-center mx-auto text-center">
        <div className="grid grid-cols-1 divide-y divide-gray-400">
          <div className="text-xl p-8">
            <a
              className="text-4xl font-bold text-green-500"
              style={{ fontFamily: "Montserrat" }}
            >
              BISTRO
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Termine;
