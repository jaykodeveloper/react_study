import React, { Component, useState, useEffect } from 'react';
import '../App.scss';
import starcal from '../utils/starcal'
import PlayNumber from './PlayNumber'
import StarsDisplay from './StarsDisplay'
import PlayAgain from './PlayAgain';
import useGameState from '../hooks/useGameState';

const StarMatch = (props) => {

    const {  stars, availableNums, candidateNums, secondsLeft, setGameState } = useGameState();
    const candidatesAreWrong = starcal.sum(candidateNums) > stars;
    const gameIsDone = availableNums.length === 0 ?
        "won" :
        (secondsLeft === 0 ? 'lost' : 'active');
    const numberStatus = number => {
        if (!availableNums.includes(number)) {
            return 'used';
        }
        if (candidateNums.includes(number)) {
            return candidatesAreWrong ? 'wrong' : 'candidate';
        }
        return 'available';
    };

    const onNumClick = (num, status) => {
        if (status === 'used' || gameIsDone !== 'active') {
            return;
        }
        const newCandidateNums =
            status === 'available'
                ? candidateNums.concat(num)
                : candidateNums.filter(n => n !== num);

        setGameState(newCandidateNums);
    };

    return (
        <div className="game">
            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
            </div>
            <div className="body">
                <div className="left">
                    {
                        gameIsDone !== 'active' ? (
                            <PlayAgain 
                              onClick={props.resetGame} 
                              gameStatus={gameIsDone}
                              />
                        ) : (
                                <StarsDisplay
                                    stars={stars}
                                />
                            )
                    }

                </div>
                <div className="right">
                    {
                        starcal.range(1, 9).map(num =>
                            <PlayNumber
                                key={num}
                                num={num}
                                status={numberStatus(num)}
                                onClick={onNumClick}
                            />
                        )
                    }
                </div>
            </div>
            <div className="timer">Time Remaining: {secondsLeft}</div>
        </div>
    )
}

export default StarMatch;