"use client"

import animationData from "@/public/space.json"
import Lottie from "lottie-react";


function Contact(){

    return (
        <div className="flex flex-col md:flex-row-reverse items-center justify-around gap-16 w-full ">
        <div className="w-md">
            <form className="flex flex-col gap-5 p-4 rounded-md border-muted-foreground border-2 p-6">
                <label className="self-start">Name</label>
                <input type="text" placeholder="Your name" className=" border-2 border-primary rounded-md px-4 py-2 bg-transparent"/>
                <label className="self-start">Email</label>
                <input type="email" placeholder="Your email" className=" border-2 border-primary rounded-md px-4 py-2 bg-transparent"/>
                <label className="self-start">Message</label>
                <textarea placeholder="Your message" className=" border-2 border-primary rounded-md px-4 py-2 bg-transparent "></textarea>
                <button type="submit" className="border-2 border-primary rounded-md p-2">Send</button>
            </form>
        </div>
            <div className="relative flex border-l-2 border-muted-foreground">
                <h1 className="absolute md:top-10 left-3 md:-right-40 inset-0 text-2xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-destructive via-primary to-secondary  -z-20">Connect With Me 👋</h1>
                <Lottie animationData={animationData} loop={true}  className=" inset-0 self-start w-40 h-40 sm:w-96 sm:h-96 md:w-1xl md:h-1xl lg:w-1xl lg:h-1xl  "/>
            </div>
        </div>
    );

}

export default Contact