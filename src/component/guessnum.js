import React, { useState } from 'react';
import RandomNum from './randomNum'

export default function CounterSon() {
    let num=random()
    function random(){
        const num=Math.floor(Math.random() * 1000)
        return num
    }
    return (
        <div>
            <h1>{num} מנחש מספר</h1>
            
            <RandomNum num={num}></RandomNum>
            <RandomNum num={num}></RandomNum>
        </div>
    )
}