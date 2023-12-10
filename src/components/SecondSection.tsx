import localFont from "next/font/local";
const myFontMedium = localFont({
  src: "../../public/fonts/MullerMedium.woff2",
  display: "swap",
});
const myFontRegular = localFont({
  src: "../../public/fonts/MullerRegular.woff2",
  display: "swap",
});
const SecondSection = () => {
  return (
    <section
      id="main"
      className="h-auto w-full flex justify-center items-center py-[166px]"
    >
      <div className="w-[980px] h-auto flex flex-wrap gap-[40px]  justify-center items-center text-black">
        <header className={`w-full  ${myFontMedium.className}`}>
          <h2 className="text-[40px] leading-[50px]">FIX Ремонт - это легко</h2>
          <p className="text-emerald text-[16px] leading-[24px] tracking-wide">
            ГОТОВЫЕ ПРОЕКТЫ, ПРОВЕРЕННЫЕ МАТЕРИАЛЫ И УМЕЛЫЕ РУКИ
          </p>
        </header>
        <div className="grid grid-cols-2  gap-[80px]">
          <div className=" py-[33px] border-t-4 border-emerald-2">
            <h3
              className={`${myFontMedium.className} text-[24px] leading-[32px] `}
            >
              Опытная команда
            </h3>
            <p
              className={`${myFontRegular.className} text-silver text-[16px] leading-[24px] mt-[12px]`}
            >
              Команда проектировщиков и строителей со стажем работы более 6 лет
            </p>
          </div>
          <div className=" py-[33px] border-t-4 border-emerald-2">
            <h3
              className={`${myFontMedium.className} text-[24px] leading-[32px] `}
            >
              Типовые дизайн-проекты
            </h3>
            <p
              className={`${myFontRegular.className} text-silver text-[16px] leading-[24px] mt-[12px]`}
            >
              Три стиля чистовой отделки «под ключ» и спектр дополнительных
              услуг
            </p>
          </div>
          <div className=" py-[33px] border-t-4 border-emerald-2">
            <h3
              className={`${myFontMedium.className} text-[24px] leading-[32px] `}
            >
              Фиксированная смета
            </h3>
            <p
              className={`${myFontRegular.className} text-silver text-[16px] leading-[24px] mt-[12px]`}
            >
              Никаких дополнительных расходов во время ремонта. Расчет стоимости
              при заключении договора
            </p>
          </div>
          <div className="flex flex-col justify-center items-center py-[33px] border-4 border-emerald-2">
            <p
              className={`${myFontMedium.className}  text-[24px] leading-[32px] mt-[12px]`}
            >
              Срок работ
            </p>
            <h3
              className={`${myFontMedium.className} text-[64px] leading-[60px] `}
            >
              3 месяца
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
