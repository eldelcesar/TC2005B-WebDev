import React from 'react';
import Pet from './pet';

const pets = [
    { name: 'Nezuko', isCat: true, id: 1 },
    { name: 'Barry', isCat: true, id: 2 },
    { name: 'Bruce', isCat: false, id: 3 },
];

export default function PetList() {
    const listPets = pets.map(pet =>
        <div>
            <Pet id = {pet.id} name = {pet.name} isCat={pet.isCat}/>
        </div>
    );
  
    return (
      <ul>{listPets}</ul>
    );
}