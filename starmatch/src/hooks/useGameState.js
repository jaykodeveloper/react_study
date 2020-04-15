import React, { useState, useEffect, Component } from 'react';
import starcal from '../utils/starcal'

const useGameState = () => {
    const [stars, setStars] = useState(starcal.random(1, 9));
    const [availableNums, setAvailableNums] = useState(starcal.range(1, 9))
    const [candidateNums, setCandidateNums] = useState([])
    const [secondsLeft, setSecondsLeft] = useState(10);

    useEffect(() => {
        if (secondsLeft > 0 && availableNums.length > 0) {
            const timerId = setTimeout(() => {
                setSecondsLeft(secondsLeft - 1)
            }, 1000);
            return () => clearTimeout(timerId);
        }
        console.log("cleaned")
    }
    )

    const setGameState = (newCandidateNums) => {
        if (starcal.sum(newCandidateNums) !== stars) {
            setCandidateNums(newCandidateNums);
        } else {
            const newAvailableNums = availableNums.filter(
                n => !newCandidateNums.includes(n)
            );
            setStars(starcal.randomSumIn(newAvailableNums, 9));
            setAvailableNums(newAvailableNums);
            setCandidateNums([]);
        }
    }
    return { stars, availableNums, candidateNums, secondsLeft, setGameState }
}



export default useGameState;