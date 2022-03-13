import React from 'react';

export  default function Pic1(props) {
    const { myImg } = props;
    return (
        <>
            <img src={myImg} alt="my pic" width="311" height="253"></img>
            
        </>
    );
}
