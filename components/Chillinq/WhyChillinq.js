import Image from 'next/image'
import React, { useState } from 'react'
import imgUrl from '../../public/7.png'
const WhyChillinq = () => {
    const [email, setEmail] = useState('')
    const [loader, setLoader] = useState(false)
    const submitEmail = () => {
        setLoader(true)
        if (email.length > 0) {
            setEmail('')
            setTimeout(() => {
                setLoader(false)
                alert('Email Send Successfully')
                return
            }, 2000)
        } else {
            alert('Email Field is Empty')
            setLoader(false)
        }

    }
    return (
        <>
            <div className='flex items-center justify-center my-10 sm:my-3'>
                <Image className='hidden sm:block' src={'/2.png'} width='1200' height='300' alt='' />
                <Image className='sm:hidden' src={'/mobilechillinq.png'} width='230' height='300' alt='' />
                {/* <p className='font-bold text-4xl text-center '>Why <span className='text-[#DB1F48]'>Chillinq?</span></p> */}
            </div>
            <div style={{ backgroundImage: `url('/7.png')`, backgroundSize: "cover", backgroundPosition: "contain", backgroundRepeat: "no-repeat", width: "100%", height: '260px' }} className='px-8 py-10 sm:flex sm:flex-col sm:items-center sm:justify-center text-2xl md:text-4xl 2xl:text-6xl font-bold text-white text-center  space-y-6' >
                <p >Solving problems plaguing the Dating and Networking space</p>
                <p className='text-[18px] xl:text-2xl tracking-[7px]'>#serialchiller</p>
            </div>
            <div className='flex flex-col items-center space-y-10 my-5 mb-20'>
                <p className='hidden sm:block font-bold text-5xl text-center 2xl:text-7xl'>Are you ready to <span className='text-[#DB1F48]'>chill?</span> </p>
                <div>
                    <p className=' sm:hidden font-bold text-4xl text-center '>Are you ready to </p>
                    <p className='p-0 m-0 sm:hidden font-bold text-3xl text-center text-[#DB1F48]'>chill?</p>
                </div>
                {/* <button type="button" class="bg-indigo-500 ..." disabled>
                    <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                    </svg>
                    Processing...
                </button> */}


                <div className='flex items-center sm:w-[500px] border border-gray-200 rounded-lg bg-gradient-to-r from-[#ECAEC8] via-[#e68ebc] to-[#b89ff7] hover:from-[#b8adf2] hover:to-[#dd8dad] '>
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} className='text-[12px] p-1 w-[40%] sm:w-[300px] tracking-[3px]  outline-none  bg-[#d9d9d9] rounded-lg' type='email' id="email" name="email" placeholder='Email' />
                    <button onClick={submitEmail} className='sm:w-[190px]  px-2 text-white font-bold tracking-[5px] flex '>
                        {loader && <div class="hidden sm:flex sm:items-center sm:justify-center mx-3">
                            <div
                                class="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] text-[#db1f48] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                role="status">
                                <span
                                    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                >Loading...</span
                                >
                            </div>
                        </div>}  |  Notify me!</button>

                </div>
            </div>
        </>
    )
}

export default WhyChillinq