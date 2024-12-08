import Image from "next/image";
import search from "@/app//assets/Search.jpg";
import manu from "@/app/assets/Menu.jpg";
import cart from "@/app/assets/Shopping--cart.jpg";
import profile from "@/app/assets/User--avatar.jpg";

export default function Navbar() {
  return (
    <>
      <div className="flex w-[390px] md:w-full h-[69px] md:h-[132px] relative">
        <h1 className="absolute text-2xl top-5 left-6 md:top-[20px] md:left-[687px]">
          Avion
        </h1>
        <div className="flex absolute top-[26px] left-[318px] gap-5 md:top-[26px] md:left-[28px]">
          <span className="">
            <Image src={search} alt="" />
          </span>
          <span className="md:hidden">
            {" "}
            <Image src={manu} alt="" />
          </span>
        </div>
        <div className="hidden md:flex absolute md:top-[26px] md:left-[1364px] gap-2">
          <span>
            <Image src={cart} alt="Cart" />
          </span>
          <span>
            <Image src={profile} alt="Profile" />
          </span>
        </div>
        <div className="hidden md:flex w-[675px] h-[22px] absolute top-[90px] left-[382px]">
          <ul className="flex justify-between gap-11 items-center ">
            <li>Plant pots</li>
            <li>Ceramics</li>
            <li>Tables</li>
            <li>Chairs</li>
            <li>Crockery</li>
            <li>Tableware</li>
            <li>Cutlery</li>
          </ul>
        </div>
      </div>

    </>
  );
}
