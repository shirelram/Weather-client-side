import React from 'react';

export  default function UserDetails(props) {
    const { name, setName, lastName, setLastName } = props
    return (
        <div>
            <div>
                <label>First Name</label>
                <input value={name} onChange={(e) => { setName(e.target.value) }}></input>
            </div>
            <div>
                <label>Last Name</label>
                <input value={lastName} onChange={(e) => { setLastName(e.target.value) }}></input>
        </div>
        </div >
    );
}