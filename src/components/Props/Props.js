import React from 'react';



const Props = (props) => {
    const { titleText, description } = props;   
    return (
        <div>
            <h3>{titleText} and and call him {description}</h3>
        </div>
    );
};

export default Props;