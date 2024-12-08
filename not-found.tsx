import Link from "next/link";

export default function Notfound (){
    return (
        <div className="text-center pt-60 font-bold text-4xl text-red-600 bg-green-400 h-screen">
            <h1> 404 </h1>
            <h1>Not Found</h1>
            <Link className="hover:text-white font-bold flex justify-between ml-80 pl-60 pt-5 text-4xl" href="/"> Back to Home</Link>
        </div>
    )
}