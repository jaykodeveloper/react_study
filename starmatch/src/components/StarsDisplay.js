import React, { Component, useState } from 'react';
import '../App.scss';
import starcal from '../utils/starcal'

const StarsDisplay = props => {
    return (
        <>
        {
            starcal.range(1, props.stars).map(starId =>
                <div key={starId} className="star" />
            )
        }
        </>
    )
}

export default StarsDisplay;