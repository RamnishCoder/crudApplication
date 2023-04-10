import React, { useState } from 'react'

const Appp = () => {
  const[name,setName]=useState("");
const[data,setData]=useState(false);
const [interest,setInterest]=useState("");
 function datachange(e){
  console.log(name,data,interest);
e.preventDefault();
 }
  return (
    <div>
   <form onSubmit={datachange}>
    <input type="text" placeholder='enter name' onChange={(e)=>setName(e.target.value)}/><br/><br/>
    <select onChange={(e)=>setInterest(e.target.value)}>
      <option>select options</option>
      <option>hy</option>
      <option>hlo</option>
    </select><br/><br/>
    <input type="checkbox" onChange={(e)=>setData(e.target.checked)}/><span>slect terms and conditions</span><br/>
  <button type="submit">submit</button>
   </form>
   <img src="55e2c087-7492-49a6-89d7-f70b0de262a2/edit?ra=3OaObej3S176eFmDWT1wrY"/>
    </div>
  )
}

export default Appp;