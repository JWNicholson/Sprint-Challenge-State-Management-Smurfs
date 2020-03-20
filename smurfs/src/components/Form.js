import React, { useState } from 'react';
import axios from 'axios';



export default function Form () {

  const [smurf, setSmurf] = useState({
    name: '',
    age: 0,
    height: ''
  });

  const handleChanges = e => {
    setSmurf({...smurf, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Posting:", smurf)
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.log(error.message)
    })
    setSmurf({
      name: '',
      age: 0,
      height: ''
    })
  }

  return (
    <div>
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="label" htmlFor="name">Name: </label>
        <input type="text" name="name" placeholder="name" onChange={handleChanges} value={smurf.name}/>
      </div>
      <div className="form-group">
        <label className="label" htmlFor="age">Age: </label>
        <input type="number" name="age" placeholder="age" onChange={handleChanges} value={smurf.age}/>
      </div>
      <div className="form-group">
        <label className="label" htmlFor="height">Height: </label>
        <input type="text" name="height" placeholder="height" onChange={handleChanges} value={smurf.height}/>
      </div>
      <div className="form-group">
      <button className="button" type="submit">Add a Smurf</button>
      </div>
    </form>
    </div>
  );
}