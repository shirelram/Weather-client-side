import Rect, { useState } from 'react'

export default function XO(){
   let [num,setNum]=useState('O') 
   let [arr,setarr]=useState([])
   const style={
       backgroundColor:'pink'
   }
   function inc(){
    setNum(num=='O'?'X':'O')
    setarr([...arr,num])  
   }
    return (
        <>
            <div style={style}>{num}</div>
            <button onClick={inc}>לחץ {num}</button>
            <div>
            <ul>
            {arr.map(item => <li key={item}>{item}</li>)}
            </ul>
            </div>
        </>
    )

}
