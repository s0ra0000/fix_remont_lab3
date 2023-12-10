"use client";
import Image from "next/image";
import localFont from "next/font/local";
import { Link as ScrollLink } from "react-scroll";
const myFontMedium = localFont({
  src: "../../public/fonts/MullerMedium.woff2",
  display: "swap",
});
const myFontRegular = localFont({
  src: "../../public/fonts/MullerRegular.woff2",
  display: "swap",
});
const MainPage = () => {
  return (
    <section className="relative w-full flex justify-center h-screen items-start py-[40px]">
      <div className="relative w-[1700px] flex flex-wrap flex-col items-start justify-between h-full ">
        <div className="w-full items-center justify-between items-start h-auto flex flex-row">
          <div>
            <Image src="/logotype.png" width={200} height={55} alt="" />
          </div>
          <div className="flex flex-row justify-between items-centerm gap-[9px] z-20">
            <div className="flex items-center">
              <Image src="/Shape.png" width={24} height={24} alt="" />
            </div>
            <ScrollLink to="contact" smooth={true} duration={500}>
              <p
                className={`text-black text-[21px] mt-1 ${myFontMedium.className} hover:text-primary hover:cursor-pointer `}
              >
                Контакты
              </p>
            </ScrollLink>
          </div>
        </div>
        <header className="w-1/3 flex  flex-col justify-center items-start text-black">
          <h1
            className={`${myFontMedium.className} text-[64px] tracking-tight leading-[64px]`}
          >
            Ремонт квартир
            <br /> в типовых домах
          </h1>
          <p
            className={`${myFontRegular.className} text-[21px] leading-[30px] mt-[27px] `}
          >
            Готовый дизайн-проект, работы и материалы <br /> за 3 месяца от 610
            т.р.
          </p>
          <div className="flex flex-row justify-center items-center mt-[44px]">
            <button
              className={`bg-primary hover:bg-secondary text-white px-[31px] py-[14px] text-[16px] rounded-full drop-shadow-primary ${myFontMedium.className}`}
            >
              Узнайте о запуске первым
            </button>
            <p
              className={`ml-[31px] text-silver leading-[24px] text-[16px] ${myFontRegular.className}`}
            >
              Старт весной 2016
            </p>
          </div>
        </header>
        <div className="text-primary hover:cursor-pointer">
          <Image
            src="/arrows.png"
            width={40}
            height={30}
            alt=""
            className="float-left"
          />
          <ScrollLink to="main" smooth={true} duration={500}>
            <p
              className={`float-right ${myFontMedium.className} text-[16px] leading-[18px] ml-[12px]`}
            >
              Листайте вниз,
              <br /> чтобы ничего не упустить
            </p>
          </ScrollLink>
        </div>
      </div>
      <aside className="absolute left-1/2 top-5 bottom-5 z-10">
        <div className="relative w-full h-full flex justify-center items-center hover:cursor-pointer">
          <figure>
            <Image src="/hero.png" width={940} height={920} alt="" />
          </figure>
          <div className="w-full h-full absolute top-0 left-0 z-10 flex flex-col justify-center items-center">
            <figure>
              <Image src="/play.png" width={250} height={250} alt="" />
              <figcaption
                className={`${myFontRegular.className} text-center text-[21px] leading-[30px] text-primary mt-[19px]`}
              >
                Смотреть видео
              </figcaption>
            </figure>
          </div>
        </div>
      </aside>
    </section>
  );
};
export default MainPage;
