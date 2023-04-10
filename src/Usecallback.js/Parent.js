import React, {  useCallback, useState } from "react";
import Child from "./Child"

const Parent =()=>{
const [number,setNumber]=useState(0);
const[numbertwo,setNumbertwo]=useState([]);
const addNumber=()=>{
setNumber(number+1);

}


const fun=useCallback(()=>{
    console.log("callback")
},numbertwo)



    return(
<>

<Child numbertwo={numbertwo} fun={fun}/>
<h1>Parent component{number}</h1>
<button onClick={addNumber}>Click</button>
{/* <button onClick={anotherNumber}>Function</button> */}
</>

    )
}
export default Parent;