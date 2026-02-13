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
    email : z.string().email("Invalid email address"),
    message : z.string().min(8, "Message must be at least 8 characters").max(100, "Message must be less than 100 characters")
})





function Contact(){

    const [SuccessSubmit, setSuccessSubmit] = useState(false);
    const [ErrorSubmit, setErrorSubmit] = useState(false);

    const {
    register,       
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
        <div className="flex flex-col md:flex-row-reverse items-center justify-around gap-4 sm:gap-8 md:gap-16 w-full p-4 sm:p-8 md:p-16 h-[80vh]">
        <div className="w-full md:max-w-fit max-h-fit">
            <form className="flex flex-col gap-3 sm:gap-5 rounded-md border-muted-foreground border-2 p-3 sm:p-6" onSubmit={handleSubmit(onSubmit)}>
                    {SuccessSubmit && <p className="text-green-500 text-sm">Message sent successfully!</p>}
                    {ErrorSubmit && <p className="text-destructive text-sm">Failed to send message. Please try again.</p>}
                <label className="self-start text-sm sm:text-base">Name</label>
                <input
                    {...register('name')}
                    type="text" placeholder="Your name" className="border-2 border-primary rounded-md px-3 sm:px-4 py-1.5 sm:py-2 bg-transparent text-sm sm:text-base w-full"/>
                    {errors.name && <p className="text-destructive text-xs sm:text-sm">{errors.name.message}</p>}
                <label className="self-start text-sm sm:text-base">Email</label>
                <input
                    {...register('email')}
                    type="email" placeholder="Your email" className="border-2 border-primary rounded-md px-3 sm:px-4 py-1.5 sm:py-2 bg-transparent text-sm sm:text-base w-full"/>
                    {errors.email && <p className="text-destructive text-xs sm:text-sm">{errors.email.message}</p>}
                <label className="self-start text-sm sm:text-base">Message</label>
                <textarea
                    {...register('message')}
                    placeholder="Your message" className="border-2 border-primary rounded-md px-3 sm:px-4 py-1.5 sm:py-2 bg-transparent text-sm sm:text-base w-full"></textarea>
                    {errors.message && <p className="text-destructive text-xs sm:text-sm">{errors.message.message}</p>}
                <button type="submit" className="border-2 border-primary rounded-md p-2 text-sm sm:text-base">Send</button>
            </form>
        </div>
            <div className="relative flex border-l-0 md:border-l-2 border-muted-foreground">
                <h1 className="absolute top-2 sm:top-4 md:top-10 left-3 md:-right-40 text-3xl sm:text-2xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-destructive via-primary to-secondary -z-20">Connect With Me 👋</h1>
                <Lottie animationData={animationData} loop={true} className="self-start w-60 h-60 sm:w-60 sm:h-60 md:w-1xl md:h-1xl lg:w-1xl lg:h-1xl"/>
            </div>
        </div>
    );

}

export default Contact
