import React, { useReducer } from 'react'

const initialState=0;
const reducer=(state,action)=>{
    if(action.type==="increment"){
        return state + 1;
    }
    if(action.type==="decrement"){
        return state - 1;
    }
    
    return state;
}


const UseReducer = () => {
    const [state,dispatch]=useReducer(reducer,initialState);
  return (
    <div>
<h1>{state}</h1>
<button onClick={()=>dispatch({type:"increment"})}>add</button>
<button onClick={()=>dispatch({type:"decrement"})}>remove</button>

    </div>
  )
}

export default UseReducer