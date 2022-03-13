import React,{useState,useEffect} from 'react'
 
function useUrl(url) {
    let [newArr,setnewArr]=useState([])
    
    function inc(){
        setnewArr([])
    }
    
    useEffect(async function(){
        const response = await fetch(url);
        let newresponse = await response.json();
        setnewArr(newresponse)
    },[])

    return [newArr,inc]
}


export function Country(props){
    const {url}=props
    let [newArr,inc]=useUrl(url)
   
    return (

        <>
           <button onClick={inc}>לחץ</button>
            <ol>
            {newArr.map(item => <li key={item.id}>{item.id}</li>)}
            </ol>
        </>
    )
}

export function Joke(props){
    const {url}=props
    let [newArr,inc]=useUrl(url)
    let style={
        border:'3px solid red'
    }
    return (
        <>
            <button onClick={inc}>לחץ</button>
           <table>
            {newArr.map(item => <td style={style} key={item.login}>{item.login}</td>)}
            </table>
        </>
    )
}


