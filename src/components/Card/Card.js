import React from 'react';



const Card = (props) => {
    
    const { titleText, description } = props;   //destructuring
    
    return (
        <div>
            <h3>{titleText} will give you :- {description}</h3>
        </div>
    );
};

export default Card;
