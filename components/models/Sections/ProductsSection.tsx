import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { MdCreditCard, MdBusiness } from "react-icons/md";
import { GiFist, GiPayMoney } from "react-icons/gi";
import { FaPlane, FaUserGraduate } from "react-icons/fa";
const cards = [
  {
    icon: <MdCreditCard />,
    title: "بطاقة الخصم المباشر",
    desc: "تتيح لك الوصول إلى حسابك بشكل مباشر لإجراء المعاملات اليومية.",
  },
  {
    icon: <GiPayMoney />,
    title: "البطاقة الائتمانية",
    desc: "تقدم حدود ائتمانية مرنة مع مزايا إضافية.",
  },
  {
    icon: <FaPlane />,
    title: "بطاقة السفر",
    desc: "مزايا خاصة عند السفر، بما في ذلك التأمين على السفر.",
  },
  {
    icon: <GiFist />,
    title: "بطاقة الهدايا",
    desc: "هدية مثالية للأحباء، يمكن شحنها بمبالغ مختلفة.",
  },
  {
    icon: <MdBusiness />,
    title: "بطاقة الأعمال",
    desc: "مصممة لتلبية احتياجات الشركات وأصحاب الأعمال.",
  },
  {
    icon: <FaUserGraduate />,
    title: "بطاقة الطلاب",
    desc: "تقدم مزايا خاصة للطلاب، بما في ذلك تخفيضات في بعض المتاجر.",
  },
];
const ProductsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[100%] px-6">
      <div className="flex items-center justify-between w-[90%]">
        <div>
          <h1 className="text-3xl font-bold flex">البطاقات المصرفية</h1>
          <p className="text-gray-700 py-3 w-[80%]">
            البطاقات المصرفية المقدمة من البنك العربي تشمل مجموعة متنوعة تلبي
            احتياجات جميع العملاء، من بطاقات الخصم المباشر إلى بطاقات السفر
            والبطاقات الائتمانية. توفر هذه البطاقات مزايا عديدة مثل حدود
            ائتمانية مرنة، وأمان في المعاملات، وإمكانية الوصول السريع للأموال.
          </p>
        </div>

        <div className="flex">
          <button className="mx-2 bg-red-300 p-2 text-primary rounded-lg hover:bg-red-600 duration-300 hover:text-red-200">
            <ArrowRight />
          </button>
          <button className="bg-red-300 p-2 text-primary rounded-lg hover:bg-red-600 duration-300 hover:text-red-200">
            <ArrowLeft />
          </button>
        </div>
      </div>
      <div className="w-[90%] mt-10">
        <div className="grid grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white relative shadow-md p-4 rounded-xl hover:scale-105 duration-300 hover:shadow-2xl hover:text-primary"
            >
              <div className="flex items-center mb-2">
                <span className="text-2xl ml-2">{card.icon}</span>
                <h4 className="font-bold">{card.title}</h4>
              </div>
              <div>
                <p className="text-gray-600">{card.desc}</p>
              </div>
              <div className="absolute bottom-4 left-4">
                <div className="flex items-center justify-center">
                  <h1 className="text-primary cursor-pointer">المزيد</h1>
                  <ArrowLeft className="text-primary w-4 mx-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-10">
          <button className="bg-red-100 border-2 ring-2 ring-red-300 p-2 text-primary rounded-full hover:bg-red-600 duration-300 hover:text-red-200">
           عرض جميع البطاقات
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
