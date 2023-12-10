"use client";
import { useState } from "react";
import localFont from "next/font/local";
import Image from "next/image";
import SlideComponent from "./SlideComponent";
const myFontMedium = localFont({
  src: "../../public/fonts/MullerMedium.woff2",
  display: "swap",
});
const myFontRegular = localFont({
  src: "../../public/fonts/MullerRegular.woff2",
  display: "swap",
});
const SlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const numberOfSlides = 3;
  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numberOfSlides);
  };

  const handlePrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + numberOfSlides) % numberOfSlides
    );
  };
  return (
    <div className="relative flex w-full h-auto flex-col justify-center items-center mt-[20px]">
      <div className="w-[980px] h-auto ">
        <header>
          <h2
            className={`${myFontMedium.className} text-[40px] leading-[50px]`}
          >
            3 стиля интерьера
          </h2>
          <p
            className={`${myFontMedium.className} text-emerald text-[16px] leading-[24px] uppercase`}
          >
            Скандинавский, классический и эко-стиль
          </p>
        </header>
      </div>
      <div className="relative h-[750px] py-[50px] w-full overflow-hidden flex- justify-center items-center">
        <div
          className="absolute flex flex-row z-10 w-full justify-center items-center visible overflow-hidden left-[460px]"
          style={{
            transform: `translateX(-${currentIndex * 980}px)`, // Adjusted calculation
            transition: "transform 0.5s ease-in-out",
            width: `${numberOfSlides * 980}px`,
          }}
        >
          <div className="w-[980px]">
            <SlideComponent
              url="/slide-3.png"
              def={`Кафельная плиткав ванной комнате в скандинавском стиле`}
            />
          </div>
          <div className="w-[980px]">
            <SlideComponent
              url="/slide-1.png"
              def="Кафельная плиткав ванной комнате в скандинавском стиле"
            />
          </div>
          <div className="w-[980px]">
            <SlideComponent
              url="/slide-2.png"
              def="Кафельная плиткав ванной комнате в скандинавском стиле"
            />
          </div>
        </div>
      </div>
      <div className="absolute z-20 w-[850px] h-[400px]">
        <div className="absolute flex bottom-0 right-0 gap-8">
          <Image
            className="cursor-pointer"
            src="/arrow-left.svg"
            width={20}
            height={42}
            alt=""
            onClick={handlePrevSlide}
          />
          <Image
            className="cursor-pointer"
            src="/arrow-right.svg"
            width={20}
            height={42}
            alt=""
            onClick={handleNextSlide}
          />
        </div>
      </div>
    </div>
  );
};
export default SlideShow;
