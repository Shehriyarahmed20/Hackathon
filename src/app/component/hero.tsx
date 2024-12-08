
import Image from "next/image";
import chairpic from "@/app/assets/Right Image.jpg"
export default function Hero() {
    return (
      <>
       <div className="relative">
       <div className="bg-[#2A254B] text-white w-[390px] md:w-[1280px] h-[502px] md:h-[584px] absolute md:top-[60px] md:left-[80px] grid">
          <div className="absolute md:top-[69px] md:left-[60px] grid md:gap-4">

            <h2 className="text-[32px] md:w-[513px] md:h-[187px]">
              The furniture brand for the future, with timeless designs
            </h2>
  
         
            <button className="hidden md:block md:py-4 md:px-8 md:bg-[#F9F9F926] md:self-end md:justify-self-start">
              View Collection
            </button>
          </div>
        <div className="grid w-[342px] md:w-[602px] h-[223px] absolute top-[255px] md:top-[443px] left-6 md:left-[60px] gap-8">
            <p>
            A new era in eco friendly furniture with Avelon, the French luxury retail brand
with nice fonts, tasteful colors and a beautiful way to display things digitally 
using modern web technologies.
            </p>
            <button className="bg-[#F9F9F926] md:hidden">
                View Collection
            </button>
        </div>
       <span className="hidden md:block md:w-[520px] md:h-[584px] absolute md:left-[760px]"> <Image src={chairpic} alt=""/></span>
        </div>
       </div>
      </>
    );
  }
  