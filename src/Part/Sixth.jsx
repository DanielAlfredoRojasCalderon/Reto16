import React, { useContext, useRef, useState } from 'react'
import Comment from '../Comments/Comment';
import { CommentContex } from '../Context/Comments';

const Sixth = () => {
    const {Commentario , addComment } = useContext(CommentContex)
    const varNombre = useRef(null)
    const varComment = useRef(null)
    const [index , addIndex] = useState(0)
    const [isDisabled, setIsDisabled] = useState(true);

    // Función para verificar si los campos están llenos
    const handleInputChange = () => {
        const nombreValue = varNombre.current.value.trim();
        const commentValue = varComment.current.value.trim();
        setIsDisabled(!(nombreValue && commentValue)); // Deshabilita si algún campo está vacío
    };

    const handleAddComment = (e) => {
        e.preventDefault(); // Evita que el formulario recargue la página
        const nuevoComentario = {
          id: index,
          name: varNombre.current.value,
          comment: varComment.current.value
        };
        addIndex(index + 1)
        addComment([...Commentario, nuevoComentario]); // Agregar el nuevo comentario al array
        varNombre.current.value = "";
        varComment.current.value = "";
        setIsDisabled(true);
      };



  return (
    <div className='bg-black h-full text-center  px-15 py-5'>
            <h2 className=' text-white text-2xl '>Custommer Reviews</h2>

        <div className=' px-10 flex items-center mt-4   '>
            <form className='flex flex-col gap-y-2 px-1.5 '  onSubmit={handleAddComment}>
                <input 
                className='bg-white p-1 text-black rounded-xs border-none'
                type="text" 
                placeholder='Your name'  
                ref={varNombre}
                required
                onChange={handleInputChange}
                
                />
                <textarea className='bg-white p-1 text-black rounded-xs' name="" id="" placeholder='Reviews...'
                ref={varComment}
                required
                onChange={handleInputChange}
                
                ></textarea>

                <button 
                    className={`bg-white rounded-xs cursor-pointer ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`} 
                    disabled={isDisabled}
                    type='submit'
                >SEND</button>

            </form>
            <div className='text-white  w-full h-full px-15  grid grid-cols-3 gap-2'>
            {
                Commentario.length === 0
                ? <p className='self-center'></p>
                :
                Commentario.map( (item,index) => (
                    <Comment 
                     key={index}
                     id={item.id}
                     nombre={item.name}
                     comentarios={item.comment}
                    />

                )


            )}

                
            </div>

        </div>


    </div>
  )
}

export default Sixth