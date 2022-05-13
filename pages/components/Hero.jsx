import { ArrowCircleRightIcon, DownloadIcon } from "@heroicons/react/outline";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

const Hero = () => {
  // ..
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="text-white flex mt-20" id="home">
      <div
        className="flex flex-col w-6/12"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="font-DM text-5xl font-medium leading-tight">
          <p>
            Sebuah framework CSS untuk developer yang memiliki phobia terhadap
            CSS
          </p>
        </div>

        <div className="w-4/6 mt-10">
          <p className="leading-loose">
            Buku ini akan mengajarkan kamu konsep utility-first pada CSS dan
            diakhiri dengan membangun sebuah website yang responsive dengan
            Tailwind CSS.
          </p>
        </div>

        <div className="flex space-x-10 mt-10">
          <button className="bg-primary shadow-lg shadow-cyan-400/50 hover:shadow-transparent transition flex flex-row justify-center  items-center space-x-2 font-semibold px-8 py-4 rounded-full">
            <a href="">Beli sekarang</a>
            <ArrowCircleRightIcon className="h-5 w-5" />
          </button>

          <div className="flex space-x-5">
            <div className="">
              <DownloadIcon className="h-6" />
            </div>
            <div className="">
              <div className="font-sourceSansPro font-bold text-slate-400">
                SUDAH TERJUAL
              </div>
              <div className="text-2xl font-inter font-semibold">501,234+</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-5 mt-24">
          <div className="flex space-x-8 items-center">
            <div className="bg-gray-500 w-12 h-1"></div>
            <p>TEKNOLOGI YANG DIGUNAKAN</p>
          </div>

          <div className="flex items-center space-x-5">
            <div className="">
              <Image
                src="/image/html5-icon.svg"
                alt="html"
                width={30}
                height={41}
              />
            </div>
            <div className="">
              <Image src="/image/css.svg" alt="html" width={30} height={41} />
            </div>
            <div className="">
              <Image
                src="/image/firefox.svg"
                alt="html"
                width={30}
                height={41}
              />
            </div>
            <div className="">
              <Image
                src="/image/sublimetext.svg"
                alt="html"
                width={29}
                height={29}
              />
            </div>
            <div className="">
              <Image
                src="/image/terminal.svg"
                alt="html"
                width={30}
                height={32}
              />
            </div>
            <div className="">
              <Image
                src="/image/nodejs.svg"
                alt="html"
                width={30}
                height={32}
              />
            </div>
            <div className="">
              <Image src="/image/yarn.svg" alt="html" width={30} height={30} />
            </div>
            <div className="">
              <Image src="/image/npm.svg" alt="html" width={35} height={15} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-6/12" data-aos="fade-left" data-aos-duration="1000">
        <Image src="/image/book.png" alt="buku" width={500} height={765} />
      </div>
    </div>
  );
};

export default Hero;
