import { useState } from 'react';
import { FaGithub,  FaTwitter, FaInstagram , FaTwitch } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {

    const [Subscribe, setSubscribe] = useState("");

    
        const submit = (e) => {
            e.preventDefault()
        }

  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>

    <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-5 border-b-2 border-gray-600 py-8' >

        <div>
            <h6 className='font-bold uppercase pt-2'> Solutions </h6>
            <ul>
                <li className='py-1'> <Link to='/'> Marketing </Link></li>
                <li className='py-1'>Analytics</li>
                <li className='py-1'>Commerce</li>
                <li className='py-1'>Data</li>
                <li className='py-1'>Cloud</li>
            </ul>
        </div>

        <div>
            <h6 className='font-bold uppercase pt-2'>Community</h6>
            <ul>
                <li className='py-1'> <Link to='/'> Marketing </Link></li>
                <li className='py-1'>Analytics</li>
                <li className='py-1'>Commerce</li>
                <li className='py-1'>Data</li>
                <li className='py-1'>Cloud</li>
            </ul>
        </div>

        <div>
            <h6 className='font-bold uppercase pt-2'>Support</h6>
            <ul>
                <li className='py-1'>Pricing</li>
                <li className='py-1'>Documentation</li>
                <li className='py-1'>Guides</li>
                <li className='py-1'>API Status</li>
            </ul>
        </div>
        <div>
            <h6 className='font-bold uppercase pt-2'>Company</h6>
            <ul>
                <li className='py-1'>About</li>
                <li className='py-1'>Blog</li>
                <li className='py-1'>Jobs</li>
                <li className='py-1'>Press</li>
                <li className='py-1'>Partners</li>
            </ul>
        </div>
        <div>
            <h6 className='font-bold uppercase pt-2'>Legal</h6>
            <ul>
                <li className='py-1'>Claims</li>
                <li className='py-1'>Privacy</li>
                <li className='py-1'>Terms</li>
                <li className='py-1'>Policies</li>
                <li className='py-1'>Conditions</li>
            </ul>
        </div>

        <div className='col-span-2 pt-8 mt-8 md:pt-2'>
            <p className='font-bold uppercase'>Subscribe to our newsletter</p>
            <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
            <form className='flex flex-col sm:flex-row'  onSubmit={submit} >
                <input className='w-full p-2 mr-4 rounded-md mb-4 text-black font-bold' type="email" placeholder='Enter email..' value={Subscribe} onChange={(e) => setSubscribe(e.target.value)}/>
                <button className='p-2 mb-4' >Subscribe</button>
            </form>
        </div>

    </div>

    <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
       <p className='py-4'> 2022 Workflow, CLL. All rights reserved </p>
      <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <a href="https://www.linkedin.com/in/bright-jonathan-554970212/"  target="_blank" rel="noopener noreferrer" >  <BsLinkedin /> </a>
            <FaInstagram />
            <a href="https://twitter.com/home"  target="_blank" rel="noopener noreferrer" > <FaTwitter /> </a>
            <FaTwitch />
            <a href="https://github.com/brightjonathan"  target="_blank" rel="noopener noreferrer" > <FaGithub /> </a>
            
      </div>
    </div>

</div>
  )
}

export default Footer

