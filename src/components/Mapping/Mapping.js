import React from 'react';

const users = [
    {
      name: "Esa",
      age: "28",
      phones: [
        { home: "007" },
        { office: "008" },
      ],
    },
    {
      name: "Raton",
      age: "33",
      phones: [
        { home: "0017" },
        { office: "00018" },
      ],
    },
    {
        name: "Jaton",
        age: "22",
        phones: [
          { home: "001222" },
          { office: "00012228" },
        ],
      },
  ];


const Mapping = () => {
    return (
        <div>
             {users.map((user,index) =>(
        <article key={index}>
          <h3>{user.name}</h3>
          <p>{user.age}</p>
          {user.phones.map((phone, index) => (<div key={index}>
            <p>{phone.home}</p>
            <p>{phone.office}</p>
          </div>))}
        </article>))}
        </div>
    );
};

export default Mapping;