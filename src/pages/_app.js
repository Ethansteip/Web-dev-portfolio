import '@/styles/globals.css';
import { useState } from 'react';
import Head from 'next/Head';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

export default function App({ Component, pageProps }) {

  const [darkModeState, setDarkModeState] = useState(true);

  const toggleDarkMode = () => {
    setDarkModeState(!darkModeState);
  }

  return (
    <main className="" data-theme={darkModeState ? "light" : "dark"}>
      <Head>
        <title>Ethan Steip | Web Dev.</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar toggleDarkMode={toggleDarkMode} darkModeState={darkModeState} />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
