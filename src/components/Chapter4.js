import React,{useState} from 'react'


export default function Chapter4() {
    const [imgStyle, setImgStyle] = useState({ width: '50px', height: '50px' });

    function handleMouseOver() {
      console.log("mouse over");
  
      if (imgStyle.width === '50px') {
        setImgStyle({ width: '150px', height: '150px' });
      } else {
        setImgStyle({ width: '50px', height: '50px' });
      }
    }
    function onKeyPress(e){
            console.log('Enter key pressed');
            e.preventDefault(); 
            // Add your logic for handling the Enter key press here
          
    }

    function handleClose(){
        window.close();
    }
  return (
    <div>
      <img onMouseOver={handleMouseOver} style={imgStyle} src='https://picsum.photos/id/1/160/90'></img>
      <button onDoubleClick={()=>alert('button is double clicked')}>button</button>
      <form>
        <input onBlur={()=>console.log('blur is happen')} onFocus={()=>console.log('on focus on input')} type='text'></input>
        <button onKeyUp={onKeyPress}>submit</button>
      </form>
      <p onCopy={()=>console.log('paragraph is copied')} onCut={()=>console.log('paragraph is cut')} onPaste={()=>alert('paragraph is past')}>this is paragraph</p>
       <button onClick={handleClose}>close</button>
    </div>
  )
}
