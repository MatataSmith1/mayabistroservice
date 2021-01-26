import Image from "next/image";
import { NextSeo } from "next-seo";
import Link from "next/link";

export default function BestellungFehlgeschlagen() {
  return (
    <main>
      <div className="flex container justify-center mx-auto text-center">
        <div className="grid grid-cols-1 divide-y divide-gray-400">
          <div className="text-xl p-10">
            <a
              className="text-4xl font-bold text-gray-500"
              style={{ fontFamily: "Montserrat" }}
            >
              Uups, das Bestellformular wurde nicht ordnungsgemäß ausgefüllt.
              Bitte versuchen Sie noch einmal!
            </a>
          </div>

          <div className="p-8">
            <button className="border-2 font-bold p-2 text-white w-full bg-green-500 hover:bg-white hover:border-green-500 hover:text-green-500">
              <Link href="/speisekarte">BESTELL FORMULAR</Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
