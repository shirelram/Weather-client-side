import React,{useState,useEffect} from 'react'

export function Clock(props) {
    const { items } = props;
    const [ticks, setTicks] = useState(0);
    let [timer,setTimer]=useState(0)
  
    function tick() {
      setTicks(val => val + 1);
    }

    function inc(){
        if(ticks!=0){
            clearInterval(timer)
            setTicks(0)
        }else{
            setTimer(setInterval(tick, 1000)) 
        }
    }

    useEffect(function() {
      setTimer(setInterval(tick, 1000)) 
  
      return function cancel() {
        clearInterval(timer);
      }
    }, []);
  
    return (
        <>
      <div>
        Ticks... {ticks}
      </div>
      <p>{items[ticks % items.length]}</p>
      <button onClick={inc}>לחץ</button>
      </>
    );
}
  

