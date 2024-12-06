import Form from 'next/form';
import { date, object, ObjectSchema, string } from "yup";

export default function Contact() {
  interface CoupleFormData {
    brideName: string;
    groomName: string;
    email: string;
    weddingDate: Date;
    phone: string;
    venue: string;
    message: string;
  }
  
  let schema: ObjectSchema<CoupleFormData> = object({
    brideName: string().required(),
    groomName: string().required(),
    email: string().required(),
    weddingDate: date().required(),
    phone: string().required(),
    venue: string().required(),
    message: string().required(),
  })

  const handleFormSubmit = async () => {
    "use server"
  }

  return (
    <main>
      <div className="container mx-auto px-52 text-center">
        <h1 className='text-4xl my-10 uppercase'>Contact</h1>
        <Form action={handleFormSubmit}>
          <div className='grid grid-cols-2 gap-5 mb-10'>
            <div>
              <label htmlFor='bride-name'>Bride Name</label>
              <input type='text' name='bride-name' id='bride-name' placeholder='First and Last' />
            </div>
            <div>
              <label htmlFor='groom-name'>Groom Name</label>
              <input type='text' name='groom-name' id='groom-name' placeholder='First and Last' />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' id='email' />
            </div>
            <div>
              <label htmlFor='wedding-date'>Wedding Date</label>
              <input type='date' name='wedding-date' id='wedding-date' />
            </div>
            <div>
              <label htmlFor='phone'>Phone</label>
              <input type='tel' name='phone' id='phone' />
            </div>
            <div>
              <label htmlFor='venue'>Venue</label>
              <input type='text' name='venue' id='venue' />
            </div>
            <div className='col-span-2'>
              <label htmlFor='message'>Message</label>
              <textarea name='message' id='message' rows={6}/>
            </div>
          </div>
          <button>Send</button>
        </Form>
      </div>
    </main>
  )
}
