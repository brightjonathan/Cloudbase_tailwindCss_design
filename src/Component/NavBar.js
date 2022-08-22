import { useState } from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/solid'
import { Link } from 'react-router-dom';
import cloud from '../Assest/cloud-icon-8.png'

const NavBar = () => {

  const [nav, setNav] = useState(false)

  
  const handleClick = () =>{
    setNav(!nav)
  }

  
  const handleClose = () =>{
    setNav(!nav)
  }


  return (
  
    <div className='w-screen h-[80px] z-10 bg-blue-200 fixed drop-shadow-lg'>
    <div className='px-2 flex justify-between items-center w-full h-full'>
      <div className='flex items-center'>
        <h1 className='text-4xl font-bold mr-4 sm:text-3xl'> <Link Link to='/' className='flex'> <img src={cloud} className='w-8 mr-1'/>Cloud. </Link></h1>
        <ul className='hidden md:flex '>
        <li><Link to="/" > Home </Link></li>
        <li><Link to="/about"> About</Link></li>
        <li><Link to="/support" > Support </Link></li>
        <li><Link to="/platforms" >Platforms </Link></li>
        <li><Link to="/pricing" > Pricing </Link></li>
        </ul>
      </div>
      <div className='hidden md:flex pr-4'>
        <button className='border-none bg-transparent text-black mr-4'>
          Sign In
        </button>
        <button className='px-8 py-3'>Sign Up</button>
      </div>
      <div className='md:hidden mr-4' onClick={handleClick}>
          {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
        
      </div>
    </div>

    <ul className={!nav ? 'hidden' : 'absolute bg-blue-200 w-[75%] px-8'} onClick={handleClose} >
        <li className='border-b-2 border-blue-300 w-full'><Link to="/"> Home</Link></li>
        <li className='border-b-2 border-blue-300 w-full'><Link to="/about" >About</Link></li>
        <li className='border-b-2 border-blue-300 w-full'><Link to="/support" >Support</Link></li>
        <li className='border-b-2 border-blue-300 w-full'><Link to="/platforms" >Platforms</Link></li>
        <li className='border-b-2 border-blue-300 w-full'><Link to="/pricing" >Pricing</Link></li>

      <div className='flex flex-col my-4'>
          <button className='bg-transparent bg-blue-300  text-black  px-8 py-3 mb-4'> Sign In </button>
          <button className='px-8 py-3  text-black '> Sign Up </button>
      </div> 
    </ul>
  </div>
   
  )
}

export default NavBar



