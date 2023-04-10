import React, { useRef } from 'react'

const Useref = () => {
    const ramnish=useRef();
function click(){
    ramnish.current.focus();
    ramnish.current.classList.add("blue");
    ramnish.current.classList.remove("red");
}

  return (
    <>
    
    
    
    <input type="text" 
    ref={ramnish}
    className='red'
    />
    <button onclick={click}>click me</button>
    
    </>
  )
}

export default Useref