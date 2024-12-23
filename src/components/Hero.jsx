import React from 'react'
import Button from './Button'
// Muscular with Muscle Mate <span className='text-blue-400 font-medium '>
export default function Hero(props) {
  const {updateGenerator, text} = props
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full m-auto'>
      <div className="flex flex-col gap-4 ">      
        <p className='text-lg'>Its Time To Get Muscular with</p>
        <h1 className='uppercase font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl'>Muscle<span className='text-red-600'>Mate</span></h1>
      </div>
      <p className='text-sm md:text-base font-light '>I understand that by using Muscle Mate, I might achieve incredible <span className='text-red-600 font-medium '>muscle growth</span> and accept the fun risks—like becoming so strong that I can barely fit through doors or feeling a little too big for my own good!
      </p>
      <Button func={() => {
        updateGenerator();
        setTimeout(() => {
          window.location.href = "#generate";
        }, 50);
      }}
       text={text} />
    </div>
  )
}
