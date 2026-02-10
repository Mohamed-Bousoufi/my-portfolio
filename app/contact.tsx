"use client"

import animationData from "@/public/space.json"
import Lottie from "lottie-react";
import { z} from "zod"
import { sendEmail } from "./actions/MailSender";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";

const user = z.object({
    name : z.string().min(3, "Name must be at least 3 characters").max(50, "Name must be less than 50 characters"),
    email : z.email("Invalid email address"),
    message : z.string().min(8, "Message must be at least 8 characters").max(100, "Message must be less than 100 characters")
})





function Contact(){

    const [SuccessSubmit, setSuccessSubmit] = useState(false);
    const [ErrorSubmit, setErrorSubmit] = useState(false);

    const {
    register,        // Connects inputs to form
    handleSubmit,    // Wraps your submit function
    reset,           // Clears form fields
    formState: { errors, isSubmitting }  // Validation errors & loading state
  } = useForm({
    resolver: zodResolver(user)  // This connects Zod!
  });

  const onSubmit = async  (data : any) => {
    const result = await sendEmail(data);

    if (result.success) {
      setSuccessSubmit(true);
      
    } else {
      setErrorSubmit(true);
    }

    reset();
  }

    return (
        <div className="flex flex-col md:flex-row-reverse items-center justify-around gap-16 w-full ">
        <div className="w-md">
            <form className="flex flex-col gap-5 p-4 rounded-md border-muted-foreground border-2 p-6" onSubmit={handleSubmit(onSubmit)}>
                    {SuccessSubmit && <p className="text-green-500">Message sent successfully!</p>}
                    {ErrorSubmit && <p className="text-destructive">Failed to send message. Please try again.</p>}
                <label className="self-start">Name</label>
                <input 
                    {...register('name')}
                    type="text" placeholder="Your name" className=" border-2 border-primary rounded-md px-4 py-2 bg-transparent"/>
                    {errors.name && <p className="text-destructive">{errors.name.message}</p>}
                <label className="self-start">Email</label>
                <input 
                    {...register('email')}
                    type="email" placeholder="Your email" className=" border-2 border-primary rounded-md px-4 py-2 bg-transparent"/>
                    {errors.email && <p className="text-destructive">{errors.email.message}</p>}
                <label className="self-start">Message</label>
                <textarea 
                    {...register('message')}
                    placeholder="Your message" className=" border-2 border-primary rounded-md px-4 py-2 bg-transparent "></textarea>
                    {errors.message && <p className="text-destructive">{errors.message.message}</p>}
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
