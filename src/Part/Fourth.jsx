import React from 'react'
import picture1 from '../assets/square-1.jpg'
import picture2 from '../assets/square-2.jpg'
import picture3 from '../assets/square-3.jpg'
import picture4 from '../assets/square-4.jpg'


const Fourth = () => {
  return (
    <div className=' flex ps-50 py-20 mb-4  place-content-center items-center   '>
            <div className='w-2/5 h-90 flex flex-wrap gap-2 items-center justify-center '>
                <img src={picture1} alt="" className='object-cover w-60 h-48' />
                <img src={picture2} alt="" className='object-cover w-60 h-48' />
                <img src={picture3} alt="" className='object-cover w-60 h-48' />
                <img src={picture4}     alt="" className='object-cover w-60 h-48' />
            </div> 
            <div className='w-3/5 justify-items-center px-20'>
                <h2 className='mb-2'>Explore</h2>
                <h3 className='mb-3 '>MENU</h3>
                <p className='mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure sapiente iste saepe, ea modi nesciunt! Velit impedit quaerat sapiente iste saepe, ea modi nesciunt sapiente iste saepe !</p>
                <a href="" className='text-[#e1b164] underline ' >SEE FULL MENU</a>
            </div>    
               
    
    </div>
  )
}

export default Fourth