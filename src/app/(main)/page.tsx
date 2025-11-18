import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

function Home() {
  const data = [
    {
      id: 1,
      name: "Herbal Aloe Konsantre İçecek",
      weight: "473 ml",
      imageUrl: "/pc-0006-tr.webp",
      cheapestSellers: [
        { price: 150, sellerName: "Berat Bayram" },
        { price: 155, sellerName: "Ali Veli" },
        { price: 160, sellerName: "Ayşe Yılmaz" },
      ],
      totalSellers: 25,
    },
    {
      id: 2,
      name: "Formül 1 Öğün Yerine Geçen Çorba​",
      weight: "550 gr",
      imageUrl: "/pc-0006-tr.webp",
      cheapestSellers: [
        { price: 200, sellerName: "Ali Veli" },
        { price: 210, sellerName: "Ayşe Yılmaz" },
        { price: 205, sellerName: "Ahmet Demir" },
      ],
      totalSellers: 30,
    },
    {
      id: 3,
      name: "Protein Bar​",
      weight: "60 gr",
      imageUrl: "/pc-0006-tr.webp",
      cheapestSellers: [
        { price: 50, sellerName: "Berat Bayram" },
        { price: 55, sellerName: "Selin Yılmaz" },
        { price: 52, sellerName: "Merve Kaya" },
      ],
      totalSellers: 15,
    },
    {
      id: 4,
      name: "Doğal Enerji İçeceği​",
      weight: "250 ml",
      imageUrl: "/pc-0006-tr.webp",
      cheapestSellers: [
        { price: 20, sellerName: "Berat Bayram" },
        { price: 22, sellerName: "Ali Veli" },
        { price: 21, sellerName: "Oğuzhan Bayram" },
      ],
      totalSellers: 50,
    },
    {
      id: 5,
      name: "Vitamin Takviyesi​",
      weight: "100 kapsül",
      imageUrl: "/pc-0006-tr.webp",
      cheapestSellers: [
        { price: 80, sellerName: "Oğuzhan Bayram" },
        { price: 85, sellerName: "Ayşe Bayram" },
        { price: 82, sellerName: "Fatma Şahin" },
      ],
      totalSellers: 20,
    },
    {
      id: 6,
      name: "Sağlıklı Atıştırmalık​",
      weight: "250 gr",
      imageUrl: "/pc-0006-tr.webp",
      cheapestSellers: [
        { price: 10, sellerName: "Ayşe Bayram" },
        { price: 12, sellerName: "Fatma Şahin" },
        { price: 11, sellerName: "Oğuzhan Bayram" },
      ],
      totalSellers: 40,
    },
    /*
    {
      id: 7,
      name: "Bitkisel Çay Karışımı​",
      weight: "100 gr",
      imageUrl: "/pc-0006-tr.webp",
      cheapestSellers: [
        { price: 30, sellerName: "Berat Bayram" },
        { price: 32, sellerName: "Ali Veli" },
        { price: 31, sellerName: "Ayşe Yılmaz" },
      ],
      totalSellers: 18,
    },
    {
      id: 8,
      name: "Glutensiz Makarna​",
      weight: "500 gr",
      imageUrl: "/pc-0006-tr.webp",
      cheapestSellers: [
        { price: 25, sellerName: "Mert Çanak" },
        { price: 27, sellerName: "Cem Yılmaz" },
        { price: 26, sellerName: "Derya Taş" },
      ],
      totalSellers: 22,
    },
    */
  ];

  return (
    <main className="font-sans pb-10 container mx-auto">
      <section className="bg-[#256432] text-neutral-300 w-full min-h-96 rounded-4xl relative flex flex-col justify-center px-6">
        <h1 className="text-6xl font-semibold font-sans antialiased tracking-tighter">
          Ara, karşılaştır ve kaydet
          <br /> Sana uygun
          <Image
            src="/il_570xN.4890364586_h2oe.avif"
            className="object-cover h-20 w-80 inline-block"
            alt="wdds"
            width={600}
            height={120}
          />
          burada
        </h1>
        <p className="pt-4 pb-14 text-lg">
          Türkiye&apos;deki önde gelen Herbalife distribütörlerinin tekliflerini
          <br /> tek bir yerden karşılaştırın, en ucuza güvenle satın alın.
        </p>
        <label className="bg-white absolute left-6 bottom-12 rounded-full">
          <input
            type="search"
            className="p-3 min-w-[500px] placeholder:text-neutral-600 focus:z-40 focus-"
            placeholder="Bugün ne arıyorsun?"
          />
          <div className="absolute bg-[#256432] w-10 h-10 rounded-full top-1/2 right-2 -translate-y-1/2 flex items-center justify-center">
            <ArrowRight />
          </div>
        </label>
      </section>

      <section className="grid grid-cols-14">
        {[
          {
            id: 1,
            imageUrl: "/herbalife-logo.png",
            name: "İçecekler & çaylar",
          },
          { id: 2, imageUrl: "/herbalife-logo.png", name: "Atıştırmalıklar" },
          {
            id: 3,
            imageUrl: "/herbalife-logo.png",
            name: "Vitaminler & takviyeler",
          },
          { id: 4, imageUrl: "/herbalife-logo.png", name: "Kişisel bakım" },
          { id: 5, imageUrl: "/herbalife-logo.png", name: "Spor & performans" },
          { id: 6, imageUrl: "/herbalife-logo.png", name: "Ağırlık yönetimi" },
          { id: 7, imageUrl: "/herbalife-logo.png", name: "Cilt bakımı" },
          { id: 8, imageUrl: "/herbalife-logo.png", name: "Sağlık & wellness" },
          {
            id: 9,
            imageUrl: "/herbalife-logo.png",
            name: "Protein & takviyeler",
          },
          {
            id: 10,
            imageUrl: "/herbalife-logo.png",
            name: "Enerji & spor içecekleri",
          },
          { id: 11, imageUrl: "/herbalife-logo.png", name: "Bitkisel ürünler" },
          {
            id: 12,
            imageUrl: "/herbalife-logo.png",
            name: "Glutensiz ürünler",
          },
          { id: 13, imageUrl: "/herbalife-logo.png", name: "Çocuk ürünleri" },
          {
            id: 14,
            imageUrl: "/herbalife-logo.png",
            name: "Özel diyet ürünleri",
          },
        ].map((category) => (
          <div key={category.id} className="mr-6 mt-12 text-center flex flex-col items-center">
            <div className="w-20 h-20 mb-2 rounded-full rounded-b-none bg-white flex items-center justify-center">
              <Image src="/shake.webp" alt="wdds" width={50} height={50} />
            </div>
            <div className="text-sm font-medium">{category.name}</div>
          </div>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Şu anda popüler ürünler</h2>
        <div className="grid grid-cols-6 gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="border border-neutral-200 rounded-2xl hover:border-[#256432] bg-[#f8f8fa] group relative flex flex-col justify-start overflow-hidden shadow-xl"
            >
              <div className="absolute top-2 right-2 bg-white text-xs px-2 py-1 rounded-full border border-neutral-300">
                {item.weight}
              </div>
              <div className="w-full h-56 mb-4 rounded-lg bg-neutral-200 flex items-center justify-center">
                <Image
                  src={item.imageUrl}
                  alt={`Product ${item.name}`}
                  width={128}
                  height={128}
                  className="w-32 h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110 "
                />
              </div>
              <div className="px-3 flex flex-col justify-start w-full h-56">
                <div className="mb-2 flex-1">{item.name}</div>
                <div className="flex flex-col gap-y-2">
                  <div className="flex justify-between items-center border-b border-neutral-200">
                    <div>
                      <p className="text-sm text-[#364354]">
                        {item.cheapestSellers[0].sellerName}{" "}
                        <span className="text-[#5eb546] text-xs font-bold">EN UCUZ</span>
                      </p>
                      <p className="text-black text-lg font-semibold">
                        ₺{(item.cheapestSellers[0].price * 50).toFixed(2)}
                      </p>
                    </div>
                    <ChevronRight />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">
                        {item.cheapestSellers[1].sellerName}
                        <span className="text-[#256432] text-xs font-bold"></span>
                      </p>
                      <p className="text-black text-lg font-semibold">
                        ₺{(item.cheapestSellers[1].price * 50).toFixed(2)}
                      </p>
                    </div>
                    <ChevronRight />
                  </div>
                  <div className="mb-3">
                    <button className="text-sm text-center rounded-2xl border p-3 w-full bg-[#256432] text-white cursor-pointer font-semibold">
                      +{item.totalSellers} Satıcı
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-6">Popüler Satıcılar</h2>
          <div>Tümünü Gör</div>
        </div>
        <div className="grid grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="flex flex-col bg-neutral-50 items-center border-t border-x border-neutral-300 rounded-b-4xl shadow-xl py-4"
            >
              <div className="border border-neutral-300 rounded-full h-48 w-48 flex flex-col items-center justify-center group text-underline cursor-pointer hover:bg-neutral-200 transition-colors duration-300">
                <div className="rounded-full overflow-hidden h-full w-full transition-transform duration-300 text-[#256432]">
                  <Image src="/IMG_20190507_232453_781.jpg" width={300} height={300} alt="fdsf" />
                </div>
              </div>
              <div className="border border-neutral-300 bg-neutral-100 rounded-2xl rounded-t-none px-6 my-2 py-2 w-10/12 text-center">
                <h3 className="text-lg">Berat Bayram</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Campaigns */}

<section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Kampanyalar</h2>
        <div className="grid grid-cols-3 gap-4">
          {[{
            id: 1,
            title: "Hafta Sonu İndirimi",
            description: "Tüm ürünlerde %20 indirim fırsatını kaçırma!",
            imageUrl: "/herba-campaigns2.png",
          }, {
            id: 2,
            title: "11.11 Kampanyası",
            description: "11 Kasım'da özel indirimlerle alışveriş yap!",
            imageUrl: "/herba-campaigns.webp",
          }, {
            id: 3,
            title: "Kışa Özel Fırsatlar",
            description: "Kış ürünlerinde %25 indirim fırsatını yakala!",
            imageUrl: "/herba-campaigns2.webp",
          }].map((item) => (
            <div
              key={item.id}
              className="relative rounded-4xl overflow-hidden h-64 cursor-pointer group border border-neutral-300"
            >
              <Image
                src={item.imageUrl}
                alt={`Kampanya ${item.title}`}
                width={600}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#256432] to-transparent p-4">
                <h3 className="text-white text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-white text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
</section>

      <section className="mt-12">
        <div className="bg-[#256432] rounded-4xl p-6 flex items-center justify-between text-white">
          <div>
            <h2 className="text-2xl font-bold mb-2">Distribütör müsün?</h2>
            <p>Ürünlerini Setbul&apos;da listeleyerek daha fazla müşteriye ulaş.</p>
          </div>
          <button className="bg-white text-[#256432] font-semibold px-6 py-3 rounded-full hover:bg-neutral-200 transition-colors duration-300">
            Hemen Başvur
          </button>
        </div>
      </section>

      {/* Öne çıkan fırsat ve mağazalar */}

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#f0f8f5] rounded-4xl p-6 flex items-center justify-between">  
          <div>
            <h2 className="text-2xl font-bold mb-2">Öne Çıkan Fırsat</h2>
            <p>En iyi indirimleri ve kampanyaları kaçırma.</p>
          </div>
          <button className="bg-[#256432] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#1e4d2f] transition-colors duration-300">
            Fırsatları Gör
          </button>
        </div>
        <div className="bg-[#f0f8f5] rounded-4xl p-6 flex items-center justify-between">  
          <div>
            <h2 className="text-2xl font-bold mb-2">Popüler Mağazalar</h2>
            <p>En çok tercih edilen distribütörleri keşfet.</p>
          </div>
          <button className="bg-[#256432] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#1e4d2f] transition-colors duration-300">
            Mağazaları Gör
          </button>
        </div>
      </div>
      
    </main>
  );
}

export default Home;
