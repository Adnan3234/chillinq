import { motion } from 'framer-motion'
import Link from 'next/link'
const pageNotFound = () => {
    return (


        <div className='w-[75%] mx-auto h-screen flex items-center justify-center'>
            <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/10 ' />
            <motion.div initial={{ y: -500, opacity: 0, scale: 0.5 }} animate={{ y: 0, opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className='border border-red-300 shadow-lg drop-shadow-lg '>
                <div className='p-5 w-full mx-auto text-xs text-center sm:h-[200px] space-y-8 sm:space-y-0 sm:space-x-3 sm:flex sm:items-center sm:justify-between justify-center items-center'>
                    <div className='z-[2] p-5'>
                        <h2 className='sm:text-4xl text-xl font-bold'>Sorry, Page Not Found </h2>
                        <div className="mt-6 ">
                            <Link href={'/'} className='px-4 py-2 mt-5 border border-red-600 hover:text-black hover:bg-gray-300 text-white sm:text-lg font-bold cursor-pointer hover:shadow-lg bg-black/50 '>Click To Go Back </Link>
                        </div>

                    </div>
                </div>
            </motion.div>

            {/* <button onClick={() => { setToggleModal(true) }} data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                Toggle modal
            </button> */}
            {/* <Modal toggleModal={toggleModal} setToggleModal={setToggleModal} /> */}



        </div>
    )
}

export default pageNotFound