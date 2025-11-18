import clsx from "clsx";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function RatingAndReviewsSection() {
  const mockReviews = [
    {
      id: 1,
      rating: 5,
      comment: "Harika bir ürün! Çok memnun kaldım. ",
      reviewer: "Ahmet Yılmaz",
      imgUrl: "/IMG_20190507_232453_781.jpg",
      date: "2025-10-01",
    },
    {
      id: 2,
      rating: 4,
      comment: "Çok iyi, ama biraz pahalı.",
      reviewer: "Ayşe Fatma",
      imgUrl: "/IMG_20190507_232453_781.jpg",
      date: "2025-10-02",
    },
    {
      id: 3,
      rating: 3,
      comment: "Ortalama kalite.",
      reviewer: "Mehmet Can",
      imgUrl: "/IMG_20190507_232453_781.jpg",
      date: "2025-10-03",
    },
    {
      id: 4,
      rating: 5,
      comment: "Kesinlikle tavsiye ederim!",
      reviewer: "Elif Nur",
      imgUrl: "/IMG_20190507_232453_781.jpg",
      date: "2025-10-04",
    },
    {
      id: 5,
      rating: 4,
      comment: "Çok güzel bir ürün.",
      reviewer: "Kerem Şahin",
      imgUrl: "/IMG_20190507_232453_781.jpg",
      date: "2025-10-05",
    },
    {
      id: 6,
      rating: 5,
      comment: "Mükemmel performans ve kalite!",
      reviewer: "Zeynep K.",
      imgUrl: "/IMG_20190507_232453_781.jpg",
      date: "2025-10-06",
    },
    {
      id: 7,
      rating: 4,
      comment:
        "20.08 tarihinde Herbalife’dan 6K11360668 numaralı siparişi verdim ve 22 Ağustos’ta Trabzon’da teslim aldım. Siparişimde 5 kutu Liftof, 3 kutu Omega, 1 kutu Aloe içecek, 1 adet siyah shaker, 1 adet Xtracall, 1 adet bayanlar için vitamin ve 1 adet 51 g çay bulunmaktaydı. Ancak bana gelen pakette 2 adet 102 g çay, 1 adet Aloe içecek, 1 adet shake ve 1 adet Xtracall vardı; ayrıca faturada başkasının adı yazıyordu. Siparişimdeki ürünlerin büyük kısmı eksikti ve bana ait olmayan ürünler gönderildi.",
      reviewer: "Caner T.",
      imgUrl: "/IMG_20190507_232453_781.jpg",
      date: "2025-10-07",
    },
    {
      id: 8,
      rating: 1,
      comment:
        "22/10/2025 tarihinde Herbalife'ın Tuzla’daki online satış şirketinden sipariş numarası 6k11515606 ile Skin serisi temizleyici ve nemlendirici ürünlerini 4086 TL ödeyerek satın aldım. Ürünler elime ulaştığında son kullanma tarihlerinin bitmesine sadece 3 ay kaldığını gördüm.",
      reviewer: "Selin A.",
      imgUrl: "/IMG_20190507_232453_781.jpg",
      date: "2025-10-08",
    },
  ];

  const averageRating = mockReviews.reduce((sum, review) => sum + review.rating, 0) / mockReviews.length;

  return (
    <div id="incelemeler" className="px-3 container mx-auto">
      <h2 className="text-3xl mb-4 text-[#0b051d]">Rating & Reviews</h2>
      <div className="flex max-md:flex-col items-center gap-10">
        <div className="flex gap-x-4 items-end">
          <div className="flex flex-col items-start gap-y-4 mr-4">
            <div className="flex items-end">
              <div className="text-9xl md:text-[200px] leading-32 tracking-[-0.05em]">{averageRating.toFixed(1)} </div>
              <div className="text-5xl tracking-normal text-neutral-400">/5</div>
            </div>
            <button className="text-neutral-400 text-xl">({mockReviews.length}) New Reviews</button>
          </div>
          <div>
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="flex items-center gap-x-2 text-lg mb-2">
                <div>{i + 1}</div>
                <div className="text-yellow-500">&#9733;</div>
                <div className="w-32 md:w-72 h-2 bg-neutral-200 rounded-xl relative">
                  <div
                    className="absolute top-1/2 -translate-y-1/2 left-0 h-2 bg-black rounded-xl"
                    style={{
                      width: `${mockReviews.filter((review) => review.rating === i + 1).length * 10}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {mockReviews.length === 0 ? (
          <div className="">
            <Image src="/no-product-reviews-illustration-400x218px.png" width={400} height={400} alt="No reviews" />
            <div className="text-neutral-500 mt-4 text-center">Henüz yorum yapılmadı!</div>
          </div>
        ) : (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ el: ".custom-pagination", type: "progressbar", clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="w-full h-72 max-w-3xl relative"
          >
            {mockReviews.map((review) => (
              <SwiperSlide key={review.id} className="flex h-72 border-2 border-neutral-100 rounded-2xl p-4 gap-y-4">
                <div className="text-xl text-black font-semibold">{review.reviewer}</div>
                <div className="flex justify-between">
                  <div className="flex items-center mb-2 gap-x-3 text-2xl">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div key={i} className={clsx(i < review.rating ? "text-yellow-500" : "text-neutral-300")}>
                        &#9733;
                      </div>
                    ))}
                  </div>
                  <div className="text-neutral-500 text-lg">{new Date(review.date).toLocaleDateString("tr-TR")}</div>
                </div>
                <div className="text-neutral-500 flex-1 ">&quot;{review.comment}&quot;</div>
                <Image
                  src={review.imgUrl}
                  width={70}
                  height={70}
                  alt={review.reviewer}
                  className="rounded-full object-cover my-4"
                />
              </SwiperSlide>
            ))}
            <div className="custom-pagination" />
          </Swiper>
        )}
      </div>
    </div>
  );
}

export default RatingAndReviewsSection;
