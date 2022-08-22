import React from 'react'
import { CloudUploadIcon, DatabaseIcon, PaperAirplaneIcon, ServerIcon } from '@heroicons/react/solid';

const Service = () => {
  return (
    <>

      <div className='flex flex-col md:min-w-[760px] bottom-[5%] pt-5 md:left-1/2 bg-zinc-200 border border-slate-300 text-center shadow-xl' >
        <p className='text-center py-3 text-5xl md:text-4xl  font-bold '>Data Services </p>
        <div className='flex justify-between flex-wrap px-4 pt-8'>
          <p className='flex py-2 px-4 text-slate-800 font-bold'> <CloudUploadIcon className='h-6 text-blue-600'/> App Security</p>
          <p className='flex py-2 px-4 text-slate-800 font-bold' ><DatabaseIcon  className='h-6 text-blue-600' /> Dashbord Design</p>
          <p className='flex py-2 px-4 text-slate-800 font-bold'><PaperAirplaneIcon  className='h-6 text-blue-600'/> Cloud Data</p>
          <p className='flex py-2 px-4 text-slate-800 font-bold'><ServerIcon  className='h-6 text-blue-600' /> API</p>
        </div>
     </div>      
     
    </>
  )
}

export default Service


