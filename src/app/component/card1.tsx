import Image from "next/image";
interface card1 {
    heading : string;
    paragraph : string;
    image : any;

}

 const Card = (props : card1)=> {
    const { heading , paragraph , image} = props
    return (
   <>
        <div className="">
        <Image src={image} alt={heading} />
        </div>
        <div>
           <h2>{heading}</h2>
        </div>
        <div>
        <p>{paragraph}</p>
        </div>
   </>
    )
}
export default Card