import React, { useContext } from 'react'
import imgEstrellas from "../assets/estrellas.png"
import { HiOutlineXMark } from "react-icons/hi2";
import { CommentContex } from '../Context/Comments';


const Comment = ({id,nombre, comentarios}) => {

    const {Commentario , addComment } = useContext(CommentContex)

    const functionDelete = (clave) =>{
        
        const filtrados =  Commentario.filter( (item) => item.id != clave )
        addComment([...filtrados])

    };

  return (
    <div className='flex flex-col  h-full  rounded-xl border-1 px-1 py-1 ' >
        <div className='w-full flex justify-between  py-2 px-2 ps-4  '>
            <img src={imgEstrellas} className='h-4 w-1/3' alt="" />
            <HiOutlineXMark className=' cursor-pointer' onClick={ () =>  functionDelete(id)} />
        </div>
        <div className='flex flex-col h-full px-2' >
            <p className='text-justify px-2'>{comentarios} </p>
            <p className='text-end'>{nombre}</p>
        </div>

    </div>
  )
}

export default Comment