"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "@/components/models/Carousel/custom-swiper-bullet.css";
import Image from "next/image";


// const MyCarousel = dynamic(
//   () => import("@/components/models/Carousel/MyCarousel"),
//   { ssr: false }
// );

const CarouselComponent = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;

    const startProgress = () => {
      setProgress(0); // إعادة تعيين الخط
      progressInterval = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 1 : 100));
      }, 30); // يتم تحديث كل 30ms لجعل الخط يستمر 3000ms (3 ثواني)
    };

    startProgress(); // تشغيل المؤقت عند أول تحميل

    return () => clearInterval(progressInterval); // تنظيف الـ interval عند إلغاء الكومبوننت
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {/* الخط المتحرك */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${progress}%`, // عرض الخط بناءً على حالة progress
          height: "4px",
          backgroundColor: "#f9bb00",
          transition: "width 0.10s linear", // حركة ناعمة
          zIndex: 10,
        }}
      />

      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={20}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, // مدة كل صورة 3 ثواني
          disableOnInteraction: false,
        }}
        onSlideChange={() => {
          setProgress(0); // إعادة تعيين التقدم عندما تتغير الشريحة
        }}
        onAutoplayTimeLeft={(swiper, time) => {
          // يحسب الوقت المتبقي لكل صورة لتزامن الخط مع التغيير
          const newProgress = 100 - (time / 3000) * 100;
          setProgress(newProgress);
        }}
      >
        <SwiperSlide>
          <div className="relative">
            <Image
              className="w-full h-[406px] object-cover"
              src="/images/image0.jpg"
              alt="Image 1"
              width={1000}
              height={1000}
            />
            {/* <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-3xl font-bold">
              <p>النص فوق الصورة 1</p>
            </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              className="w-full h-[406px] object-cover"
              src="/images/image2.jpg"
              alt="Image 2"
              width={1000}
              height={1000}
            />
            {/* <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-3xl font-bold">
              <p>النص فوق الصورة 2</p>
            </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              className="w-full h-[406px] object-cover"
              src="/images/image1.jpg"
              alt="Image 3"
              width={1000}
              height={1000}
            />
            {/* <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-3xl font-bold">
              <p>النص فوق الصورة 3</p>
            </div> */}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselComponent;
