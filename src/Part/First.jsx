import React from 'react'
import tastyImage from '../assets/hero-bg.jpg'

const First = () => {
  return (
    <div  style={{ backgroundImage: `url(${tastyImage})` }} 
      className="h-160 w-full bg-cover bg-center text-white px-35 py-4  ">
        <nav className='flex h-1/10  '>
          <div className=' w-6/10'>
            <h2 className=' p-4'>Bakery</h2>
          </div>
          <div className='flex w-4/10 justify-between  '>
            <a href="" className='hover:bg-amber-600 p-4' >HOME</a>
            <a href="" className='hover:bg-amber-600 p-4' >ABOUT US</a>
            <a href="" className='hover:bg-amber-600 p-4' >RESERVATION</a>
            <a href="" className='hover:bg-amber-600 p-4' >BAKERS</a>

          </div>
            
        </nav>

        <div className='ps-3 content-center h-8/10  '>
          <h1 className='my-8'>LET'S TASTE PERFECTION</h1>
          <input type="button"  name="" id="" value="ORDER NOW" className='bg-amber-600 p-4 cursor-pointer'  />
        </div>



    </div>
    
  )
}

export default First