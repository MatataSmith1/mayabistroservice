import { NextSeo } from "next-seo";

function Training() {
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
      site_name: "Training",
    }}
  />;
  return (
    <main>
      <div className="flex container justify-center mx-auto text-center">
        <div className="grid grid-cols-1 divide-y divide-gray-400">
          <div className="text-xl mt-10 pl-4 pr-4">
            <a
              className="text-4xl font-bold text-green-500"
              style={{ fontFamily: "Montserrat" }}
            >
              SPEISE KARTE
            </a>
            <div className="mt-4">
              <img
                className="border-2 border-gray-500 m-auto"
                src="/speisekarte.png"
                alt="speisekarte"
                width={750}
                height={380}
              />

              <div className="mt-12"></div>
            </div>
          </div>
          <div className="w-full">
            <div className="hidden md:flex m-auto">
              <div className="bg-white-400 w-full">
                <div className="p-6">
                  <a
                    className="text-4xl font-bold text-green-500"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    BESTELLEN
                  </a>
                  <div className="mt-8">
                    <form
                      action="http://manueltesting.bplaced.net/mailer.php"
                      method="POST"
                    >
                      <textarea
                        name="bestellung"
                        placeholder="Was wollen Sie bestellen? zb: Pizza Margerita extra Käse"
                        className="p-4 w-full border-2 border-gray-500 hover:border-green-500"
                      />
                      <div className="mt-4">
                        <a className="font-bold text-gray-500">
                          Telefon* und Gutscheincode
                        </a>
                        <div className="justify-between flex">
                          <input
                            name="telefon"
                            type="text"
                            placeholder="0612 11 22 123"
                            className="text-center mr-2 p-2 w-2/4 border-2 border-gray-500 hover:border-green-500"
                          />
                          <input
                            name="gutscheincode"
                            type="text"
                            placeholder="KEINER"
                            className="text-center p-2 w-2/4 border-2 border-gray-500 hover:border-green-500"
                          />
                        </div>
                      </div>
                      <div className="mt-5">
                        <a className="font-bold text-gray-500">
                          Postleitzahl* und Adresse*
                        </a>
                        <div className="justify-between flex">
                          <input
                            name="plz"
                            type="text"
                            placeholder="5204"
                            className="text-center mr-2 p-2 w-2/4 border-2 border-gray-500 hover:border-green-500"
                          />
                          <input
                            name="adresse"
                            type="text"
                            placeholder="Mayburgerplatz 2"
                            className="text-center p-2 w-2/4 border-2 border-gray-500 hover:border-green-500"
                          />
                        </div>
                      </div>
                      <div className="mt-5">
                        <button
                          type="submit"
                          className="border-2 font-bold p-2 text-white w-full bg-green-500 hover:bg-white hover:border-green-500 hover:text-green-500"
                        >
                          BESTELLEN
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:hidden m-auto">
            <div className="p-4">
              <a
                className="text-4xl font-bold text-green-500"
                style={{ fontFamily: "Montserrat" }}
              >
                BESTELLEN
              </a>
              <div className="mt-8">
                <a className="font-bold text-gray-500">
                  Was willst du Bestellen?*
                </a>
                <form
                  action="http://manueltesting.bplaced.net/mailer.php"
                  method="POST"
                >
                  <textarea
                    name="bestellung"
                    placeholder="Was wollen Sie bestellen? zb: Pizza Margerita extra Käse"
                    className="mb-1 p-4 w-full border-2 border-gray-500 hover:border-green-500"
                  />
                  <a className="font-bold text-gray-500">
                    Deine Telefonnummer:*
                  </a>
                  <input
                    name="telefon"
                    type="text"
                    placeholder="0612 11 22 123"
                    className="mb-2 text-center mr-2 p-2 w-full border-2 border-gray-500 hover:border-green-500"
                  />
                  <a className="font-bold text-gray-500">Gutscheincode:</a>
                  <input
                    name="gutscheincode"
                    type="text"
                    placeholder="KEINER"
                    className="mb-2 text-center p-2 w-full border-2 border-gray-500 hover:border-green-500"
                  />
                  <a className="font-bold text-gray-500">Postleitzahl:*</a>
                  <input
                    name="plz"
                    type="text"
                    placeholder="5204"
                    className="mb-2 text-center mr-2 p-2 w-full border-2 border-gray-500 hover:border-green-500"
                  />
                  <a className="font-bold text-gray-500">Adresse:*</a>
                  <input
                    name="adresse"
                    type="text"
                    placeholder="Mayburgerplatz 2"
                    className="mb-2 text-center p-2 w-full border-2 border-gray-500 hover:border-green-500"
                  />
                  <div className="mt-1">
                    <button
                      type="submit"
                      className="border-2 font-bold p-2 text-white w-full bg-green-500 hover:bg-white hover:border-green-500 hover:text-green-500"
                    >
                      BESTELLEN
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="hidden md:flex m-auto">
            <div className="pt-4 pb-16 pr-4 pl-4 text-green-500">
              Viel spass beim Bestellen und guten Appetit wünscht Ihnen das
              Maya-Bistro Team!{" "}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Training;
