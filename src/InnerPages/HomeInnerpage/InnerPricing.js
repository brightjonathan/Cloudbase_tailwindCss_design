import React from 'react'
import { CheckIcon } from '@heroicons/react/solid';

const InnerPricing = () => {
  return (
    <div  className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'> </div>

      <div className='max-w-[1240px] mx-auto py-12'>

        <div className='text-center py-8 text-slate-300'>
          <h2 className='text-3xl uppercase'>Pricing </h2>
          <h3 className='text-5xl font-bold text-white py-8'> The right price for your research </h3>
          <p className='text-3xl'> Reimagined digital asset management (DAM) to meet the unique needs of today focusing on flexibility, intelligent automation, and scale. </p>
        </div>
         
         <div className='grid md:grid-cols-2 '>

            <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'> Standard </span>
                <div>
                    <p className='text-6xl py-4 font-bold flex '> &#x20A6;6000 <span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                </div>
                <div>
                    <p className='text-2xl py-8 text-slate-500'> Extend your team's digital media capabilities for websites apps.</p>
                    <div className='text-2xl '>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/> Upload widget, API, and search </p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/> Remote fetch, auto-backup, and revision tracking </p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>  Image and video transformations </p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>  Video transcoding and adaptive streaming </p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/> High performance delivery through a CDN </p>
                        <button className='w-full py-4 my-4 bg-slate-900'> Get Started </button>
                    </div>
                </div>
            </div>

            <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'> PREMIUM </span>
                <div>
                    <p className='text-6xl py-4 font-bold flex '> &#x20A6;14000 <span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                </div>
                <div>
                    <p className='text-2xl py-8 text-slate-500'> Deliver engaging visual experiences with advanced features and functionality. </p>
                    <div className='text-2xl '>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/> Custom domain (CNAME) support </p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/> Optional HTTPS SSL Certificate </p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/> Authentication Options </p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/> Remote fetch, auto-backup, and revision tracking </p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/> High performance delivery through a CDN </p>
                        <button className='w-full py-4 my-4 bg-slate-900'> Get Started </button>
                    </div>
                </div>
            </div>

         </div>

      </div>


    </div>
  )
}

export default InnerPricing
