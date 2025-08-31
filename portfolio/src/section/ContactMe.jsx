import React from 'react'
import { ABOUT_ME } from '../utils/data'
import ContactInfoCard from '../components/ContactInfoCard'
import { IoMail } from "react-icons/io5"
import { IoPhonePortraitOutline } from "react-icons/io5"
import { MdOutlineWeb } from "react-icons/md"
import { FaLinkedin, FaInstagram } from 'react-icons/fa'

const ContactMe = () => {
  return (
    <section id='contact' className='mx-auto max-w-7xl'>
      <div className='container mx-auto p-10'>
        <div className='w-full lg:w-[60vw] mx-auto'>
          <h4 className='sec-title'>Contact Me</h4>
          <p className='text-sm text-center mt-4 leading-6'>
            A Developer with Hands-On-Experience
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-16'>
          <div>
            <ContactInfoCard icon={<IoMail />} text={ABOUT_ME.email} />
            <ContactInfoCard icon={<IoPhonePortraitOutline />} text={ABOUT_ME.phone} />
            <ContactInfoCard icon={<FaLinkedin />} text={ABOUT_ME.linkedin} />
            <ContactInfoCard icon={<FaInstagram />} text={ABOUT_ME.instagram} />
          </div>
          <form className='flex flex-col'>
            <input 
                type='text'
                name='fullName'
                placeholder='Full Name'
                id=''
                className='input-box'
                autoComplete='off'
            />
            <input 
                type='text'
                name='email'
                placeholder='Email'
                id=''
                className='input-box'
                autoComplete='off'
            />
            <button className='action-btn btn-scale-anim'>SUBMIT</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactMe