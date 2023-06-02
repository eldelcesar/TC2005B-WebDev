import React from 'react';
import Pet from './pet';
import Form from './form';

const pets = [
    { name: 'Nezuko', isCat: true, id: 1 },
    { name: 'Barry', isCat: true, id: 2 },
    { name: 'Bruce', isCat: false, id: 3 },
]

export default function PetList() {

    const listPets = pets.map(pet =>
        <Pet id = {pet.id} name = {pet.name} isCat={pet.isCat}/>
    );
  
    return (
    <div>
        <ul>{listPets}</ul>
        <Form/>
    </div>
    );
}