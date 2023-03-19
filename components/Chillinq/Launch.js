import Image from 'next/image'
import React from 'react'

const Launch = () => {
    return (
        <div className='mt-[30px] sm:mt-[10px] flex items-center justify-around bg-white p-4'>
            <div>
                <div className='font-bold text-3xl sm:text-5xl sm:space-y-1 mb-1'>
                    <p className='text-[#DB1F48]'>Launching</p>
                    <p>Soon!</p>
                </div>
                <div className='flex items-center py-2'>
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
        </div>
    )
}

export default Launch