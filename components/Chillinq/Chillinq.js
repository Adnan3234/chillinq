import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion'
import Launch from './Launch'
import WhyChillinq from './WhyChillinq'
import Footer from './Footer'

const Chillinq = () => {
    const [navbar, setNavbar] = useState(false);
    const [color, setColor] = useState('#000')
    const [textcolor, setTextcolor] = useState('black')
    const [selectedBorder, setSelectedBorder] = useState(0);
    const [borderColor, setBorderColor] = useState('green')
    const navHandler = () => {
        setNavbar(!navbar)
    }
    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 70) {
                // setColor('rgb(0 0 0 / 0.2)')
                setColor('#000')
                // setColor('#364b84')
                setTextcolor('white')
                setBorderColor('green')
            } else {
                // setColor('rgb(0 0 0 / 0.2)')
                setColor('#000')
                setTextcolor('#0433b1')
                setBorderColor('green')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])
    return (
        <div>
            <header style={{ backgroundColor: `${color}` }} className='fixed top-0 left-0 w-full  z-50'>
                {/* fixed left-0 top-0 w-full z-10 ease-in duration-300 */}
                <nav className='max-w-[1440px] m-auto p-3 md:p-2 text-white flex justify-between items-center'>
                    <motion.div className='ml-9' initial={{ x: -500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
                        <Link href={'/'}>
                            <Image src={'/chillinq.png'} alt='/' width='100' height='50' />
                            {/* <h1 onClick={() => { setSelectedBorder(1) }} className='font-bold text-3xl' style={{ color: textcolor == 'white' ? 'blue' : 'blue' }}>ToneTag</h1> */}
                        </Link>
                    </motion.div>
                    <motion.div className='mr-20' initial={{ x: 500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.4 }} >
                        <ul style={{ color: `${'#fff'}` }} className='hidden sm:flex space-x-2'>
                            <Link href={'/'}><li onClick={() => { setSelectedBorder(1); navHandler }} className='p-2 hover:text-green-200 hover:font-bold' style={selectedBorder == 1 ? { borderBottomWidth: 2, borderColor: '#fff' } : { borderBottomWidth: 0, borderColor: borderColor }}>Whitepaper</li></Link>
                            <Link href={'/about'}><li onClick={() => { setSelectedBorder(3); navHandler }} className='p-2  hover:text-green-200 hover:font-bold' style={selectedBorder == 3 ? { borderBottomWidth: 2, borderColor: '#fff' } : { borderBottomWidth: 0, borderColor: borderColor }}>Litepaper</li></Link>
                            <Link href={'/contact'}><li onClick={() => { setSelectedBorder(4); navHandler }} className='p-2  hover:text-green-200 hover:font-bold' style={selectedBorder == 4 ? { borderBottomWidth: 2, borderColor: '#fff' } : { borderBottomWidth: 0, borderColor: borderColor }}>Blogs</li></Link>
                        </ul>
                    </motion.div>
                    {/* Mobile View */}
                    {/* Mobile Button */}
                    <div onClick={navHandler} className='sm:hidden block z-10 cursor-pointer'>
                        {!navbar ? <AiOutlineMenu style={{ color: '#fff' }} size={20} /> : <AiOutlineClose style={{ color: '#fff' }} size={20} />}
                    </div>
                    {/* Mobile Menu Slide in */}
                    <div className={navbar ? 'sm:hidden absolute underline underline-offset-8 decoration-[#272729] top-0 py-16 left-0 right-0 bottom-0 flex justify-center w-full h-screen bg-black text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
                        <p className='absolute top-4 z-999 cursor-pointe ' onClick={navHandler}>
                            <Image src={'/chillinq.png'} alt='/' width='100' height='50' />
                            {/* <h1 onClick={() => { setSelectedBorder(1) }} className='font-bold text-3xl' style={{ color: textcolor == 'white' ? 'blue' : 'blue' }}>ToneTag</h1> */}
                        </p>
                        <ul>
                            <Link href={'/'}><li onClick={navHandler} className='p-4  hover:text-green-200 '>Whitepaper</li></Link>
                            <Link href={'/about'}><li onClick={navHandler} className='p-4  hover:text-green-200'>Litepaper</li></Link>
                            <Link href={'/contact'}><li onClick={navHandler} className='p-4  hover:text-green-200'>Blogs</li></Link>
                        </ul>
                    </div>
                </nav>
            </header>
            {/* Launch */}
            <Launch />
            <WhyChillinq />
            <Footer />
        </div>
    )
}

export default Chillinq