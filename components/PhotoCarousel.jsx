import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import DemoVideo from './DemoVideo';

const PhotoCarousel = (props) => {
const [image, setImage] = useState(0);

const updateImage = (imageId) => {
  console.log("Image Id: ", imageId);
  setImage(imageId);
}

const activeImage = "flex cursor-pointer w-full h-20 project-photo-border rounded";
const inactiveImage = "flex cursor-pointer w-full h-20 project-photo-inactive rounded";

const imageArray = props.images.map((img) => {
  return (
    <div 
    className={image === props.images.indexOf(img) ? activeImage : inactiveImage}
    onClick={() => updateImage(props.images.indexOf(img))}
    >
      <Image 
        src={img}
        key={props.images.indexOf(img)}
        alt="/" 
        className='object-contain w-full h-auto p-1'
        width="1000" 
        height="1000"
      />
    </div>
  )

});

  return (
    <section className="px-10 flex flex-col items-center justify-center">
      <div className="w-full rounded-lg p-3 h-[250px] flex items-end justify-center md:w-[600px] md:min-h-[475px] ">
        <Image 
          src={props.images[image]} 
          alt="/" 
          className='object-contain w-full h-auto shadow-2xl shadow-indigo-500/50 rounded'
          width="1000" 
          height="1000"
          priority={true}
        />
      </div>
      <div className="w-full grid grid-cols-3 md:flex md:w-auto justify-between items-center gap-2 mt-3">
        { imageArray }
      </div>
    </section>
  );

}

export default PhotoCarousel;