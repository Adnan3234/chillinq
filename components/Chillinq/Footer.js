import React from 'react'
import { SocialIcon } from 'react-social-icons';
const Footer = () => {
    return (
        <footer className='bg-[#000] border w-full text-white text-center text-[8px] sm:text-xs font-sans p-2 flex items-center justify-around'>
            <p className='hidden sm:block'>Home </p>
            <p>Terms and Conditions.</p>
            <div className='' >
                {/* <p></p> */}
                <SocialIcon bgColor='#000' style={{ height: "25px", width: "25px" }} fgColor='#fff' target='_blank' url="https://linkedin.com/" />
                <SocialIcon bgColor='#000' style={{ height: "25px", width: "25px" }} fgColor='#fff' target='_blank' url="https://instagram.com/" />
                <SocialIcon bgColor='#000' style={{ height: "25px", width: "25px" }} fgColor='#fff' target='_blank' url="https://twitter.com/" />
                <SocialIcon bgColor='#000' style={{ height: "25px", width: "25px" }} fgColor='#fff' target='_blank' url="https://facebook.com/" />
                <SocialIcon bgColor='#000' style={{ height: "25px", width: "25px" }} fgColor='#fff' target='_blank' url="https://discord.com/" />
            </div>
            <p>© 2023 Chillinq. All rights reserved.</p>
        </footer>
    )
}

export default Footer