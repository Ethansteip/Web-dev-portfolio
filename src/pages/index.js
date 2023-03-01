import React from 'react';
import Header from 'components/Header';
import Skills from 'components/Skills';
import Projects from 'components/Projects';
import ContactForm from 'components/ContactForm';
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Header />
      <Skills />
      <Projects />
      <ContactForm />
    </>
  );
}
