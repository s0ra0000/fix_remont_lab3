import localFont from "next/font/local";
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
  return (
    <div className="flex w-full h-auto flex-col justify-center items-center mt-[20px]">
      <div className="w-[980px] h-auto ">
        <div>
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
        </div>
        <div className="relative h-[750px] py-[50px] w-screen">
          <div className="absolute truncate flex flex-row z-10 w-full visible left -0">
            <SlideComponent
              url="/slide-1.png"
              def={`Кафельная плиткав ванной комнате в скандинавском стиле`}
            />
            {/* <SlideComponent
              url="/slide-2.png"
              def="Кафельная плиткав ванной комнате в скандинавском стиле"
            />
            <SlideComponent
              url="/slide-3.png"
              def="Кафельная плиткав ванной комнате в скандинавском стиле"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SlideShow;