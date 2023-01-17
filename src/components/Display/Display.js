import React from 'react';
import Dial from '../Dial/Dial';

const Display = (props) => {
    return (
        <div style={{ backgroundColor: 'gray', margin: '10px' }}>
            <h1>display steps in child</h1>
            <p>count steps like parent : {props.steps}</p>
            <Dial steps={props.steps}></Dial>
        </div>
    );
};

export default Display;