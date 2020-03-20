import React from 'react';
import {
    Card,  CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

export default function SmurfInfo (props) {
    return (
        <Card body inverse style={{ backgroundColor: '#fff', borderColor: '#333' }}>
        <div className="smurf">
            
               
            <CardTitle><h2>{props.name}</h2></CardTitle>
            <CardText><p>Age: {props.age}</p></CardText>
            <CardText><p>Height: {props.height}</p></CardText>
            
          
        </div>
        </Card>
    );     
}