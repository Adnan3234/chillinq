import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BsMedium } from "react-icons/bs";
import Link from 'next/link';
const Footer = () => {

    return (
        <>
            <footer className='hidden bg-[#000] border w-full text-white text-center text-[8px] sm:text-xs font-sans p-2 sm:flex sm:items-center sm:justify-around'>
                <Link target='_blank' href='https://drive.google.com/file/d/1u9bGhekyB7jxQSJmOoQoPbxrKG_WLbn0/view?usp=share_link'>
                    <p className=''>Privacy Policy </p>
                </Link>
                <Link target='_blank' href='https://drive.google.com/file/d/1kooFU6q4kSr2HWZm4Gi6reRm5O4Y6vjA/view?usp=share_link'>
                    <p>Terms and Conditions</p>
                </Link>
                <div className='flex items-center' >
                    {/* <p></p> */}
                    <SocialIcon className='cursor-pointer' bgColor='#000' style={{ height: "25px", width: "25px" }} fgColor='#fff' target='_blank' url="https://www.linkedin.com/company/chillinqueue/" />
                    <SocialIcon className='cursor-pointer' bgColor='#000' style={{ height: "25px", width: "25px" }} fgColor='#fff' target='_blank' url="https://www.instagram.com/chillinqueue/" />
                    <SocialIcon className='cursor-pointer' bgColor='#000' style={{ height: "25px", width: "25px" }} fgColor='#fff' target='_blank' url="https://twitter.com/chillinqueue" />
                    <SocialIcon className='cursor-pointer' bgColor='#000' style={{ height: "25px", width: "25px" }} fgColor='#fff' target='_blank' url="https://facebook.com/" />
                    <Link href='https://chillinq.medium.com/' target='_blank' ><BsMedium className='cursor-pointer mx-3' size={15} /></Link>
                    <Link target="_blank" href='https://discord.gg/KSfQWeDbmf'>
                        <FaDiscord className='cursor-pointer' size={15} />
                    </Link>
                    {/* <SocialIcon bgColor='#000' style={{ height: "25px", width: "25px" }} fgColor='#fff' target='_blank' url="https://discord.com/" /> */}
                </div>
                <p>© 2023 Chillinq. All rights reserved</p>
            </footer>
            <div className='my-4 sm:hidden flex justify-center items-center gap-3' >
                {/* <p></p> */}
                {/* <SocialIcon bgColor='#000' style={{ height: "25px", width: "25px" }} fgColor='#fff' target='_blank' url="https://linkedin.com/" /> */}
                <Link target="_blank" href='https://www.linkedin.com/company/chillinqueue/'><FaLinkedin className='cursor-pointer' size={15} /></Link>
                <Link target="_blank" href='https://www.instagram.com/chillinqueue/'><FaInstagram className='cursor-pointer' size={15} /></Link>
                <Link target="_blank" href='https://twitter.com/chillinqueue'><FaTwitter className='cursor-pointer' size={15} /></Link>
                <Link target="_blank" href='https://facebook.com'><FaFacebook className='cursor-pointer' size={15} /></Link>
                <Link target="_blank" href='https://chillinq.medium.com/'><BsMedium className='cursor-pointer' size={15} /></Link>
                {/* <SocialIcon bgColor='#000' style={{ height: "25px", width: "25px" }} fgColor='#fff' target='_blank' url="https://instagram.com/" /> */}
                {/* <SocialIcon bgColor='#000' style={{ height: "25px", width: "25px" }} fgColor='#fff' target='_blank' url="https://twitter.com/" /> */}
                {/* <SocialIcon bgColor='#000' style={{ height: "25px", width: "25px" }} fgColor='#fff' target='_blank' url="https://facebook.com/" /> */}
                <Link target="_blank" href='https://discord.gg/KSfQWeDbmf'>
                    <FaDiscord className='cursor-pointer' size={15} />
                </Link>
                {/* <SocialIcon bgColor='#000' style={{ height: "25px", width: "25px" }} fgColor='#fff' target='_blank' url="https://discord.com/" /> */}
            </div>
            <footer className='flex items-center justify-between bg-[#000] border w-full text-white text-center text-[10px]  font-sans font-semibold p-4 sm:hidden'>
                <Link target='_blank' href='https://drive.google.com/file/d/1u9bGhekyB7jxQSJmOoQoPbxrKG_WLbn0/view?usp=share_link'>
                    <p className=''>Privacy Policy </p>
                </Link>
                <Link target='_blank' href='https://drive.google.com/file/d/1kooFU6q4kSr2HWZm4Gi6reRm5O4Y6vjA/view?usp=share_link'>
                    <p>Terms and Conditions</p>
                </Link>
                <p>© 2023 Chillinq. All rights reserved</p>
            </footer>

        </>
    )
}

export default Footer