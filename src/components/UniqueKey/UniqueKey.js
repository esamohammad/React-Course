import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const names = [
    {
        "id": "uuidv4()",
        "title": "Esa",
        "desc": "description-1"
    },
    {
        "id": "uuidv4()",
        "title": "Hamdu",
        "desc": "description-2"
    },
    {
        "id": "uuidv4()",
        "title": "Redwan",
        "desc": "description-3"
    },
    {
        "id": "uuidv4()",
        "title": "Moni",
        "desc": "description-4"
    },
    {
        "id": "uuidv4()",
        "title": "Mona",
        "desc": "description-5"
    }
];


const UniqueKey = () => {
    // console.log(uuidv4) //dekhte chaile
    return (
        <div>
            {names.map((name) =>
                <div key={name.id}>
                    <h3>{name.title}</h3>
                    <p>{name.desc}</p>

                </div>)}

        </div>
    );
};

export default UniqueKey;