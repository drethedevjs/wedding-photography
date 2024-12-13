'use client'
import { CoupleFormData } from '@/interface/CoupleFormData';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import delay from 'delay';
import "dotenv/config";
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { object, string } from 'yup';
import PopularGalleries from '../components/PopularGalleries/PopularGalleries';
import styles from './Contact.module.css';

const schema = object({
  brideName: string().required("Bride Name is required"),
  groomName: string().required("Groom Name is required"),
  email: string().email("Invalid email").required("Email is required"),
  weddingDate: string().required("Wedding Date is required"),
  phone: string().required("Phone is required"),
  venue: string().required("Venue is required"),
  message: string().min(15, "Message isn't long enough").required("Message is required"),
});

export default function Contact() {
  const [hasSent, setHasSent] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CoupleFormData>({ resolver: yupResolver<CoupleFormData>(schema) })

  const handleFormSubmit: SubmitHandler<CoupleFormData> = async (formData) => {
    setLoading(true);
    await delay(5000);

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_MAILER_URL}/api/email/send-covenant`, formData);
      setHasSent(true);
    } catch (err: unknown) {
      if (axios.isAxiosError(err))
        console.error(err.message);

      console.log("An unexpected error has occurred:", err)
    }

    setLoading(false);
  }

  return (
    <main>
      <div className="container mx-auto lg:px-32 px-10 text-center">
        <h1 className="pageH1">Contact</h1>
        <div className={hasSent ? "hidden" : ""}>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5 mb-10'>
              <div>
                <label htmlFor='brideName'>Bride Name</label>
                <input type='text' id='brideName' placeholder='First and Last' {...register("brideName")} />
                <small className='text-red-500'>{errors.brideName?.message}</small>
              </div>
              <div>
                <label htmlFor='groomName'>Groom Name</label>
                <input type='text' id='groomName' placeholder='First and Last' {...register("groomName")} />
                <small className='text-red-500'>{errors.groomName?.message}</small>
              </div>
              <div>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' {...register("email")} />
                <small className='text-red-500'>{errors.email?.message}</small>
              </div>
              <div>
                <label htmlFor='weddingDate'>Wedding Date</label>
                <input type='date' id='weddingDate' {...register("weddingDate")} />
                <small className='text-red-500'>{errors.weddingDate?.message}</small>
              </div>
              <div>
                <label htmlFor='phone'>Phone</label>
                <input type='tel' id='phone' {...register("phone")} />
                <small className='text-red-500'>{errors.phone?.message}</small>
              </div>
              <div>
                <label htmlFor='venue'>Venue</label>
                <input type='text' id='venue' {...register("venue")} />
                <small className='text-red-500'>{errors.venue?.message}</small>
              </div>
              <div className='md:col-span-2'>
                <label htmlFor='message'>Message</label>
                <textarea id='message' rows={6} {...register("message")} />
                <small className='text-red-500'>{errors.message?.message}</small>
              </div>
            </div>
            <button className='disabled:opacity-30 disabled:cursor-progress' disabled={loading}>Send</button>
          </form>
        </div>
        <div className={`${styles.sentMsg} ${hasSent ? "" : "hidden"}`}>
          <h2 className={`${styles.h2}`}>Sent</h2>
          <p className={`${styles.p}`}>Thank you for your message. I will be in touch very soon!</p>

          <PopularGalleries />
        </div>
      </div>
    </main>
  )
}
