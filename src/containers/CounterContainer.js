import React from 'react';
import PlayingCard from '../components/PlayingCard';
import CounterControls from '../components/CounterControls';

const CounterContainer = () => {

    return (
        <>
            <div className="counter-container">
                <h1>
                    Current Count: 0
                </h1>
                <PlayingCard/>
                <CounterControls/>
            </div>
        </>
    )
}
export default CounterContainer;