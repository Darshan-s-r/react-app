import React, { useState } from 'react'
import "./PlayButton.css"

export default function PlayButton({children}) {
    const [play, setPlay] = useState(true)
    const [ text, setText] = useState('play')
    function handleClick(e){
        e.stopPropagation()
        if(play){
            setText('pause')
            setPlay(false)
        }else{ setText('play')
            setPlay(true)
    }

    }
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}
