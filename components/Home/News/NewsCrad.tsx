import Image from 'next/image';
import React from 'react'

type Props = {
    image: string;
    title: string;
    date: string;
}

const NewsCrad = ({image, title, date} : Props) => {
  return (
    <div>
        {/* images */}
      <div className='h-[300px]'>
        <Image src={image}
            alt={title}
            width={300}
            height={300}
            className='size-full object-cover rounded-lg'
        />
      </div>
      {/* text content */}
      <h1 className='mt-6 text-lg text-gray-950 text-center font-semibold hover:text-blue-950 transition-all duration-200 cursor-pointer'>{title}</h1>
      <p className='text-sm text-center text-gray-600 mt-3'>{date}</p>
    </div>
  )
}

export default NewsCrad
