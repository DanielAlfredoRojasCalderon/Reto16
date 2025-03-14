import React from 'react'
import panes  from '../assets/story-img.jpg'

const Second = () => {
  return (
    <div className=' flex px-15 py-12  place-content-center items-center   '>
        <div className='w-1/2 justify-items-center px-20'>
            <h1 className='mb-5'>Discover</h1>
            <h3 className='mb-3 '>OUT STORY</h3>
            <p className='mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure sapiente iste saepe, ea modi nesciunt! Velit impedit quaerat !</p>
            <a href="" className='text-[#e1b164] underline ' >LEARN MORE</a>
        </div>    
        <div className='w-1/3 h-80  bg-amber-800'>
            <img src={panes} alt="" className='object-cover w-full h-full' />
        </div>    

    </div>
  )
}

export default Second