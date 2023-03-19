import React from 'react'
import { motion } from 'framer-motion'
const about = () => {
    return (
        <div className='w-[75%] mx-auto h-screen flex items-center justify-center'>
            <motion.div initial={{ y: -500, opacity: 0, scale: 0.5 }} animate={{ y: 0, opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className='border border-green-100 shadow-lg drop-shadow-lg '>
                <div className='p-5 w-full mx-auto text-xs text-center sm:h-[200px] space-y-8 sm:space-y-0 sm:space-x-3 sm:flex sm:items-center sm:justify-between justify-center items-center'>
                    <div className='z-[2] p-5 mt-[-10]'>
                        <h2 className='text-5xl font-bold'>Comming Soon</h2>
                        {/* <Link href={'/'} className='px-8 py-2 border'>Go Back </Link> */}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default about