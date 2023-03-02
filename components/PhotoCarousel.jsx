import React from 'react';
import { useState } from 'react';
import Image from 'next/Image';

const PhotoCarousel = (props) => {
const [image, setImage] = useState(0);

const updateImage = (imageId) => {
  setImage(imageId);
}

const activeImage = "flex cursor-pointer w-full h-20 project-photo-border rounded";
const inactiveImage = "flex cursor-pointer w-full h-20 project-photo-inactive rounded";

  return (
    <section className="p-10 flex flex-col items-center justify-center">
      <div className="w-full border-2 rounded-lg p-3 h-auto flex items-center justify-center md:w-[600px] md:min-h-[600px] ">
        <Image 
              src={props.images[image]} 
              alt="/" 
              className='object-contain w-full h-auto'
              width="1000" 
              height="1000"
              priority={true}
            />
      </div>
      <div className="w-full grid grid-cols-3 md:flex md:w-auto justify-between items-center gap-2 mt-3">
        <div 
          className={image === 0 ? activeImage : inactiveImage}
          onClick={() => updateImage(0)}
          >
          <Image 
            src={props.images[0]} 
            alt="/" 
            className='object-contain w-full h-auto p-1'
            width="1000" 
            height="1000"
          />
        </div>
        <div 
          className={image === 1 ? activeImage : inactiveImage}
          onClick={() => updateImage(1)}
          >
          <Image 
            src={props.images[1]}  
            alt="/" 
            className='object-contain w-full cursor-pointer h-auto p-1'
            width="1000" 
            height="1000"
          />
        </div>
        <div 
          className={image === 2 ? activeImage : inactiveImage}
          onClick={() => updateImage(2)}
          >
          <Image 
            src={props.images[2]}  
            alt="/" 
            className='object-contain w-full h-auto p-1'
            width="1000" 
            height="1000"
          />
        </div>
        <div 
          className={image === 3 ? activeImage : inactiveImage}
          onClick={() => updateImage(3)}
          >
          <Image 
            src={props.images[3]}  
            alt="/" 
            className='object-contain w-full h-auto p-1'
            width="1000" 
            height="1000"
          />
        </div>
      </div>
    </section>
  );

}

export default PhotoCarousel;