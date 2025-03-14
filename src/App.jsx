import First from "./Part/First"
import React, { useState } from 'react'
import Second from "./Part/Second"
import Third from "./Part/Third"
import Fourth from "./Part/Fourth"
import imgBg from './assets/tasteful-recipes.jpg'
import tastyimg from './assets/tasty.jpg'
import Fifth from "./Part/Fifth"
import Sixth from "./Part/Sixth"
import { CommentContex } from "./Context/Comments"


function App() {

  const [Commentario , addComment] = useState([])

  return (

    <CommentContex.Provider value={{Commentario , addComment }} > 

    
    
      <div className="h-full ">
      
          <First />
          <Second />
          <Third 
            imagen={imgBg}
            text1="Allways"
            text2="FRESH"
          />
          <Fourth />
          <Third 
            imagen={tastyimg}
            text1="Everything"
            text2="TASTY"
          />
          <Fifth />
          <Sixth />


      </div>
    </CommentContex.Provider>
    
  )
}

export default App
