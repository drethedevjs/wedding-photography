'use client'
import { useState } from 'react';
import submitFormAction from '../actions/SubmitFormAction';

export default function Contact() {
  const initialState: Record<string,string> = {
    brideName: '',
    groomName: '',
    email: '',
    weddingDate: '',
    phone: '',
    venue: '',
    message: ''
  }

  const [fieldErrs, setFieldErrs] = useState<Record<string,string>>(initialState);
  const handleFormSubmit = async (formData: FormData) => {
    const { isSuccess, message, fieldErrors } = await submitFormAction(formData);

    if (!isSuccess)
      setFieldErrs(fieldErrors);
    else
      console.log(message);
  }

  return (
    <main>
      <div className="container mx-auto md:px-52 px-10 text-center">
        <h1 className='text-4xl my-10 uppercase'>Contact</h1>
        <form action={handleFormSubmit}>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-5 mb-10'>
            <div>
              <label htmlFor='brideName'>Bride Name</label>
              <input type='text' name='brideName' id='brideName' placeholder='First and Last' />
              <small className='text-red-500'>{fieldErrs.brideName}</small>
            </div>
            <div>
              <label htmlFor='groomName'>Groom Name</label>
              <input type='text' name='groomName' id='groomName' placeholder='First and Last' />
              <small className='text-red-500'>{fieldErrs.groomName}</small>
            </div>
             <div>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' id='email' />
              <small className='text-red-500'>{fieldErrs.email}</small>
            </div>
            <div>
              <label htmlFor='weddingDate'>Wedding Date</label>
              <input type='date' name='weddingDate' id='weddingDate' />
              <small className='text-red-500'>{fieldErrs.weddingDate}</small>
            </div>
            <div>
              <label htmlFor='phone'>Phone</label>
              <input type='tel' name='phone' id='phone' />
              <small className='text-red-500'>{fieldErrs.phone}</small>
            </div>
            <div>
              <label htmlFor='venue'>Venue</label>
              <input type='text' name='venue' id='venue' />
              <small className='text-red-500'>{fieldErrs.venue}</small>
            </div>
            <div className='md:col-span-2'>
              <label htmlFor='message'>Message</label>
              <textarea name='message' id='message' rows={6}/>
              <small className='text-red-500'>{fieldErrs.message}</small>
            </div>
          </div>
          <button>Send</button>
        </form>
      </div>
    </main>
  )
}
