import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increase = () => setSteps(steps + 1);
    // useEffect for count value exactly get
    useEffect(() => {
        console.log(steps)
    }, [steps])
    return (
        <div style={{ backgroundColor: 'lightcyan', margin: '10px' }}>
            <h2>Buy a luxury watch for me!!</h2>
            <h3>state change: {steps}</h3>
            <button onClick={increase}>dour de.....</button>
            <Display steps={steps}></Display>
        </div>
    );
};

export default Watch;