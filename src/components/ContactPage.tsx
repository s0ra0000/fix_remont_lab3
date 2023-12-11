"use client";
import Image from "next/image";
import localFont from "next/font/local";
import { useState } from "react";
import ContactInputForm from "./ContactInputForm";
import Submitted from "./Submitted";
import { Link } from "react-scroll";
const myFontMedium = localFont({
  src: "../../public/fonts/MullerMedium.woff2",
  display: "swap",
});
const myFontRegular = localFont({
  src: "../../public/fonts/MullerRegular.woff2",
  display: "swap",
});
const ContactPage = () => {
  const [isSUbmitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="w-full flex justify-center items-center py-[140px]"
    >
      <div className="relative w-[980px] h-auto flex flex-col justify-center items-center border-4 border-emerald-2 py-[60px]">
        <h1
          className={`absolute px-[24px] py-[10px] bg-white text-[40px] -top-10 ${myFontMedium.className}`}
        >
          Узнайте о запуске сервиса первым
        </h1>
        {isSUbmitted ? (
          <Submitted />
        ) : (
          <div className="flex flex-col justify-center items-center ">
            <header className="flex justify-center items-center mb-[30px] ">
              <Image src="/door.png" width={46} height={69} alt="" />
              <h2 className="ml-[17px]">
                ПЕРВЫМ 10 КЛИЕНТАМ СТАЛЬНАЯ <br />
                ВХОДНАЯ ДВЕРЬ В ПОДАРОК
              </h2>
            </header>
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="flex flex-col gap-[30px] mt-[30px] justify-center items-center"
            >
              <ContactInputForm
                name={"Имя и фамилия*"}
                required={true}
                id="name"
              />
              <ContactInputForm
                name={"E-mail адресс*"}
                required={true}
                id="email"
              />
              <ContactInputForm name={"Телефон"} required={false} id="phone" />
              <button
                type="submit"
                className="w-auto hover:bg-secondary text-white bg-primary text-[16px] px-[74px] py-[16px] drop-shadow-primary rounded-full mt-[18px]"
              >
                Подписаться
              </button>
            </form>
            <p className="text-[13px] text-silver mt-[22px]">
              * Обязательные для заполнения поля
            </p>
            <Link className="cursor-pointer" to="">
              <p className="text-[13px] text-primary">
                Политика конфиденциальности
              </p>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
export default ContactPage;
