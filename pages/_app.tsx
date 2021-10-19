import type { AppProps } from 'next/app'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
export default MyApp
