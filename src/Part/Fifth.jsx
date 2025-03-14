import React from 'react'
import img1 from '../assets/bakers-delight-1.jpg'
import img2 from '../assets/bakers-delight-2.jpg'

const Fifth = () => {
  return (
    <div className=' flex px-35 py-10   place-content-center items-center   '>
                
                <div className='w-3/5 justify-items-center px-20'>
                    <h2 className='mb-2'>Baker's</h2>
                    <h3 className='mb-3 '>DELIGHT</h3>
                    <p className='mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure sapiente iste saepe, ea modi nesciunt! Velit impedit quaerat sapiente iste saepe, ea modi  !</p>
                    <a href="" className='text-[#e1b164] underline ' >MAKE A RESERVATION</a>
                </div>    
                <div className='w-2/5 h-full  flex flex-wrap gap-2 items-center justify-center '>
                    <img src={img1} alt="" className='object-cover w-60 h-full' />
                    <img src={img2} alt="" className='object-cover w-60 h-full' />
                    
                </div> 
                   
        
        </div>
  )
}

export default Fifth