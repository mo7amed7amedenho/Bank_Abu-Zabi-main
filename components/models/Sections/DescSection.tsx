import Card_sec from "@/components/ui/Card_sec";
import React from "react";
import { MdAccountBalance } from "react-icons/md";
import { FaMoneyCheckAlt, FaCreditCard } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { AiOutlineBell } from "react-icons/ai";
import { RiShieldCheckLine } from "react-icons/ri";

const DescSection = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-end flex-col pt-36 px-16">
        <h1 className="text-2xl text-start font-bold text-gray-900">
          الخدمات الإلكترونية
        </h1>
        <p className="text-gray-700 py-3">
          يقدم البنك العربي خدمات إلكترونية متكاملة تشمل إدارة الحسابات
          والمعاملات البنكية عبر الإنترنت والهاتف المحمول بسهولة وأمان
          <br /> تتيح هذه الخدمات للعملاء تحويل الأموال، دفع الفواتير، والاطلاع
          على كشوف الحسابات على مدار الساعة. كما توفر تقنيات حديثة لضمان الأمان
          والخصوصية.
        </p>
      </div>
      <div className="justify-center items-center grid grid-cols-3 gap-6 p-4 pt-6 px-16">
        <Card_sec
          icon={<MdAccountBalance />}
          title="إدارة الحسابات"
          desc="إدارة حساباتك بكل سهولة عبر الإنترنت مع إمكانية عرض الرصيد والمعاملات ."
        />

        <Card_sec
          icon={<FaMoneyCheckAlt />}
          title="تحويل الأموال"
          desc="قم بتحويل الأموال محليًا ودوليًا بسرعة وأمان مع خيارات تحويل مرنة."
        />

        <Card_sec
          icon={<MdPayment />}
          title="دفع الفواتير"
          desc="سدد فواتيرك الشهرية أو الفواتير الأخرى إلكترونيًا بكل سهولة."
        />
        </div>
        <div className="justify-center items-center grid grid-cols-3 gap-3 p-4 px-16">
          <Card_sec
            icon={<FaCreditCard />}
            title="البطاقات الائتمانية"
            desc="تابع جميع العمليات على بطاقاتك الائتمانية في الوقت المناسب."
          />

          <Card_sec
            icon={<AiOutlineBell />}
            title="التنبيهات والإشعارات"
            desc="احصل على إشعارات فورية حول أي نشاط يحدث في حساباتك لضمان المتابعة."
          />

          <Card_sec
            icon={<RiShieldCheckLine />}
            title="الأمان والخصوصية"
            desc="نوفر لك أعلى معايير الأمان لحماية بياناتكم والمعاملات الإلكترونية."
          />
        </div>
      </div>
    
  );
};

export default DescSection;
