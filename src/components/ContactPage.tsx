import Image from "next/image";
import localFont from "next/font/local";

const myFontMedium = localFont({
  src: "../../public/fonts/MullerMedium.woff2",
  display: "swap",
});
const myFontRegular = localFont({
  src: "../../public/fonts/MullerRegular.woff2",
  display: "swap",
});
const ContactPage = () => {
  return (
    <div className="w-full flex justify-center items-center py-80">
      <div className="relative w-[980px] h-auto flex flex-col justify-center items-center border-4 border-emerald-2 py-[60px]">
        <h1
          className={`absolute px-[24px] py-[10px] bg-white text-[40px] -top-10 ${myFontMedium.className}`}
        >
          Узнайте о запуске сервиса первым
        </h1>
        <div className="flex flex-col justify-center items-center ">
          <div className="flex justify-center items-center mb-[30px] ">
            <Image src="/door.png" width={46} height={69} alt="" />
            <h3 className="ml-[17px]">
              ПЕРВЫМ 10 КЛИЕНТАМ СТАЛЬНАЯ <br />
              ВХОДНАЯ ДВЕРЬ В ПОДАРОК
            </h3>
          </div>
          <form className="flex flex-col gap-[30px] mt-[30px] justify-center items-center">
            <input
              type="text"
              className="w-[500px] text-[18px] py-[18px] px-[24px] text-silver rounded border-silver-2 border"
              name="name"
              placeholder="Имя и фамилия*"
              required
            />
            <input
              type="text"
              className="w-[500px] text-[18px] py-[18px] px-[24px] text-silver rounded border-silver-2 border"
              name="email"
              placeholder="E-mail адрес*"
              required
            />
            <input
              type="text"
              className="w-[500px] text-[18px] py-[18px] px-[24px] text-silver rounded border-silver-2 border"
              name="phone"
              placeholder="Телефон"
            />
            <button
              type="submit"
              className="w-auto text-white bg-primary text-[16px] px-[74px] py-[16px] rounded-full mt-[18px]"
            >
              Подписаться
            </button>
          </form>
          <p className="text-[13px] text-silver mt-[22px]">
            * Обязательные для заполнения поля
          </p>
          <p className="text-[13px] text-primary">
            Политика конфиденциальности
          </p>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
