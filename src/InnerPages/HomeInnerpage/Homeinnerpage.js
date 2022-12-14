import React from 'react'
import heroImg from '../InnerAssets/hero-img.png'

const Homeinnerpage = () => {
  return (
    <div className='w-full h-[100%] pt-[10vh] bg-blue-200 flex flex-col justify-between ' >
    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>

     <div className='flex flex-col justify-center md:items-start w-full  px-2 py-8' >
        <p className='text-2xl'> Unique sequencing & production </p>
        <h1 className='pt-3 text-4xl md:text-6xl  font-bold '> Cloud </h1>
        <h1 className=' text-4xl font-bold md:text-6xl'> Management </h1>
        <p className='pt-3 text-2xl'> This is our Tech brand. </p>
        <button className='py-3 px-6 sm:w-[60%] my-4'> Get Started </button>
     </div>

     <div>
       <img src={heroImg} alt='/' className='w-[100%] ' />
     </div>

    </div>
</div>
  )
}

export default Homeinnerpage



