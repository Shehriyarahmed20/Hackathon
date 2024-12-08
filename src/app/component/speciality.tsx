import Image from "next/image"
import Card from "@/app/component/card1"
import delivery from "@/app/assets/Delivery.png"
export default function Speciality (){
    return(
        <>
        <div className="w-[390px] md:w-full h-[757px] md:h-[355px] grid md:flex">
<p>What makes our brand different</p>
 </div>
<div>
    <Card 
    image={delivery}
    heading="Next day as standard"
    paragraph="Handmade crafted goods made with real passion and craftmanship"


    
    />

</div>
        </>
    )
}