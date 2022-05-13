import BenefitItem from "./BenefitItem";
import { Image } from "next/image";

const BenefitPage1 = () => {
  return (
    <div className="flex">
      <div
        className="w-6/12 flex flex-col"
        data-aos="fade-down-right"
        data-aos-duration="1000"
      >
        <div className="flex items-center space-x-6">
          <div className="bg-sky-500 w-12 h-0.5"></div>{" "}
          <p className="text-sm font-DM font-bold text-primary">MANFAAT BUKU</p>
        </div>

        <div className="text-3xl w-5/6 font-DM leading-snug mt-3">
          <h1>
            Manfaat yang kamu dapatkan ketika membeli buku Tailwind CSS ini
          </h1>
        </div>

        <div className="font-DM text-lg leading-relaxed w-5/6 mt-8">
          <p>{`"Buku itu seperti cermin: kalau yang berkaca padanya adalah seorang yang bodoh, engkau tak bisa berharap yang terpantul adalah seorang yang jenius." - J.K Rowling`}</p>
        </div>

        <ul className="w-5/6 mt-8 space-y-5">
          <BenefitItem>
            Buku ini cocok untuk seorang yang ingin memperdalam front-end
            development agar tidak hanya sekadar Bootstrap
          </BenefitItem>
          <BenefitItem>
            Buku ini ditulis berdasarkan dari dokumentasi Tailwind CSS langsung,
            agar meminimalisir terjadinya miskonsepsi
          </BenefitItem>
          <BenefitItem>
            Sangat ramah untuk back-end developer yang phobia terhadap CSS dan
            mudah dipahami bagi UI designer
          </BenefitItem>
          <BenefitItem>
            Studi kasus membangun sebuah website responsive dengan Tailwind CSS
            tanpa ngoding CSS
          </BenefitItem>
        </ul>
      </div>
      <div
        className="relative w-5/12"
        data-aos="fade-down-left"
        data-aos-delay="500"
        data-aos-duration="1000"
      >
        <img src="/image/book2.png" alt="" />
        <div className="bg-primary absolute rounded-3xl px-8 text-white shadow-xl shadow-cyan-300/50 py-10 w-full bottom-10 grid grid-cols-3 gap-x-8">
          <div className="border-r-[1px] border-slate-200/50 ">
            <p className="text-3xl font-bold font-DM">19</p>
            <p className="text-sm font-DM">Jumlah Chapter</p>
          </div>
          <div className="border-r-[1px] border-slate-200/50">
            <p className="text-3xl font-bold font-DM">19</p>
            <p className="text-sm font-DM">Jumlah Chapter</p>
          </div>
          <div className="">
            <p className="text-3xl font-bold font-DM">19</p>
            <p className="text-sm font-DM">Jumlah Chapter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitPage1;
