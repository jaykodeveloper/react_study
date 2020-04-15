import React from 'react';

const PlayAgain = props => {
    return (
        <div className="game-done">
            <div className="message" style={{ color: props.gameStatus === 'won' ? 'blue' : 'red'}}>
            {
                props.gameStatus === 'lost' ? "Game over" : "Won"
            }
            </div>
            <button onClick={props.onClick}>Play Again</button>
        </div>
    )
}

export default PlayAgain;