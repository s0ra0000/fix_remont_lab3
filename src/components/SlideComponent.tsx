import { FC } from "react";
import Image from "next/image";
interface SlideComponentProps {
  url: string;
  def: string;
}
const SlideComponent: FC<SlideComponentProps> = ({ url, def }) => {
  return (
    <div className="relative w-[980px] flex flex-nowrap items-start h-auto">
      <div className="relative flex-none mr-[18px] w-[750px] h-auto">
        <Image src={url} width={750} height={500} alt="" />
      </div>
      <div className="relative pr-[70px]">
        <p className="relative text-[13px] leading-[20px] text-silver">{def}</p>
      </div>
    </div>
  );
};

export default SlideComponent;
