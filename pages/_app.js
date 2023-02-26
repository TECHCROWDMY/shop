import '@/styles/globals.css'
import { StateContext } from '../context/StateContext';
 
 

export default function App({ Component, pageProps }) {
  return(
    <StateContext>
        <Component {...pageProps} />
    </StateContext>
  ) 
}
