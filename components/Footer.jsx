import Image from 'next/image';

const Footer = () => {

  return (
    <footer className="footer justify-center items-center p-4 bg-base">
      <div className="flex justify-center items-center text-center">
      <Image 
          src="/assets/Logo/Portfolio-Logo.svg" 
          alt="/" 
          width="37" 
          height="37"
        />       
        <p>Copyright © 2023 - Ethan Steip</p>
      </div> 
    </footer>
  );
}

export default Footer;