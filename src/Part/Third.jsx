import React from 'react'

const Third = ({imagen,text1,text2}) => {
  return (
    <div  style={{ backgroundImage: `url(${imagen})` }} 
          className="h-90 w-full bg-cover bg-center  px-35 py-4 content-center text-center ">
            
            <h2 className='text-6xl'>{text1}</h2>
            <h3 className='text-black text-4xl'>{text2}</h3>
    
    
    </div>
  )
}

export default Third