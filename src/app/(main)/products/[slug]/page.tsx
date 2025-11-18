"use client";

import clsx from "clsx";
import { Bell, Check, Heart, SlidersHorizontal, Star, UserStar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import RatingAndReviewsSection from "./components/RatingAndReviewsSection";
import PriceEvolutionChartSection from "./components/PriceEvolutionChartSection";

function ProductPage() {
  const [isActiveSection, setIsActiveSection] = useState<string>("fiyatlar");
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const handleSectionClick = (section: string) => {
    setIsActiveSection(section);
  };

  const isSectionActive = (section: string) => isActiveSection === section;

  const product = {
    name: "Xtra-Cal®",
    description:
      "Xtra-Cal®, güçlü bir kalsiyum ve D vitamini takviyesidir. Kemik sağlığını destekler ve bağışıklık sistemini güçlendirir.",
    images: ["/productdetail.webp", "/productdetail1.webp", "/productdetail2.webp"],
    brand: "Now Foods",
    category: "Takviye",
    subcategory: "Kalsiyum",
    type: "Tablet",
    rating: 4.7,
    reviewsCount: 1500,
    flavors: ["Portakal", "Limon", "Nane"],
    size: ["90 Tablet", "180 Tablet", "270 Tablet"],
    overview: [
      "Günlük kalsiyum ihtiyacınızı Xtra-Cal ile destekleyin.",
      "Xtra-Cal®, Kalsiyum ve Magnezyum, Bakır, Manganez ve Çinko gibi özenle seçilmiş diğer minerallerin bir karışımı ile formüle edilmiş günlük bir takviye edici gıdadır. Xtra-Cal® ayrıca kalsiyum ve fosforun normal emilimine ve kullanımına katkıda bulunan D Vitamini içerir. Buna ek olarak, D Vitamini normal kas fonksiyonunun korunmasına katkıda bulunur.",
      "Normal kemiklerin ve normal dişlerin korunması için yeterli kalsiyum alınması gerekir. Kalsiyum açısından zengin bu takviye edici gıda, günlük rutininize kolaylıkla dahil edebileceğiniz kullanışlı tabletler halinde gelir. Her ana öğünle birlikte bir tablet almanız yeterlidir. Günlük 3 tabletlik bir porsiyon size Kalsiyum BRD’nizin %100'ünden fazlasını sağlar.",
    ],
    features: [
      "Kalsiyum ile formüle edilmiştir",
      "Günlük porsiyon başına % 100'ün üzerinde Kalsiyum BRD* sağlar",
      "D Vitamini ile formüle edilmiştir",
      "Temel mineraller Magnezyum, Bakır, Manganez ve Çinko ile formüle edilmiştir",
      "90 tablet içerir",
    ],
    contents: {
      content:
        "Kalsiyum karbonat, hacim artırıcı (mikrokristalin selüloz), sitrik asidin kalsiyum tuzları, magnezyum oksit, hacim arttırıcı (çapraz-bağlı sodyum karboksi metil selüloz), mısır nişastası, topaklanmayı önleyici (yağ asitleri), tablet kaplama [hidroksipropil metil selüloz, renklendirici (titanyum dioksit), gliserol], topaklanmayı önleyici (silikon dioksit), topaklanmayı önleyici (yağ asitlerinin kalsiyum tuzları), çinko sülfat, bakır glukonat, parlatıcılar (gliserol, hidroksipropil metil selüloz), manganez sülfat, kolekalsiferol.",
      contentImageUrl: "/productdetail.webp",
    },
    usageInstructions: [
      "Yetişkinler için: Günde 3 defa, tercihen ana öğünlerle birlikte 1 tablet alın.",
      "Tabletleri bir bardak su ile yutunuz.",
      "Önerilen günlük porsiyonu aşmayınız.",
      "Takviye edici gıdalar çeşitli ve dengeli bir beslenmenin yerine geçmez.",
      "Çocukların ulaşamayacağı yerlerde saklayınız.",
      "Serin ve kuru yerde, doğrudan güneş ışığından uzakta saklayınız.",
    ],
    sellers: [
      {
        name: "Teknoloji Dünyası",
        rating: {
          score: 4.8,
          reviews: 1250,
        },
        location: "İstanbul, Türkiye",
        price: 34999,
        shipping: "Ücretsiz kargo",
        paymentOptions: ["Kredi Kartı", "Kapıda Ödeme", "Havale/EFT"],
        deliveryOptions: ["Yurtiçi Kargo", "Aras Kargo", "Sürat Kargo"],
      },
      {
        name: "MobilPazar",
        rating: {
          score: 4.6,
          reviews: 980,
        },
        location: "Ankara, Türkiye",
        price: 35250,
        shipping: "10 TL kargo ücreti",
        paymentOptions: ["Kredi Kartı", "Kapıda Ödeme"],
        deliveryOptions: ["Yurtiçi Kargo", "MNG Kargo"],
      },
      {
        name: "Elektronik Merkezi",
        rating: {
          score: 4.7,
          reviews: 1100,
        },
        location: "İzmir, Türkiye",
        price: 34800,
        shipping: "Ücretsiz kargo",
        paymentOptions: ["Kredi Kartı", "Havale/EFT"],
        deliveryOptions: ["Yurtiçi Kargo", "Sürat Kargo"],
      },
      {
        name: "Teknoloji Market",
        rating: {
          score: 4.5,
          reviews: 900,
        },
        location: "Bursa, Türkiye",
        price: 35000,
        shipping: "Ücretsiz kargo",
        paymentOptions: ["Kredi Kartı", "Kapıda Ödeme"],
        deliveryOptions: ["Yurtiçi Kargo", "Aras Kargo"],
      },
      {
        name: "Dijital Dünyam",
        rating: {
          score: 4.9,
          reviews: 1300,
        },
        location: "Antalya, Türkiye",
        price: 35100,
        shipping: "15 TL kargo ücreti",
        paymentOptions: ["Kredi Kartı", "Havale/EFT"],
        deliveryOptions: ["Yurtiçi Kargo", "MNG Kargo"],
      },
      {
        name: "TeknoSatış",
        rating: {
          score: 4.4,
          reviews: 850,
        },
        location: "Adana, Türkiye",
        price: 34950,
        shipping: "Ücretsiz kargo",
        paymentOptions: ["Kredi Kartı", "Kapıda Ödeme", "Havale/EFT"],
        deliveryOptions: ["Yurtiçi Kargo", "Sürat Kargo"],
      },
      {
        name: "Elektronik Dünyası",
        rating: {
          score: 4.6,
          reviews: 950,
        },
        location: "Konya, Türkiye",
        price: 35300,
        shipping: "10 TL kargo ücreti",
        paymentOptions: ["Kredi Kartı", "Kapıda Ödeme"],
        deliveryOptions: ["Yurtiçi Kargo", "Aras Kargo"],
      },
    ],
  };

  return (
    <main className="bg-white pt-10 text-[#0b051d]">
      <section className="flex gap-2 container mx-auto pb-6">
        <div className="flex gap-x-2 w-96 h-96 bg-[#f9f8f4] p-4 rounded-2xl relative">
          <div className="space-y-1 z-10">
            {product.images.map((imgSrc, index) => (
              <div
                key={index}
                className={`h-18 w-18 border border-neutral-300 rounded-2xl ${
                  activeImageIndex === index ? "ring ring-black" : ""
                }`}
                onClick={() => setActiveImageIndex(index)}
              >
                <Image
                  src={imgSrc}
                  alt={`Product Image ${index + 1}`}
                  className="h-full w-full object-cover rounded-2xl cursor-pointer"
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>

          <div className="w-full h-full absolute top-0 left-0 transition-all duration-700 delay-300">
            <Image
              src={product.images[activeImageIndex]}
              alt="Main Product Image"
              className="h-full w-full object-cover rounded-2xl transition-all duration-700 delay-500"
              width={320}
              height={320}
            />
          </div>
        </div>

        <div className="flex flex-col ml-4 gap-y-2">
          <h1 className="text-4xl font-semibold">{product.name}</h1>

          <div className="flex items-center justify-start h-8 text-sm">
            <div className="flex items-center gap-x-1 pr-3">
              <UserStar size={20} />
              <span className="font-semibold">{product.reviewsCount}</span>
              <span>İnceleme</span>
            </div>
            <div className="border-x px-1 border-neutral-300 flex items-center">
              <button className="flex items-center hover:bg-neutral-100 px-3 py-2 rounded-full">
                <Heart size={18} />
                <span className="ml-1">Favorilere Ekle</span>
              </button>
            </div>
            <div className="px-1">
              <button className="flex items-center hover:bg-neutral-100 px-3 py-2 rounded-full ">
                <Bell size={18} />
                <span className="ml-1">Alarm kur</span>
              </button>
            </div>
          </div>

          <div className="">{product.description}</div>

          <div className="space-y-1 text-neutral-600 text-sm">
            <div>Boyut Seçiniz</div>
            <div className="flex items-center gap-x-2">
              {product.size.map((sizeOption, index) => (
                <button
                  key={index}
                  className={clsx(
                    "border rounded-full px-4 py-1.5 hover:bg-[#78cd89] hover:text-white transition-colors",
                    sizeOption === product.size[0]
                      ? "text-white bg-[#256432] flex items-center gap-x-1.5 pl-1.5"
                      : "bg-white  border-neutral-300 "
                  )}
                >
                  {sizeOption === product.size[0] ? <Check className="rounded-full p-0.5 border " /> : null}
                  {sizeOption}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1 text-neutral-600 text-sm">
            <div>Aroma Seçiniz</div>
            <div className="flex items-center gap-x-2">
              {product.flavors.map((flavor, index) => (
                <button
                  key={index}
                  className={clsx(
                    "border rounded-full px-4 py-1.5 hover:bg-[#78cd89] hover:text-white transition-colors",
                    flavor === product.flavors[1]
                      ? " bg-[#256432] text-white flex items-center gap-x-1.5 pl-1.5"
                      : "bg-white  border-neutral-300 "
                  )}
                >
                  {flavor === product.flavors[1] ? <Check size={20} className="rounded-full p-0.5 border" /> : null}
                  {flavor}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* navbar*/}

      <section className="bg-white text-[#0b051d] flex flex-col gap-y-6">
        <nav className=" sticky top-17 bg-white">
          <ul className="flex space-x-8 border-neutral-300 z-10 bg-white container mx-auto">
            <Link
              href="#fiyatlar"
              className={clsx("font-semibold py-3 px-2", isActiveSection === "fiyatlar" && "border-b-2")}
            >
              Fiyatlar
            </Link>
            <Link
              href="#incelemeler"
              className={clsx("text-neutral-600 font-medium py-3", isActiveSection === "incelemeler" && "border-b-2")}
            >
              İncelemeler
            </Link>
            <Link
              href="#fiyat-gelisim"
              className={clsx(
                "text-neutral-600 font-medium py-3",
                isActiveSection === "fiyat-gelisim" && "text-red-500"
              )}
            >
              Fiyat gelişimi
            </Link>
            <Link
              href="#urun-hakkinda"
              className={clsx(
                "text-neutral-600 font-medium py-3",
                isActiveSection === "urun-hakkinda" && "text-red-500"
              )}
            >
              Ürün hakkında
            </Link>
          </ul>
        </nav>

        <div className="bg-neutral-100  py-10 px-3">
          <div id="fiyatlar" className="container mx-auto">
            <div>
              <div>
                <SlidersHorizontal />
              </div>
            </div>
            {product.sellers.map((seller, index) => (
              <div
                key={index}
                className={clsx(
                  "bg-white rounded-2xl pl-6 pt-2 flex flex-col h-30 justify-between mb-3 overflow-hidden",
                  index === 3 ? "h-90" : "shadow-sm"
                )}
              >
                <div className="flex items-center border-b border-neutral-200 flex-1">
                  <div className="text-lg ">{seller.name}</div>
                  <div>Konum: {seller.location}</div>
                  <div className="">Kargo: {seller.shipping}</div>
                </div>
                <div className="flex justify-end items-center gap-x-4 py-2">
                  <div className="text-2xl font-semibold">
                    {seller.price.toLocaleString("tr-TR", { style: "currency", currency: "TRY" })}
                  </div>
                  <div className="flex items-center gap-x-4">
                    <button className="bg-[#256432] text-white px-4 py-2 rounded-2xl hover:bg-[#308741] transition-colors">
                      Satıcıya Git
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rating & Reviews section */}

        <RatingAndReviewsSection />

        <PriceEvolutionChartSection />

        <div id="urun-hakkinda" className="container mx-auto py-10">
          <h2 className="text-3xl font-semibold mb-4 text-[#0b051d]">Ürün Hakkında</h2>
          <p className="mb-6 text-neutral-700">{product.overview.join(" ")}</p>
          <h2 className="text-2xl font-semibold mb-4">İçindekiler</h2>
          <p className="mb-4 text-neutral-700">{product.contents.content}</p>
        </div>

        <div className="container mx-auto py-10">
          <h2 className="text-2xl font-semibold mb-4">Kullanım Talimatları</h2>
          <ul className="list-disc list-inside">
            {product.usageInstructions.map((instruction, index) => (
              <li key={index} className="mb-2 text-neutral-700">
                {instruction}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default ProductPage;
