import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    {/* <Navbar /> */}
    <Component {...pageProps} />
    {/* <footer className='bg-[#0433b1] border w-full text-white text-center font-sans p-4'><p>© 2023 Tone Tag, Inc.</p></footer> */}
  </>
}

export default MyApp
