import '@/styles/globals.css'

import { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";

 

export default function App({ Component, pageProps }) {

  useEffect(() => {
    Aos.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out',
    })
  }, [])

  useEffect(() => {
    Aos.refresh()
  }, [])
  return <Component {...pageProps} />
}
