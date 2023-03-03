import React from "react";
import Link from "next/link";
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Header = () => {

  return (
    <div className="w-full h-auto text-center mt-16 mb-16 md:mt-32 md:mb-32">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center">
        <div>
          <h1>Hi, I'm <span className="text-primary">Ethan</span></h1>
          <p className="uppercase text-xs md:text-sm tracking-widest mb-3 mt-3">Solutions driven ecommerce manager, recent bootcamp graduate<br></br>and full-stack web developer.</p>
        </div>
        <div>
          <ul className="flex justify-start gap-x-3 mt-3">
            <a target="_blank" href="https://www.linkedin.com/in/ethan-steip-8a175b120/" className="p-3 bg-primary rounded-full text-white hover:bg-black transition duration-150 ease-in-out">
              <FaLinkedinIn className="" size={25}/>
            </a>
            <a target="_blank" href="https://github.com/Ethansteip" className="p-3 bg-primary rounded-full text-white hover:bg-black transition duration-150 ease-in-out">
              <FaGithub size={25}/>
            </a>
            <Link href="#contact-form" className="p-3 bg-primary rounded-full text-white hover:bg-black transition duration-150 ease-in-out">
              <HiOutlineMail size={25}/>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;