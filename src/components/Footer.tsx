import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

const myFontMedium = localFont({
  src: "../../public/fonts/MullerMedium.woff2",
  display: "swap",
});
const myFontRegular = localFont({
  src: "../../public/fonts/MullerRegular.woff2",
  display: "swap",
});
const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center flex-col pt-[72px] bg-footer">
      <div className="flex gap-[30px]">
        <div className="bg-primary hover:bg-secondary hover:drop-shadow-primary cursor-pointer">
          <FaFacebookF className="w-[50px]  block my-[15px] text-white" />
        </div>
        <div className="bg-primary hover:bg-secondary hover:drop-shadow-primary cursor-pointer">
          <SlSocialVkontakte className="w-[50px]  block my-[15px] text-white fill-white" />
        </div>
        <div className="bg-primary hover:bg-secondary hover:drop-shadow-primary cursor-pointer">
          <ImInstagram className="w-[50px]  block my-[15px] text-white" />
        </div>
      </div>
      <div
        className={`mt-[32px] text-center ${myFontRegular.className} text-[21px] leading-[26px]`}
      >
        <h3>Следите за нашим развитием</h3>
        <p className="text-silver text-[16px] leading-[24px] mt-[5px] ">
          Подпишитесь на наши аккаунты в соц. сетях, знакомьтесь <br /> с нашими
          проектами и тем, что нас вдохновляет
        </p>
      </div>
      <div className="flex gap-[120px] mt-[76px] items-center">
        <div className="flex items-center">
          <Image
            src="/shape.png"
            width={24}
            height={24}
            alt=""
            className=" mr-[8px]"
          />
          <p className="text-[21px]">+7 (812) 903-54-45</p>
        </div>
        <div className="text-center">
          <h3 className="text-[21px] leading-[30px]">Ул. Галерная, д 55,</h3>
          <p className="text-silver text-[16px] leading-[24px]">
            Санкт-Петербург
          </p>
        </div>
        <div className="flex items-center">
          <Image
            src="/mail.png"
            width={24}
            height={24}
            alt=""
            className="mr-[8px]"
          />
          <Link href="mailto:9035445@gmail.com">
            <p className="text-[21px] hover:text-primary cursor-pointer underline underline-offset-8 decoration-primary">
              9035445@gmail.com
            </p>
          </Link>
        </div>
      </div>
      <div className="mt-[72px] w-[1800px] text-center text-silver py-[32px] border-t-[1px] border-silver-2">
        <p className="text-[16px] leading-[24px]">© FIX Ремонт, 2016</p>
      </div>
    </footer>
  );
};
export default Footer;
