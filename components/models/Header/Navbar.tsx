"use client";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import Link from "next/link";
import { LucideGlobe2 } from "lucide-react";
import Button from "@/components/ui/Button";
export default function Navbar() {
  return (
    <>
      <div className="bg-primary flex justify-between items-center px-8 py-1 max-sm:hidden">
        <nav className="flex text-md items-center bg-red-600 rounded-full px-2 text-white text-start">
          <LucideGlobe2 />
          <select
            name="language"
            id=""
            className="bg-red-600 rounded-full text-center focus:outline-none"
          >
            <option value="عربي">عربي </option>
            <option value="English">English</option>
          </select>
        </nav>
        <nav className="text-white flex text-xl">
          <ul className="hover:text-red-300 duration-300 mx-1">
            <Link href="https://www.facebook.com/mo7amed7amedinho/">
              <FaFacebook />
            </Link>
          </ul>
          <ul className="hover:text-red-300 duration-300 mx-1">
            <Link href="https://www.linkedin.com/in/mohamed-hamed-04967a270/">
              <FaLinkedin />
            </Link>
          </ul>
          <ul className="hover:text-red-300 duration-300 mx-1">
            <Link href="https://www.instagram.com/mo7amed.7amedenho/">
              <FaInstagram />
            </Link>
          </ul>
        </nav>
      </div>
      <div className="flex justify-between items-center px-8 py-4 border-b-2 bg-white">
        <nav className="flex justify-start items-center px-8">
          <img src="/images/logo.png" alt="logo" className="h-10" />
        </nav>
        <nav className="flex justify-between text-md items-center px-8">
          <Link href="/" className="hover:text-primary duration-300 mx-5">
            الحسابات
          </Link>
          <Link href="/" className="hover:text-primary duration-300 mx-5">
            البطاقات
          </Link>
          <Link href="/" className="hover:text-primary duration-300 mx-5">
            القروض
          </Link>
          <Link href="/" className="hover:text-primary duration-300 mx-5">
            الخدمات الرقمية
          </Link>
          <Link href="/" className="hover:text-primary duration-300 mx-5">
            علاقات المستثمرين
          </Link>
          <Link href="/" className="hover:text-primary duration-300 mx-5">
            عن البنك
          </Link>
          <Link href="/" className="hover:text-primary duration-300 mx-5">
            تواصل معنا
          </Link>
        </nav>
        <nav className="flex justify-end items-center px-8">
          <Button className="flex justify-center items-center">
            <FaMoneyCheckDollar className="ml-2" />
            أفتح حساب مستثمر
          </Button>
        </nav>
      </div>
    </>
  );
}
