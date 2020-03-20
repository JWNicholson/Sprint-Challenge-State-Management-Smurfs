import React from 'react';

export default function SmurfInfo (props) {
    return (
        <div className="smurf">
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
        </div>
    );     
}