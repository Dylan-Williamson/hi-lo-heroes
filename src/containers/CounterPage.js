import React from 'react';
import CounterContainer from '../containers/CounterContainer';
import playingCards from '../components/PlayingCards';
// import AofS from '../assets/ace_of_spades.png'


const CounterPage = () => {

    return (
        <>
            <h1>
                Hi-Lo Simulator
            </h1>
            <h3>
                Practice Your Card Counting Skills
            </h3>
            <img src={ playingCards[0].img }/>
            <CounterContainer/>
        </>
    )
}
export default CounterPage;