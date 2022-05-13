import Image from "next/image";

const content = {
  body: '"Tailwind sangat memungkinkan kamu untuk membangun sebuah desain website yang unik dan tanpa kamu perlu menulis kode CSS sedikitpun. Mungkin kamu akan berpikir bahwa kamu akan membutuhkan waktu yang lebih lama ketika membangun sebuah website dengan utility-first framework ketimbang dengan framework UIkit. Ya, benar. Karena kamu harus memikirkan desain dan mengimplementasikan desain tersebut dari awal sendiri. Namun, kamu perlu ingat manfaat-manfaat yang diberikan oleh utility-first framework, sehingga kamu dapat mempertimbangkannya. Dalam buku ini, kita akan mempelajari framework Tailwind CSS. Mulai dari konsep, workflow, hingga membuat sebuah website responsive dengan TailwindCSS. Buku ini tidak untuk semua orang, setidaknya kamu memahami cara mengoperasikan komputer, memahami HTML, memahami CSS, atau bisa dibilang kamu sudah pernah membangun website sebelumnya dan ingin mempelajari hal baru untuk meningkatkan skill"',
};

const Page2 = () => {
  return (
    <div className="bg-primary flex py-24 text-white">
      <div className="container mx-auto flex justify-between">
        <div className="w-3/12" data-aos="fade-right" data-aos-duration="1000">
          <div className="flex items-center space-x-6">
            <div className="bg-white w-12 h-0.5"></div>
            <p className="text-sm font-DM font-bold text-white">
              BUKU INI UNTUK SIAPA
            </p>
          </div>
          <p className="text-3xl font-DM font-medium mt-3">
            Kata Pengantar Dari Penulis Buku
          </p>
          <hr className="my-10" />
          <div className="flex items-center space-x-5">
            <div className="">
              <Image
                src="/image/profile.png"
                alt="profile"
                width={50}
                height={50}
              />
            </div>
            <div className="">
              <p className="text-lg font-medium font-DM">
                Muhamad Nauval Azhar
              </p>
              <p className="text-sm font-DM text-slate-200">@mhdnauvalazhar</p>
            </div>
          </div>
        </div>
        <div
          className="w-6/12 text-lg font-DM"
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <p>{content.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Page2;
