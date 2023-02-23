import React from "react";
import Link from "next/link";
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Main = () => {

  return (
    <div className="w-full h-1/2 text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center">
        <div>
          <h1>Hi, I'm <span className="text-primary">Ethan</span></h1>
          <p className="uppercase text-sm tracking-widest mb-3 mt-3">Solutions driven ecommerce manager, recent bootcamp graduate<br></br>and aspiring full-stack web developer.</p>
        </div>
        <div>
          <ul className="flex justify-start gap-x-3 mt-3">
            <Link href="https://www.linkedin.com/in/ethan-steip-8a175b120/" className="p-3 bg-primary rounded-full text-white hover:bg-black transition duration-150 ease-in-out">
              <FaLinkedinIn className="" size={25}/>
            </Link>
            <Link href="https://github.com/Ethansteip" className="p-3 bg-primary rounded-full text-white hover:bg-black transition duration-150 ease-in-out">
              <FaGithub size={25}/>
            </Link>
            <Link href="/" className="p-3 bg-primary rounded-full text-white hover:bg-black transition duration-150 ease-in-out">
              <HiOutlineMail size={25}/>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Main;