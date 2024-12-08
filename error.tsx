"use client";
import Link from "next/link";
export default function Errorpage (){
    return(
        <div className="bg-red-800 h-screen">
            <h1 className="text-center pt-60 text-5xl font-bold bg-red-800 font">Oops! Something went wrong</h1>
            <Link className="hover:text-white font-bold flex justify-between ml-80 pl-60 pt-5 text-4xl" href="/"> Back to Home</Link>
        </div>
    )

}