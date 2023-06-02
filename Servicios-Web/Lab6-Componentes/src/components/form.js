import React from 'react';


export default function Form() {
  
    return (
      <div>
        <p>Pet Name:</p>
        <input type="text" id="name" placeholder="Pet name"></input>
        <br></br>
        <p>Is Cat?</p><input type="checkbox" id="isCat"></input>
        <br></br>
      </div>
    );
}