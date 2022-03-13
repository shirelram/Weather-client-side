import React, { useState } from 'react';


export default function CounterParent(props) {
    let [guss1, setguss1] = useState("נחש");
  
   
    function cng(e) {
        
        if(Number(e.target.value)>props.num){
            setguss1("מספר גדול")
        }else if(Number(e.target.value)<props.num){
            setguss1("מספר קטן")
        }else{
            setguss1("ניחשת")
        }    
    }

    return (
        <>
            <div>
            <label>
                    נחש מספר
             <input  type="number" onChange={cng} />
             </label>
             {guss1}
            </div>
        </>
    )
}
