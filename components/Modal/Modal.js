import React from 'react'
const Modal = ({ toggleModal, setToggleModal, heading, data }) => {

    return (
        <div className='font-sans'>
            {toggleModal && <div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-20 md:top-0 left-0 right-0 flex justify-center items-center  z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                <div class="relative w-full h-full max-w-2xl md:h-auto">

                    <div class={`relative bg-gray-700  rounded-lg  shadow dark:bg-gray-700`}>
                        <div class="flex items-center justify-between p-4 border-b rounded-t border-gray-600">
                            <h3 class="text-sm sm:text-[19px] text-white">
                                Release Note Version: <span className=' font-bold'>{heading}</span>
                            </h3>
                            <button onClick={() => { setToggleModal(false) }} type="button" class=" bg-transparent hover:bg-gray-200  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white text-gray-100" data-modal-hide="defaultModal">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" color='#fff' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>

                        <div class="p-6 space-y-2 text-sm sm:text-[16px]">
                            <p class="leading-relaxed text-gray-500 dark:text-gray-400">
                                Name: <span className='text-white'>{data['Name']}</span>
                            </p>
                            <p class="leading-relaxed text-gray-500 dark:text-gray-400">
                                Version Name: <span className='text-white'>{data['Version Name']}</span>
                            </p>
                            <p class="leading-relaxed text-gray-500 dark:text-gray-400">
                                Version Code: <span className='text-white'>{data['Version Code']}</span>
                            </p>
                            <p class="leading-relaxed text-gray-500 dark:text-gray-400">
                                Version Name: <span className='text-white'>{data['Version Name']}</span>
                            </p>
                            <p class="leading-relaxed text-gray-500 dark:text-gray-400">
                                Disabled Logs: <span className='text-white'>true</span>
                            </p>
                            <p class="leading-relaxed text-gray-500 dark:text-gray-400">
                                Enabled Enable Proguard In Release Builds: <span className='text-white'>true</span>
                            </p>
                            <p class="leading-relaxed text-gray-500 dark:text-gray-400">
                                Release Date: <span className='text-white'>{data['Release Date']}</span>
                            </p>
                            <p className='font-semibold text-xl text-white'>Release Features : </p>
                            <ul className='list-disc marker:text-sky-500  space-y-2 p-2'>
                                <li class="leading-relaxed text-gray-200 dark:text-gray-300">
                                    Added new option to under POD page “Reports“. Now merchant able check POD Purchase / Rental configuration Mandate & ECS logs under reports.
                                </li>
                                <li class="leading-relaxed text-gray-200 dark:text-gray-300">
                                    Reports page have two options ie: Mandate Logs & ECS Logs.
                                </li>
                                <li class="leading-relaxed text-gray-200 dark:text-gray-300">
                                    Remote update enabled
                                </li>
                                <li class="leading-relaxed text-gray-200 dark:text-gray-300">
                                    Introduced POD config details in POD page.
                                </li>
                            </ul>

                        </div>

                        {/* <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button data-modal-hide="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                            <button data-modal-hide="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                        </div> */}
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Modal