import localFont from "next/font/local";
import Image from "next/image";
const myFontRegular = localFont({
  src: "../../public/fonts/MullerRegular.woff2",
  display: "swap",
});
const Submitted = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-[40px] py-[160px] px-[350px]">
      <Image src="/submitted.svg" height={128} width={200} alt="" />
      <p className={`${myFontRegular.className} text-[16px] text-center`}>
        СПАСИБО! МЫ БУДЕМ ДЕРЖАТЬ <br /> ВАС В КУРСЕ ОБНОВЛЕНИЙ
      </p>
    </div>
  );
};
export default Submitted;
