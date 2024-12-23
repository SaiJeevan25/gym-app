import React from 'react'
import Button from './Button'

export default function Hero(props) {
  const {updateGenerator, text} = props
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full m-auto'>
      <div className="flex flex-col gap-4 ">      
        <p>Its Time To Get</p>
        <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Swloe<span className='text-blue-400'>normous</span></h1>
      </div>
      <p className='text-sm md:text-base font-light '>I hereby acknowledgement that I may become <span className='text-blue-400 font-medium '>unbelievably swlenormous</span> and accept all the risks of becoming the local <span className='text-blue-400 font-medium '>mass montrosity</span>, afflicted with severe body dismorphia, unable to fit through doors.
      </p>
      <Button func={() => {
        updateGenerator();
        setTimeout(() => {
          document.getElementById('generate')?.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }}
       text={text} />
    </div>
  )
}
