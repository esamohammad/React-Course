import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const names = [
    {
        "title": "Esa",
        "desc": "description-1"
    },
    {
        "title": "Hamdu",
        "desc": "description-2"
    },
    {
        "title": "Redwan",
        "desc": "description-3"
    },
    {
        "title": "Moni",
        "desc": "description-4"
    },
    {
        "title": "Mona",
        "desc": "description-5"
    }
];


const UniqueKey = () => {
    // console.log(uuidv4) //dekhte chaile
    return (
        <div>
            {names.map((name) =>
                <div key={uuidv4()}>
                    <h3>{name.title}</h3>
                    <p>{name.desc}</p>
                    
                </div>)}
             
        </div>
    );
};

export default UniqueKey;