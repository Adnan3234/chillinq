import Image from 'next/image'
import React, { useState } from 'react'
import imgUrl from '../../public/7.png'
const WhyChillinq = () => {
    const [email, setEmail] = useState('')
    const submitEmail = () => {
        if (email.length > 0) {
            alert('Email Send Successfully')
            return
        }
        alert('Email Field is Empty')
    }
    return (
        <>
            <div className='flex items-center justify-center my-10 sm:my-3'>
                <Image className='hidden sm:block' src={'/2.png'} width='1200' height='300' alt='' />
                <Image className='sm:hidden' src={'/mobilechillinq.png'} width='230' height='300' alt='' />
                {/* <p className='font-bold text-4xl text-center '>Why <span className='text-[#DB1F48]'>Chillinq?</span></p> */}
            </div>
            <div style={{ backgroundImage: `url('/7.png')`, backgroundSize: "cover", backgroundPosition: "contain", backgroundRepeat: "no-repeat", width: "100%", height: '260px' }} className='px-8 py-10 sm:flex sm:flex-col sm:items-center sm:justify-center text-2xl font-bold text-white text-center sm:text-4xl space-y-6' >
                <p >Solving problems plaguing the Dating and Networking space</p>
                <p className='text-[18px] sm:text-2xl tracking-[7px]'>#serialchiller</p>
            </div>
            <div className='flex flex-col items-center space-y-10 my-5 mb-20'>
                <p className='hidden sm:block font-bold text-5xl text-center '>Are you ready to <span className='text-[#DB1F48]'>chill?</span> </p>
                <div>
                    <p className=' sm:hidden font-bold text-4xl text-center '>Are you ready to </p>
                    <p className='p-0 m-0 sm:hidden font-bold text-3xl text-center text-[#DB1F48]'>chill?</p>
                </div>
                <div className='sm:w-[60%] border border-gray-200 rounded-lg bg-gradient-to-r from-[#ECAEC8] via-[#e68ebc] to-[#b89ff7] hover:from-[#b8adf2] hover:to-[#dd8dad] '>
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} className='text-[12px] p-1 w-[40%] sm:w-[50%] tracking-[3px]  outline-none  bg-[#d9d9d9] rounded-lg' type='email' id="email" name="email" placeholder='Email' />
                    <button onClick={submitEmail} className='px-3 text-white font-bold tracking-[5px]  '> |  Notify me!</button>
                </div>
            </div>
        </>
    )
}

export default WhyChillinq