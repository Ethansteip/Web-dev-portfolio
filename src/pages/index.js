import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Navbar from 'components/Navbar'
import { Inter } from '@next/font/google'
import Main from 'components/Main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [darkModeState, setDarkModeState] = useState(false);

  const toggleDarkMode = () => {
    setDarkModeState(!darkModeState);
  }


  return (
    <main data-theme={!darkModeState ? 'light' : 'dark'}>
      <Head>
        <title>Ethan Steip | Web Dev.</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar setDarkModeState={setDarkModeState}/>
      <Main />
    </main>
  )
}
