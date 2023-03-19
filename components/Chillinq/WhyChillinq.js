import Image from 'next/image'
import React from 'react'
import imgUrl from '../../public/7.png'
const WhyChillinq = () => {
    return (
        <>
            <div className='flex items-center justify-center'>
                <Image src={'/2.png'} width='1200' height='300' />
                {/* <p className='font-bold text-4xl text-center '>Why <span className='text-[#DB1F48]'>Chillinq?</span></p> */}
            </div>
            <div className='px-10 py-10 sm:px-20 text-2xl font-bold text-white text-center sm:text-4xl space-y-2' style={{ backgroundImage: `url('/7.png')`, backgroundSize: "cover", backgroundPosition: "contain", backgroundRepeat: "no-repeat", width: "100%", height: '200px' }}>
                <p >Solving problems plaguing the Dating and Networking space</p>
                <p className='text-2xl tracking-[7px]'>#serialchiller</p>
            </div>
            <div className='flex flex-col items-center space-y-12 my-5 mb-20'>
                <p className='font-bold text-2xl sm:text-4xl text-center '>Are you ready to <span className='text-[#DB1F48]'>chill?</span></p>
                <div className='border border-gray-200 rounded-lg bg-gradient-to-r from-[#ECAEC8] via-[#e68ebc] to-[#b89ff7] hover:from-[#b8adf2] hover:to-[#dd8dad] '>
                    <input className='p-1 w-[50%] tracking-[3px] outline-none  bg-[#d9d9d9] rounded-lg' placeholder='Email' />
                    <button className='px-3 text-white font-bold tracking-[5px] '> |  Notify me!</button>
                </div>
            </div>
        </>
    )
}

export default WhyChillinq