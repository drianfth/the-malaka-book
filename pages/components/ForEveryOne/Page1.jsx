import Card from "./Card";

const Page1 = () => {
  return (
    <div className="container mx-auto py-36">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <div className="w-4/12" data-aos="flip-up" data-aos-duration="1000">
            <div className="flex items-center space-x-6">
              <div className="bg-sky-500 w-12 h-0.5"></div>{" "}
              <p className="text-sm font-DM font-bold text-primary">
                BUKU INI UNTUK SIAPA
              </p>
            </div>

            <div className="text-[32px] mt-4 font-DM font-medium">
              <p>
                Buku yang cocok dibaca untuk front-end dan back-end, bahkan UI
                designer!
              </p>
            </div>
          </div>

          <div
            className="w-6/12"
            data-aos="flip-down"
            data-aos-duration="1000"
            data-aos-delay="800"
          >
            <div className="w-4/6 block mx-auto text-lg font-DM text-slate-700">
              <p>
                Buku ini bukan hanya untuk front-end developer yang ingin
                meningkatkan skill, buku ini juga cocok untuk back-end developer
                dan UI designer agar dapat menulis style tanpa harus menulis
                kode CSS dan tanpa mengandalkan front-end developer!
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-36 ">
          <div className="" data-aos="fade-down" data-aos-duration="1000">
            <Card src="/image/utility.png" title="Utility-First Framework">
              Tailwind hadir dengan konsep utility-first. Utility-first artinya
              banyak class-class kecil yang bisa digabung untuk menjadi sebuah
              UI.
            </Card>
          </div>
          <div
            className=""
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <Card src="/image/tailwindJIT.png" title="Tailwind JIT Engine">
              JIT engine akan men-generate utility-class yang kita gunakan saja.
              Ini akan membuat pengalaman pengembangan semakin baik.
            </Card>
          </div>
          <div
            className=""
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <Card src="/image/framework.png" title="Unopinionated-Framework">
              Tailwind tidak memiliki pra-desain komponen apapun, ini membuat
              desain website yang kita buat menjadi unik.
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
