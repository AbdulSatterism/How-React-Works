import React from 'react';

const Dial = (props) => {
    return (
        <div style={{ backgroundColor: 'lightgray', margin: '10px' }}>
            <h2>Dial steps </h2>
            <p>count the steps with copy paste: {props.steps}</p>
        </div>
    );
};

export default Dial;