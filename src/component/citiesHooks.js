import Rect,{useState,useEffect} from 'react'

export function CitiesHooks(props){
    const {url}=props
    let [countriesArr,setcountries]=useState([])
  
async function func(url){
        const response = await fetch(url);
        let countries = await response.json();
        let newcountries=countries.map(item=> item.id)
        setcountries(newcountries)
    }
    
    function inc(){
            setcountries([])
    }
    
    return (

        <>
           <button onClick={inc()}>לחץ</button>
            <ol>
            {countriesArr.map(item => <li key={item}>{item}</li>)}
            </ol>
        </>
    )
}

