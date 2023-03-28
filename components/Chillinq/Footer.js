import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BsMedium } from "react-icons/bs";
const Footer = () => {

    return (
        <>
            <footer className='hidden bg-[#000] border w-full text-white text-center text-[8px] sm:text-xs font-sans p-2 sm:flex sm:items-center sm:justify-around'>
                <p className=''>Home </p>
                <p>Terms and Conditions.</p>
                <div className='flex items-center' >
                    {/* <p></p> */}
                    <SocialIcon className='cursor-pointer' bgColor='#000' style={{ height: "25px", width: "25px" }} fgColor='#fff' target='_blank' url="https://linkedin.com/" />
                    <SocialIcon className='cursor-pointer' bgColor='#000' style={{ height: "25px", width: "25px" }} fgColor='#fff' target='_blank' url="https://instagram.com/" />
                    <SocialIcon className='cursor-pointer' bgColor='#000' style={{ height: "25px", width: "25px" }} fgColor='#fff' target='_blank' url="https://twitter.com/" />
                    <SocialIcon className='cursor-pointer' bgColor='#000' style={{ height: "25px", width: "25px" }} fgColor='#fff' target='_blank' url="https://facebook.com/" />
                    <FaDiscord className='cursor-pointer' size={15} />
                    {/* <SocialIcon bgColor='#000' style={{ height: "25px", width: "25px" }} fgColor='#fff' target='_blank' url="https://discord.com/" /> */}
                </div>
                <p>© 2023 Chillinq. All rights reserved.</p>
            </footer>
            <div className='my-4 sm:hidden flex justify-center items-center gap-3' >
                {/* <p></p> */}
                {/* <SocialIcon bgColor='#000' style={{ height: "25px", width: "25px" }} fgColor='#fff' target='_blank' url="https://linkedin.com/" /> */}
                <FaLinkedin className='cursor-pointer' size={15} />
                <FaInstagram className='cursor-pointer' size={15} />
                <FaTwitter className='cursor-pointer' size={15} />
                <FaFacebook className='cursor-pointer' size={15} />
                <BsMedium className='cursor-pointer' size={15} />
                {/* <SocialIcon bgColor='#000' style={{ height: "25px", width: "25px" }} fgColor='#fff' target='_blank' url="https://instagram.com/" /> */}
                {/* <SocialIcon bgColor='#000' style={{ height: "25px", width: "25px" }} fgColor='#fff' target='_blank' url="https://twitter.com/" /> */}
                {/* <SocialIcon bgColor='#000' style={{ height: "25px", width: "25px" }} fgColor='#fff' target='_blank' url="https://facebook.com/" /> */}
                <FaDiscord className='cursor-pointer' size={15} />
                {/* <SocialIcon bgColor='#000' style={{ height: "25px", width: "25px" }} fgColor='#fff' target='_blank' url="https://discord.com/" /> */}
            </div>
            <footer className='flex items-center justify-between bg-[#000] border w-full text-white text-center text-[10px]  font-sans font-semibold p-4 sm:hidden'>
                <p className=''>Home </p>
                <p>Terms and Conditions.</p>
                <p>© 2023 Chillinq. All rights reserved.</p>
            </footer>

        </>
    )
}

export default Footer