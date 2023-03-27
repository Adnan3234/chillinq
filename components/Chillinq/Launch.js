import Image from 'next/image'
import React from 'react'

const Launch = () => {
    return (
        <div className='mt-[70px] sm:mt-[10px] sm:flex sm:items-center sm:justify-around bg-white p-4'>
            <div>
                <div className='font-bold text-5xl sm:text-5xl sm:space-y-1 mb-1'>
                    <p className='text-[#DB1F48]'>Launching</p>
                    <p>Soon!</p>
                </div>
                <div className='hidden sm:flex sm:items-center sm:py-2'>
                    {/* Comming soon on playstore and appstore */}
                    <div>
                        <Image src={'/android.png'} width='150' height='200' />
                    </div>
                    <div className='m-2' />
                    <div>
                        <Image src={'/appstore.png'} width='150' height='200' />

                    </div>
                </div>
            </div>
            <div >
                <Image priority src={'/mobile.png'} width='400' height='300' />
            </div>
            <div className='sm:hidden flex items-center justify-center py-2'>
                {/* Comming soon on playstore and appstore */}
                <div>
                    <Image src={'/android.png'} width='150' height='200' />
                </div>
                <div className='m-2' />
                <div>
                    <Image src={'/appstore.png'} width='150' height='200' />

                </div>
            </div>
        </div>
    )
}

export default Launch