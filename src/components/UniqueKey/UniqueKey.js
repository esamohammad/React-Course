import React from 'react';


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
    return (
        <div>
            {names.map((name, index) =>
                <div key={index}>
                    <h3>{name.title}</h3>
                    <p>{name.desc}</p>
                </div>)}
        </div>
    );
};

export default UniqueKey;