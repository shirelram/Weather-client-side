import React from 'react';

export  default function Pic1(props) {
    const { name, lastName } = props;
    return (
        <>
            <div>Hi {name+" "+lastName} your pic is: </div>
            {props.children}
        </>
    );
}
