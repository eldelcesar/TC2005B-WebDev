import React from 'react';

export default function Pet({id, isCat, name}) {
  
    return (
        <ul>
            <li
            key={id}
            style={{
            color: isCat ? 'magenta' : 'darkgreen'
            }}
        >
            {name}
        </li>
        </ul>
      
    );
}