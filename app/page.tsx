import MyCarousel from "@/components/models/Carousel/MyCarousel";
import DescSection from "@/components/models/Sections/DescSection";
import Card from "@/components/ui/Card";
import { FaBoxOpen, FaLocationArrow } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa6";
import { SiMoneygram } from "react-icons/si";
import ProductsSection from "@/components/models/Sections/ProductsSection";
import Link from "next/link";
import { ArrowLeft, PhoneCallIcon } from "lucide-react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import Footer from "@/components/models/Footer/Footer";

export default function Home() {
  return (
    <main className="bg-slate-800">
      <div className="mx-auto">
        <MyCarousel />
        <div className="z-50 absolute right-0 translate-y-[-30%] ">
          <div className="flex justify-between p-2 mx-2 items-center">
            <div className="mx-3">
              <Card
                icon={<FaCcVisa />}
                title="بطاقتك للشباب: Visa"
                desc="كل مشترياتك في جيبك! أسرع، أسهل، وأمان تام."
              >
                <input
                  type="text"
                  className="bg-slate-200 rounded-full text-center focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="اكتب رقم البطاقة"
                />
              </Card>
            </div>
            <div className="mx-3">
              <Card
                icon={<FaBoxOpen />}
                title="افتح عالمك المصرفي"
                desc="استمتع بخدمات بنكية مبتكرة تناسب أسلوب حياتك العصري."
              />
            </div>
            <div className="mx-3">
              <Card
                icon={<SiMoneygram />}
                title="حوّل فلوسك بسهولة"
                desc="سواء كانت دعمًا أو مشاركة، التحويلات المالية الآن أسرع وأكثر مرونة."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-200">
        <hr />
        <DescSection />
      </div>
      <div className="bg-slate-200 flex justify-center pt-20">
        <div
          className="w-[91%] h-72 px-36 mx-6 bg-cover bg-center bg-no-repeat flex rounded-2xl items-center justify-between align-middle"
          style={{ backgroundImage: "url('/images/bg.jpeg')" }}
        >
          <div className="flex justify-center items-start align-bottom">
            <img
              src="/images/Cristiano.png"
              alt=""
              className="w-[250px] z-50 translate-y-[-11.9%]"
              style={{
                filter: "drop-shadow(0 0 1px #000000)",
              }}
            />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-3xl font-bold text-white pb-4">
              حقق أهدافك المالية مع بنك أبو ظبى: خيار الأبطال
            </h1>
            <p className="text-white w-[600px] pb-0">
              كما يتألق كريستيانو رونالدو في الملاعب، يساعدك البنك العربي في
              تحقيق نجاحاتك المالية بثقة. استمتع بخدمات مصرفية مبتكرة، واستفد من
              خبرتنا في تلبية كل احتياجاتك المالية.
            </p>
            <div className="pt-4 flex justify-center items-center space-x-4">
              <Link
                href="/register"
                className="flex justify-center items-end align-middle bg-primary rounded-lg px-4 py-2 hover:translate-x-[-5px] duration-300"
              >
                <h1 className="text-white rounded-lg hover:bg-primary hover:text-white duration-300 ml-2">
                  المزيد
                </h1>
                <ArrowLeft className="text-white w-4 h-4 " />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 pt-10">
        <ProductsSection />
      </div>

      <div className="bg-slate-200 flex justify-center pt-20">
        <div
          className="w-[91%] h-72 px-36 mx-6 bg-cover bg-center bg-no-repeat flex rounded-2xl items-center justify-between align-middle"
          style={{ backgroundImage: "url('/images/bg.jpeg')" }}
        >
          <div className="flex justify-center items-start align-bottom">
            <img
              src="/images/Human.png"
              alt=""
              className="w-[230px] px-2 z-50 translate-y-[-9.4%]"
              style={{
                filter: "drop-shadow(0 0 1px #000000)",
              }}
            />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-3xl font-bold text-white pb-4">
              كن جزءًا من المستقبل - حمل التطبيق الآن!
            </h1>
            <p className="text-white w-[450px] pb-0">
              موقع البنك العربي يوفر تجربة مصرفية سهلة وآمنة للعملاء. استمتع
              بإدارة حساباتك والوصول إلى خدمات مالية متنوعة بكل يسر.
            </p>
            <div className="py-0 flex justify-center items-center space-x-4">
              <Link
                href="https://play.google.com/store/"
                className="hover:translate-y-[-6px] duration-300"
              >
                <img
                  src="/images/GooglePlay.png"
                  alt=""
                  className="w-44 pt-8 mx-3"
                />
              </Link>
              <Link
                href="https://www.apple.com/app-store/"
                className="hover:translate-y-[-6px] duration-300"
              >
                <img
                  src="/images/AppleStore.png"
                  alt=""
                  className="w-40 pt-8"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 p-6">
        <h1 className="text-3xl font-bold text-start py-8 w-full px-3">
          للتواصل والإستفسار
        </h1>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center align-middle mx-20">
            <p className="text-center">Egypt - Alexanderia - Al Amreia</p>
            <FaLocationArrow className="text-xl mx-2 text-primary" />
          </div>
          <div className="flex justify-center items-center align-middle mx-20">
            <p className="text-center">mo7amed.7amedenho@gmail.com</p>
            <MdOutlineMarkEmailRead className="text-3xl mx-2 text-primary" />
          </div>
          <div className="flex justify-center items-center align-middle mx-20">
            <p className="text-left" dir="ltr">
              +20 120 145 8129
            </p>
            <PhoneCallIcon className="text-xl mx-2 text-primary" />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
