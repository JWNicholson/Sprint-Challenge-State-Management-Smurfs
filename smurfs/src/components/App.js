import React from "react";
import Form from './Form';
import "./App.css";
import GridLayout from "./GridLayout";


export default function App (props){
  return(
    <div className="app">
      <h1>Meat the Smurfs</h1>

      {/**Form here */}
      <Form />

      {/**gridLayout here */}
      <GridLayout />
    </div>
  )
}
