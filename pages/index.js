import Image from "next/image";
import Link from "next/link";

export default function IndexPage() {
  return (
    <main>
      <div className="flex container justify-center mx-auto text-center">
        <div className="grid grid-cols-1 divide-y divide-gray-400">
          <div className="text-xl p-10">
            <a
              className="text-4xl font-bold text-green-500"
              style={{ fontFamily: "Montserrat" }}
            >
              Willkommen bei Maya Bistro
            </a>
            <div className="mt-6">
              <a>Bestellen Sie unter </a>
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
                <div className="pt-2">oder</div>
                <div className="pt-2">
                  <button className="border-2 font-bold p-2 text-white w-full bg-green-500 hover:bg-white hover:border-green-500 hover:text-green-500">
                    <Link href="/speisekarte">BESTELL FORMULAR</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <a>
            <div className="p-10">
              <a
                className="text-4xl font-bold text-gray-500 "
                style={{ fontFamily: "Montserrat" }}
              >
                Unsere Spezialitäten
              </a>
            </div>

            <div className="m-auto">
              <div className="p-4">
                <div className="hidden md:flex">
                  <div className="flex">
                    <div className="flex">
                      <div>
                        <a
                          className="text-4xl font-bold text-green-500"
                          style={{ fontFamily: "Montserrat" }}
                        >
                          Italienisch
                        </a>
                        <div className="flex p-4 border-r border-gray-500">
                          <div className="flex border-4 border-gray-400">
                            <Image
                              src="/pizza-banner.PNG"
                              alt="pizza"
                              width={700}
                              height={200}
                            ></Image>
                          </div>
                          <div className="flex border-r-4 border-t-4 border-b-4  border-gray-400">
                            <Image
                              src="/pasta.PNG"
                              alt="pasta"
                              width={400}
                              height={300}
                            ></Image>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex ">
                      <div>
                        <a
                          className="text-4xl font-bold text-orange-900"
                          style={{ fontFamily: "Montserrat" }}
                        >
                          Orientalisch
                        </a>
                        <div className="flex p-4">
                          <div className="flex border-4 border-gray-400">
                            <Image
                              src="/dürüm.PNG"
                              alt="dürüm"
                              width={400}
                              height={300}
                            ></Image>
                          </div>
                          <div className="flex border-r-4 border-t-4 border-b-4 border-gray-400">
                            <Image
                              src="/kebap.jpg"
                              alt="kebap"
                              width={300}
                              height={200}
                            ></Image>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex md:hidden">
                  <div className="m-auto pl-4 pr-4">
                    <a
                      className="text-4xl font-bold text-green-500"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      Italienisch
                    </a>
                    <div className="pl-2 pr-2 pb-2 border-2">
                      <a
                        className="text-2xl font-bold text-green-500"
                        style={{ fontFamily: "Montserrat" }}
                      >
                        Pizza
                      </a>
                      <div className="flex border-4">
                        <Image
                          src="/pizza-banner.PNG"
                          alt="pizza"
                          width={525}
                          height={200}
                        ></Image>
                      </div>

                      <div>
                        <a
                          className="text-2xl font-bold text-green-500"
                          style={{ fontFamily: "Montserrat" }}
                        >
                          Pasta
                        </a>
                        <div className="flex  border-4 ">
                          <Image
                            src="/pasta.PNG"
                            alt="pasta"
                            width={525}
                            height={300}
                          ></Image>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4">
                      <a
                        className="text-4xl font-bold text-orange-900"
                        style={{ fontFamily: "Montserrat" }}
                      >
                        Orientalisch
                      </a>
                      <div className="pl-2 pr-2 pb-2 border-2">
                        <a
                          className="text-2xl font-bold text-orange-900"
                          style={{ fontFamily: "Montserrat" }}
                        >
                          Dürüm
                        </a>
                        <div className="flex  border-4 ">
                          <Image
                            src="/dürüm.PNG"
                            alt="dürüm"
                            width={525}
                            height={300}
                          ></Image>
                        </div>

                        <div>
                          <a
                            className="text-2xl font-bold text-orange-900"
                            style={{ fontFamily: "Montserrat" }}
                          >
                            Kebap
                          </a>
                          <div className="flex border-4">
                            <Image
                              src="/kebap.jpg"
                              alt="kebap"
                              width={525}
                              height={525}
                            ></Image>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <div className="pt-4 pb-16 pr-4 pl-4 text-green-500">
            Viel spass beim Bestellen und guten Appetit wünscht Ihnen das
            Maya-Bistro Team!{" "}
          </div>
        </div>
      </div>
    </main>
  );
}
