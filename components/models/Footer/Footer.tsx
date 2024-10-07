import Link from "next/link";
import React from "react";
import { IoPerson } from "react-icons/io5";

const Footer = () => {
  return (
    <footer
      style={{ backgroundImage: "url(/images/bg.jpeg)" }}
      className=" text-center text-white lg:text-left"
    >
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 lg:justify-between">
        <div className="me-12 hidden lg:block">
          <span>يمكنك التواصل معى عبر السوشيال ميديا :</span>
        </div>

        <div className="flex justify-center">
          <a
            href="https://www.facebook.com/mo7amed7amedinho/"
            className="me-6 [&>svg]:h-4 [&>svg]:w-4 hover:text-red-200 duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 320 512"
            >
              <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/mohamed-hamed-04967a270/"
            className="me-6 [&>svg]:h-4 [&>svg]:w-4 hover:text-red-200 duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/mo7amed.7amedenho/"
            className="me-6 [&>svg]:h-4 [&>svg]:w-4 hover:text-red-200 duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <span className="me-3 [&>svg]:h-4 [&>svg]:w-4">
                <IoPerson />
              </span>
              من أنا ؟
            </h6>
            <p className="text-gray-100 text-justify">
              أنا محمد حامد، مطور في تصميم الجرافيك وبرمجة المواقع باستخدام
              .NET و Next.js. لدي خبرة واسعة في تطوير تطبيقات ويب متقدمة وإنشاء
              هوية بصرية مبتكرة للشركات. أتميز بالجمع بين الإبداع الفني
              والمهارات البرمجية لتقديم حلول متكاملة تلبي احتياجات العملاء. أسعى
              دائمًا لتطوير قدراتي والابتكار في كل مشروع أعمل عليه.
            </p>
          </div>
          <div className="flex flex-col justify-start pr-16 items-start">
            <h6 className="mb-4 flex justify-center font-semibold ">مهاراتى</h6>
            <p className="mb-3">Graphic Design</p>
            <p className="mb-3">Video Editing</p>
            <p className="mb-3">Next Js</p>
            <p className="mb-3">.NET</p>
            <p>Sql</p>
          </div>
          <div className="flex flex-col justify-start pr-16 items-start">
            <h6 className="mb-4 flex justify-center font-semibold ">
              صفحات السوشيال ميديا
            </h6>
            <Link
              href="https://www.facebook.com/mo7amed7amedinho/"
              className="hover:text-red-300 duration-200"
            >
              <p className="mb-3">Facebook</p>
            </Link>
            <Link
              href="https://www.linkedin.com/in/mohamed-hamed-04967a270/"
              className="hover:text-red-300 duration-200"
            >
              <p className="mb-3">Linkedin</p>
            </Link>
            <Link
              href="https://www.instagram.com/mo7amed.7amedenho/"
              className="hover:text-red-300 duration-200"
            >
              <p className="mb-3">instagram</p>
            </Link>
            <Link
              href={"https://www.behance.net/mo7amedenho"}
              className="hover:text-red-300 duration-200"
            >
              <p className="mb-3">Behance</p>
            </Link>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              للتواصل
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
              </span>
              مصر - الإسكندرية - العامرية
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </span>
              mo7amed.7amedenho@gmail.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              01201458129
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black/5 p-6 text-center flex items-center justify-center">
        <span>© 2024 Copyright: Hamedenho</span>
      </div>
    </footer>
  );
};

export default Footer;
